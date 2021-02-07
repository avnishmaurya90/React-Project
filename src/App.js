import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.js'
import Customer from './pages/customer/customer.js'
import Aboutus from './pages/aboutus/aboutus.js'
import Contactus from './pages/contactus/contactus.js'
import Vendor from './pages/vendor/vendor.js'
import Driver from './pages/driver/driver.js'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component = {Home} />
            <Route exact path="/Customer" component = {Customer} />
            <Route exact path="/aboutus" component = {Aboutus} />
            <Route exact path="/contactus" component = {Contactus} />
            <Route exact path="/vendor" component = {Vendor} />
            <Route exact path="/driver" component = {Driver} />
          </div>
      </Router>
    );
  }
}

export default App;
