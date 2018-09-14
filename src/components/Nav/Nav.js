import React, { Component } from 'react';

class Nav extends Component{
    constructor(){
        super();
        this.homeScroll = this.homeScroll.bind(this);
        this.aboutScroll = this.aboutScroll.bind(this);
        this.skillScroll = this.skillScroll.bind(this);
        this.projScroll = this.projScroll.bind(this);
        this.expScroll = this.expScroll.bind(this);
    }
    homeScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    }
    aboutScroll = () => {
        window.scrollTo({ top: 500, behavior: "smooth"});
    }
    skillScroll = () => {
        window.scrollTo({ top: 1000, behavior: "smooth"});
    }
    projScroll = () => {
        window.scrollTo({ top: 1500, behavior: "smooth"});
    }
    expScroll = () => {
        window.scrollTo({ top: 2000, behavior: "smooth"});
    }
    
    render(){
        return(
            <div className='navbar'>
                <ul>
                    <li className='logo' onClick={this.homeScroll}>Logo</li>
                    <li className='links' onClick={this.aboutScroll}>About Me</li>
                    <li className='links' onClick={this.skillScroll}>Skills</li>
                    <li className='links' onClick={this.projScroll}>Projects</li>
                    <li className='links' onClick={this.expScroll}>Experience</li>
                    <li className='links' onClick={this.homeScroll}>Home</li>
                </ul>
            </div>
        );
    }
}

export default Nav;