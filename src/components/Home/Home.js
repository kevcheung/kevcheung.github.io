import React, { Component } from 'react';
import Navbar from '../Nav/Nav.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className="name">Kevin Cheung</h1>
                <h2 className="contactInfo">469-826-7986</h2>
                <h2 className="contactInfo">kevinchikitcheung@gmail.com</h2>
            </div>
        );
    }
}

export default Home;