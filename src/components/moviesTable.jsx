import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';



class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like', 
          content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
        { key: 'delete', 
          content: movie => <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie)}>Delete</button>
        }
    ]

    render() { 
       //object destructuring right at the beginning so you can get an idea for what the interface for this will look like 
    const {movies, onSort, sortColumn} = this.props;

    return(
        <table className="table" style={{height: 150}}>
            <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody data={movies}  columns={this.columns} />
        </table>
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