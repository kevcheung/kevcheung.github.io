import React, { Component } from 'react';

class Experience extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    name: 'DevMountain | Junior Full Stack Developer',
                    time: 'May 2018 - July 2018',
                    description: 'This is where I truly learned the basics of Javascript and used that knowledge to create full-stack web applications by myself and with fellow students. I experienced the developer life firsthand by participating in stand-ups every day and coding from 9-5.'
                },
                {
                    name: 'American Property Guard | HOA Research Team',
                    time: 'July 2014 - March 2018',
                    description: "As a HOA Research Team member, I searched for homeowner's associations that were not known to us in order to get their fees for customers. I also filled in for our team lead while he was unavailable."
                }
            ]
        }
    }
    render() {
        let displayExp;
        displayExp = this.state.projects.map(({name, time, description}) => (
                <div className='one'>
                    <h1 className='blueTitle smallName whiteText topSpace'>{name}</h1>
                    <h2 className='smallContent whiteText'>{time}</h2>
                    <p className='smallContent whiteText paragraph'>{description}</p>
                </div>
            )
        )
        return (
            <div className='background blueBack experience'>
                <div className='content'>
                    <h1 className='whiteTitle'>Experience</h1>
                    {displayExp}
                </div>
            </div>
        );
    }
}

export default Experience;