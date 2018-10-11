import React, { Component } from 'react';
import javascript_icon from '../../assets/icons/javascript-original.svg';
import html_icon from '../../assets/icons/html5-plain.svg';
import css_icon from '../../assets/icons/css3-plain.svg';
import react_icon from '../../assets/icons/react-original.svg';
import redux_icon from '../../assets/icons/redux.svg';
import node_icon from '../../assets/icons/nodejs-original.svg';
import postgresql_icon from '../../assets/icons/postgresql-plain.svg';
import sass_icon from '../../assets/icons/sass-original.svg';
import git_icon from '../../assets/icons/git-plain.svg';

class Skills extends Component {
    constructor(){
        super();
        this.state = {
            skills: [
                {
                    skill: 'Javascript',
                    url: 'https://www.javascript.com/',
                    img: javascript_icon
                },
                {
                    skill: 'CSS3',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
                    img: css_icon
                },
                {
                    skill: 'HTML5',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
                    img: html_icon
                },
                {
                    skill: 'React',
                    url: 'https://reactjs.org',
                    img: react_icon
                },
                {
                  skill: 'Redux',
                  url: 'https://redux.js.org',
                  img: redux_icon
                },
                {
                    skill: 'Node.js',
                    url: 'https://nodejs.org/en',
                    img: node_icon
                },
                {
                    skill: 'PostgreSQL',
                    url: 'https://www.postgresql.org',
                    img: postgresql_icon
                },
                {
                    skill: 'Sass',
                    url: 'https://sass-lang.com',
                    img: sass_icon
                },
                {
                    skill: 'Git + GitHub',
                    url: 'https://git-scm.com',
                    img: git_icon
                }
            ]
        }
    }
    render() {
        let displaySkill;
        displaySkill = this.state.skills.map(({skill, img, url}) => (
                <div className='oneSkill'>
                    <a href={url}><img className='skillIcon' src={img} alt={skill}/></a>
                    <h5 className='smallTitle'>{skill}</h5>
                </div>
        ));
        return (
            <div className='background blueBack'>
                    <h1 className='whiteTitle skill'>Skills</h1>
                <div className='iconSection'>
                    {displaySkill}
                </div>
            </div>
            // <div className='skills'>
            //         <h1 className='whiteTitle'>Skills</h1>
            //     <div className='iconSection'>
            //         <a className='skill' href={'https://es6.io'}><img src={javascript_icon} alt='javascript'></img></a>
            //         <a className='skill' href={'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'}><img src={html_icon} alt='html'></img></a>
            //         <a className='skill' href={'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'}><img src={css_icon} alt='css'></img></a>
            //         <a className='skill' href={'https://reactjs.org'}><img src={react_icon} alt='react'></img></a>
            //         <a className='skill' href={'https://redux.js.org'}><img src={redux_icon} alt='redux' href={'https://redux.js.org'}></img></a>
            //         <a className='skill' href={'https://nodejs.org/en'}><img src={node_icon} alt='node'></img></a>
            //         <a className='skill' href={'https://www.postgresql.org'}><img src={postgresql_icon} alt='postgresql'></img></a>
            //         <a className='skill' href={'https://sass-lang.com'}><img src={sass_icon} alt='sass'></img></a>
            //         <a className='skill' href={'https://git-scm.com'}><img src={git_icon} alt='git'></img></a>
            //     </div>
            // </div>
        );
    }
}

export default Skills;