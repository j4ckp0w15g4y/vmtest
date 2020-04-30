import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";



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
          <Route exact path="/" />
          <Route path="/about-us" />
          <Route path ="/contact-us" />


        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
