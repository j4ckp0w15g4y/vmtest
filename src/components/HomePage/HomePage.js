import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            title: [],
            subtitle: [],
            imageUrl: []
        }
    }

    getInfo() {
        let url = `https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details`
        axios.get(url)
          .then(response => {
              const titles = response.data.Details.map((info) => info.Title)
              const subtitles = response.data.Details.map((info) => info.Subtitle) 
              const imageUrlArray = response.data.Details.map((info) => info.ImageUrl)           
            this.setState({
              title: titles,
              subtitle: subtitles,
              imageUrl: imageUrlArray
            //   subtitle: response.data.Details.Subtitle,
            //   imageUrl: response.data.Details.ImageUrl
            });        
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      }

    componentDidMount() {
        this.getInfo();        
    }

    render() {
        console.log(this.state.imageUrl)
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