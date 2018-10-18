import React, { Component } from 'react';
import headshot from '../../assets/headshot.jpg';

class Landing extends Component {
    render() {
        return (
            <div className='landBackground'>
                    <img className='headshot' src={headshot} alt="headshot"/>
                <div className='contact'>
                    <h1 className='name'>Kevin Cheung</h1>
                        <div className='digits'>
                            <a className='contactInfo number' href='tel:4698267986'>(469) 826-7986</a>
                            <h2 className='contactInfo divider'>|</h2>
                            <a className='contactInfo email' href='mailto:kevinchikitcheung@gmail.com'>kevinchikitcheung@gmail.com</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default Landing;