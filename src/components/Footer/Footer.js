import React, { Component } from 'react';
import linkedIn from '../../assets/icons/linkedin-plain.svg';
import github from '../../assets/icons/github-original.svg';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <a href='https://www.linkedin.com/in/kevinckcheung/'><img className='skillIcon' src={linkedIn} alt='skillIcon'/></a>
                <a href='https://github.com/kevcheung'><img className='skillIcon' src={github} alt='skillIcon'/></a>
            </div>
        );
    }
}

export default Footer;