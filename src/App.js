import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import SubmitContact from './components/SubmitContact/SubmitContact';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/contact-us" component={SubmitContact} />

        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
