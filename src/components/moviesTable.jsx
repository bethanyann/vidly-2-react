import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';

class MoviesTable extends Component {
    //structured the app so that the MoviesTable component is a wrapper around the 
    //Table component, making it easier to reuse the Table component for anything else in our 
    //application
    columns = [
        {path: 'title', label: 'Title' },
        {path: 'genre.name', label: 'Genre' },
        {path: 'numberInStock', label: 'Stock' },
        {path: 'dailyRentalRate', label: 'Rate' },
        {key: 'like', content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>) }, //empty object for like column
        {key: 'delete', content: movie => (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm"><span className="fa fa-trash"></span></button>)}, //empty object for delete column
    ];
   

    render() { 
        const {movies, onSort, sortColumn} = this.props;

        return (
          <Table 
            columns={this.columns} 
            data={movies} 
            sortColumn={sortColumn} 
            onSort={onSort}
          />
        );
    }
}
 
export default MoviesTable;


//make a functional component because we don't need local state here 
//then we created it as a class so that it can have a method to handle the sorting
// const MoviesTable = (props) => {
//     const {movies, onDelete, onLike, onSort} = props;

//     return (
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th onClick={() => onSort("title")}>Title</th>
//                     <th onClick={() => onSort("genre.name")}>Genere</th>
//                     <th onClick={() => onSort("numberInStock")}>Stock</th>
//                     <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//                     <th></th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {movies.map(movie => ( 
//                     <tr key={movie._id}> {/* each time you use map() you need to set a unique key for each element inside the element that is repeating */}
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         <td>
//                             <Like liked={movie.liked} onClick={() => onLike(movie)}/>
//                         </td>
//                         <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm"><span className="fa fa-trash"></span></button></td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// export default MoviesTable;