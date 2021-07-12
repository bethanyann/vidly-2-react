import React, { Component } from 'react';
import MoviesTable from './moviesTable'
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import {paginate} from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from "../services/fakeMovieService";
import _ from 'lodash';

class Movies extends Component {

    state = {
        movies: [], //init these as an empty array as it will take some time to get the data from the server and you don't want a null ref to break the app
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc'}
    }

    componentDidMount() {
        //add the 'all genres' option to the array
        const genres = [{_id: "", name:"All Genres"}, ...getGenres()]
        //get the data from the server here so that the movie and genere props aren't empty/undefined as the rest of the component is loading
        this.setState({ movies: getMovies(), genres: genres})
    }

    handleDelete = movie => {
        //console.log(movie); //double check that the movie is being passed in
        //to delete a movie, we will create a new movie array that includes all movies except the one deleted
        //then update the state of the movies array to reflect the changes
        const newMoviesArray = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : newMoviesArray});
    };

    handleLike = (movie) => {
        console.log("Like Clicked", movie);
        //clone the array
        const newMovies = [...this.state.movies];
        //find the index of the object that was clicked
        const index = newMovies.indexOf(movie);
        newMovies[index] = { ...newMovies[index]};
        newMovies[index].liked = !newMovies[index].liked;
        console.log(newMovies[index].liked);
        this.setState({movies : newMovies});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = (genre) => {
        //set currentPage = 1 any time a new genre is selected to reset the page selection
        this.setState({ selectedGenre: genre, currentPage: 1});
    }

    handleSort = (sortColumn) => {
      this.setState({sortColumn});
    }

    getPageData = () => {
        const { 
            pageSize, 
            currentPage,
            sortColumn, 
            movies: allMovies, 
            selectedGenre, 
        } = this.state;

           //here is where we will filter the movies - filter before paginating
           const filteredMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
           //after filtering then do sorting
           const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order] );
           //then paginate
           const movies = paginate(sortedMovies, currentPage, pageSize);

           return {totalCount: filteredMovies.length, data: movies};
    }


    render() {
        const { 
            pageSize, 
            currentPage,
            sortColumn, 
        } = this.state;
        
        const {length : moviesCount} = this.state.movies;

        if(moviesCount === 0) return <p>There are no movies in the database</p>;

        const {totalCount, data} = this.getPageData();

        //return table.table>thead>tr>th*4 -> this is a shortcut to generate a table with all the
        // elements instead of typing them all out individually

        return (
           
            <div>
                <div className="row">
                    {/* add text and value properties to keep the list group item decoupled and reusable */}
                    <ListGroup 
                        items={this.state.genres} 
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect} 
                    />
                </div>
                <div className="row">
                    <p>Showing {totalCount} movies in the database.</p>
                    <MoviesTable 
                        movies={data} 
                        sortColumn={sortColumn}
                        onLike={this.handleLike} 
                        onDelete={this.handleDelete} 
                        onSort={this.handleSort}
                    />
                    <Pagination 
                        itemCount={totalCount} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} 
                    /> 
                </div>
                
            </div>
        )

    }

}

export default Movies;