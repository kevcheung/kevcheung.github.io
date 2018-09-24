import React, { Component } from 'react';

class Nav extends Component{
    constructor(){
        super();
        this.state = {
            menuSlide: false
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.homeScroll = this.homeScroll.bind(this);
        this.aboutScroll = this.aboutScroll.bind(this);
        this.skillScroll = this.skillScroll.bind(this);
        this.projScroll = this.projScroll.bind(this);
        this.expScroll = this.expScroll.bind(this);
    }
    openMenu = (e) => {
        e.preventDefault();
        this.setState({ menuSlide: !this.state.menuSlide }, () => { document.addEventListener('click', this.closeMenu)});
    }
    closeMenu = () => {
        this.setState({ menuSlide: false }, () =>{ document.removeEventListener('click', this.closeMenu) });
    }
    menuClick = () => {
        this.setState({ menuSlide: false })
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
        console.log(this.state.menuSlide)
        return(
            <div className='mobile-nav'>
                <p className='logo' onClick={this.homeScroll}>Logo</p>
                <div className={'burger-menu ' + (this.state.menuSlide ? 'slideIn' : '')}>
                    <div onClick={this.openMenu} className={'burger ' + (this.state.menuSlide ? 'active' : '')} >
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <ul className={'nav-links ' + (this.state.menuSlide ? '' : 'noDisplay')} onClick={this.menuClick}>
                        <li className='link' onClick={this.aboutScroll}>About Me</li>
                        <li className='link' onClick={this.skillScroll}>Skills</li>
                        <li className='link' onClick={this.projScroll}>Projects</li>
                        <li className='link' onClick={this.expScroll}>Experience</li>
                        <li className='link' onClick={this.homeScroll}>Home</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;