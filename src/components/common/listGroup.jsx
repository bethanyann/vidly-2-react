import React from 'react';

const ListGroup = ({ items, onItemSelect, textProperty, valueProperty, selectedItem}) => {
   //const { items, onItemSelect, textProperty, valueProperty, selectedItem} = props;

   return (
        <ul className="list-group list-group-horizontal" style={{flexDirection:"row"}} >
            {items.map(genre => (
                    <li className={ genre === selectedItem ? "list-group-item active" : "list-group-item"} 
                     style={{marginRight: 20, marginBottom: 20}} 
                     key={genre[valueProperty]} 
                     onClick={() => onItemSelect(genre)}>
                        {genre[textProperty]} 
                    </li>
            ))}
        </ul>
   );

//    <ul className="list-group list-group-horizontal">
//         <li className="list-group-item">Genere 1</li>
//         <li className="list-group-item">Dapibus ac facilisis in</li>
//         <li className="list-group-item">Morbi leo risus</li>
//     </ul>
}

//in this object you can set your object's properties and their default values
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;