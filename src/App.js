import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList/>
      </React.Fragment>
    )
  }
}


export default App;
