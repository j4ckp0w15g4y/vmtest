import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import SubmitContact from './components/SubmitContact/SubmitContact'



class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
        </nav>
        <main>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/contact-us" component={SubmitContact} />

        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
