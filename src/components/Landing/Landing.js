import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <img className='headshot' src="https://avatars2.githubusercontent.com/u/38509538?s=400&u=836398573c6d6d8b0b17e997f9220aa746a31345&v=4" alt="headshot"/>
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