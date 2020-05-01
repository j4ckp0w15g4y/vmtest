import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class HomePage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    // componentDidMount() {

    // }
    
    render() {
        return (
            <div>
                <div className="carousel">
                <p className="carousel-text"></p>
                <img className="carousel-image"></img>
                </div>

                <div> 
                    <p className="para"></p>
                    <img className="first-image"></img>
                </div>

                <div> 
                    <p className="para"></p>
                    <button><Link to="/contact-us">Contact Us</Link></button>
                </div>

            </div>
        );
    }
}

export default HomePage;