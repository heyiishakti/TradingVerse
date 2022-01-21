import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          <Header />
      <Home />
          
          </Route>
      </div>
      </Router>
  );
}

export default App;
