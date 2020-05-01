import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
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