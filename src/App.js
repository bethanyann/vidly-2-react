import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        {/* wrap everything in a switch so the last redirect doesn't redirect every url to the movies page */}
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
