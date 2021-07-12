import React from 'react';

//make a functional component because we don't need local state here 
const MoviesTable = (props) => {
    const {movies,onDelete, onLike} = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genere</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => ( 
                    <tr key={movie._id}> {/* each time you use map() you need to set a unique key for each element inside the element that is repeating */}
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                        </td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"><span className="fa fa-trash"></span></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MoviesTable;