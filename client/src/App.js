import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Cards from './components/layout/Cards';
import Gallery from './components/layout/Gallery';
import Footer from './components/layout/Footer';


import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

library.add(faIceCream)
library.add(faCookieBite)
library.add(faComments)

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className="main-content">
        <div className="fixed-top">
        <NavigationBar/> </div>
        <Hero/>
        <div className="content">
        <About/>
        <Cards/>
        <Gallery/>
        <Footer/>
        </div>
        </div>
      </div>
      </Router>
     
    );
  }
}

export default App;
