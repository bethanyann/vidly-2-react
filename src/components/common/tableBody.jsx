import React, { Component } from 'react';
import Like from './like';
import _ from 'lodash';


class TableBody extends Component {
    columnCell = (item,column) => {
        if(column.content) return column.content(item);
        else return _.get(item, column.path);
    }

    createKey = (item,column) => {
        return item._id + (column.path || column.key);
    }

    render() { 
        const { data, columns } = this.props;

        return ( 
            <tbody>
                {data.map(item =>  
                   <tr key={item._id}>
                       {columns.map(column=> 
                            <td key={this.createKey(item,column)}>{ this.columnCell(item,column) }</td>
                       )}  { /* use lodash here to get the properies because some of them are nested (genre.name) */ }
                   </tr>)}
            </tbody>
         );
    }
}
 
export default TableBody;