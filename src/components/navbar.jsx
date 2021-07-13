import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Vidly
            </Link>
            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/movies">
                            Movies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/customers">
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/login">
                            Login 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;