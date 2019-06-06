import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import Home from './views/Home'
import MovieForm from './components/MovieForm'
import MovieView from "./components/MovieView";


function Routes() {
  return <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={MovieForm} />
    <Route exact path="/movie/:id" component={MovieView} />
    <Route component={() => <div>Not Found</div>} />
  </React.Fragment>
}

function App() {
  return <Router>
    <Routes />
  </Router>
}

export default App