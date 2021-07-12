import React, { Component } from 'react';
//import the getMovies function from the fakeMovieService class
import { getMovies } from'../services/fakeMovieService';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import {paginate} from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash';


class Movies extends Component {
    state = { 
        genres: [],
        movies: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path:'title', order:'asc'}
    }
//Initlize array data from services in the lifecycle hooks
componentDidMount() {
    //adding the 'all genres' category to display all movies
    const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres});
}    

//EVENT HANDLERS
    handleDelete = (movie) => {
        console.log(movie);
        //get all movies except the movie that was passed in 
        const newMovies = this.state.movies.filter(m => m._id !== movie._id);
        //call setState method to set the new state of the movies property
        this.setState({movies : newMovies});
    }

    handleLike = (movie) => {
        //dont want to modify the state directly so make a copy of the movies passed in for updating
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index]};
        movies[index].liked = !movies[index].liked;

        this.setState({movies});
    }

    handlePageChange = (page) => {
        this.setState({currentPage:page});
    }

    handleGenreSelect = (genre) => {
        //when genre changes we need to set the selected page back to 1 to make sure all movies appear
        this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    }

    render() { 
        //use object destructuring to set a constant
        const {length : moviesCount} = this.state.movies;
        const {pageSize, currentPage, movies:allMovies, selectedGenre, sortColumn} = this.state;
        //table.table>thead>tr>th*4 -> this is a shortcut to generate a table with all the
        // elements instead of typing them all out individually
        if(moviesCount === 0) return <p>There are no movies in the database.</p>;
        
        //apply filters before paginating
        const filteredMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        //then sort the data
        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
        //paginate here
        const movies = paginate(sortedMovies, currentPage, pageSize);

        return ( 
        <div className="row" style={{marginTop: 20}}>
            <div className="col-2">
                <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} selectedItem={this.state.selectedGenre} />
            </div>
            <div className="col"> 
                <p>Showing {filteredMovies.length} movies in the database. </p>
                <MoviesTable 
                    movies={movies} 
                    sortColumn={sortColumn}
                    onLike={this.handleLike} 
                    onDelete={this.handleDelete}
                    onSort={this.handleSort} />
                <div style={{marginTop: 150}}>
                     <Pagination 
                        itemsCount={filteredMovies.length}
                        pageSize={pageSize} 
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}/>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Movies;