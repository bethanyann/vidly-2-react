import React  from 'react';
import TableBody from './tableBody';
import TableHeaderSort from './tableHeaderSort';

//can put the arguments being passed in through props in the function
//to be able to cut out line 9 from the code
const Table = ({columns, sortColumn, onSort, data} ) => {
    return (  
        <table className="table">
            <TableHeaderSort columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody data={data} columns={columns} />
        </table>
    );
}

export default Table;