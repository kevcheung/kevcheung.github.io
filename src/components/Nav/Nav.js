import React, { Component } from 'react';
import logo from '../../assets/icons/logo.svg';

class Nav extends Component{
    constructor(){
        super();
        this.state = {
            menuSlide: false,
            refreshSlide: true
        }
        this.openMenu = this.openMenu.bind(this);
        // this.closeMenu = this.closeMenu.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.homeScroll = this.homeScroll.bind(this);
        this.aboutScroll = this.aboutScroll.bind(this);
        this.skillScroll = this.skillScroll.bind(this);
        this.projScroll = this.projScroll.bind(this);
        this.expScroll = this.expScroll.bind(this);
    }
    openMenu = (e) => {
        e.preventDefault();
        this.setState({ menuSlide: !this.state.menuSlide, refreshSlide: false });
    }
    // closeMenu = () => {
    //     this.setState({ menuSlide: false }, () =>{ document.removeEventListener('click', this.closeMenu) });
    // }
    menuClick = () => {
        this.setState({ menuSlide: false, refreshSlide: false })
    }
    homeScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    }
    aboutScroll = () => {
        window.scrollTo({ top: 430, behavior: "smooth"});
    }
    skillScroll = () => {
        window.scrollTo({ top: 855, behavior: "smooth"});
    }
    projScroll = () => {
        window.scrollTo({ top: 1280, behavior: "smooth"});
    }
    expScroll = () => {
        window.scrollTo({ top: 1945, behavior: "smooth"});
    }
    render(){
        let nav;
        nav = <div className='nav'>
                        <img className='logo' onClick={this.homeScroll} src={logo}/>
                        {this.state.menuSlide && (
                            <div onClick={() => this.setState({ menuSlide: false })} className='mobile-site'/>
                        )}
                        <div className={'burger-menu ' + (this.state.menuSlide ? 'slideIn' : '')
                        + (!this.state.menuSlide && !this.state.refreshSlide ? 'slideOut' : '')
                        }>
                            <div onClick={this.openMenu} className={'burger ' + (this.state.menuSlide ? 'active' : '') 
                            + (!this.state.menuSlide && !this.state.refreshSlide ? 'inactive' : '')} >
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            <div className={'nav-links ' + (this.state.menuSlide ? '' : 'slideOut')} onClick={this.menuClick}>
                                <p className='link' onClick={this.aboutScroll}>About Me</p>
                                <p className='link' onClick={this.skillScroll}>Skills</p>
                                <p className='link' onClick={this.projScroll}>Projects</p>
                                <p className='link' onClick={this.expScroll}>Experience</p>
                                <p className='link' onClick={this.homeScroll}>Home</p>
                            </div>
                        </div>
                    </div>
        // console.log(this.state.menuSlide)
        // console.log(this.state.refreshSlide)
        return(
            <div>
                {nav}
            </div>
        );
    }
}

export default Nav;