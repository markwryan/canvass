import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './ContactList';
import ContactCreate from './ContactCreate';

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class App extends Component {

  render() {
    return(
        <Router>
          <Routes>
              <Route path='/' element={<ContactCreate />} />
              <Route path='/all' element={<ContactList />} />
          </Routes>
        </Router>
    )
  }
}

export default App;