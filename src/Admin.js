import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Nav from './components/Nav'
function App() {
  return (
    <Router>
      <Nav/>
      {/* <Route exact path="/productos" component={} /> */}
    </Router>
  );
}


export default App;