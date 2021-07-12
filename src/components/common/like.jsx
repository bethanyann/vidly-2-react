import React, { Component } from 'react';

//Input: liked: boolean
//Output: onClick event

//controlled component so can be stateless functional component
const Like = props => {
    let classes="";
    if(props.liked === false)  
    {
        classes="fa fa-heart-o"
    }
    else{
        classes="fa fa-heart";
    }
    return ( 
        <i className={classes} style={{cursor: "pointer"}} aria-hidden="true" onClick={props.onClick}></i> 
    );
}
 
export default Like;


// class Like extends Component {
//     state = {  }
//     render() { 
//         let classes="fa fa-heart";
//         if(!this.props.liked) classes += "-o";
//         return ( 
//             <i className={classes} style={{cursor: "pointer"}} aria-hidden="true" onClick={this.props.onClick}></i> 
//         );
//     }
// }
 
// export default Like;
