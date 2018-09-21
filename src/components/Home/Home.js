import React, { Component } from 'react';
import Navbar from '../Nav/Nav.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className="name">Kevin Cheung</h1>
                <p className="contactInfo">469-826-7986</p>
                <p className="contactInfo">kevinchikitcheung@gmail.com</p>
            </div>
        );
    }
}

export default Home;