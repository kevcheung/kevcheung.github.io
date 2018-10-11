import React, { Component } from 'react';
import headshot from '../../assets/headshot.jpg';

class Landing extends Component {
    render() {
        return (
            <div className='landBackground'>
                    <img className='headshot' src={headshot} alt="headshot"/>
                <div className='contact'>
                    <h1 className='name'>Kevin Cheung</h1>
                    <a className='contactInfo' href='tel:4698267986'>(469) 826-7986</a>
                    <a className='contactInfo' href='mailto:kevinchikitcheung@gmail.com'>kevinchikitcheung@gmail.com</a>
                </div>
            </div>
        );
    }
}

export default Landing;