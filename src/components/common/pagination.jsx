import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


const Pagination = ({itemCount, pageSize, currentPage, onPageChange}) => {
    //const {itemCount, pageSize, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil(itemCount / pageSize);

    //console.log('current page ',currentPage);
    
    //if there's only one page don't display the page numbers
    if(pagesCount === 1) return null;
    //returns an array of numbers from the first number (start) to the end number (pagesCount +1)
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li className={ page === currentPage ? 'page-item active' : 'page-item'} key={page} >
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            
            </ul>
        </nav>
    );
}
 

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default Pagination;