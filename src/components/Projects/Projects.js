import React, { Component } from 'react';
import swafli1 from '../../assets/previews/Home Page.png';
import swafli2 from '../../assets/previews/New Uploads Page.png';
import swafli3 from '../../assets/previews/Search Function.png';
import door1 from '../../assets/previews/Login Page.png';
import door2 from '../../assets/previews/Add HOA Page.png';
import door3 from '../../assets/previews/Search Page.png';

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    name: 'Swafli | Team Project',
                    description: 'Swafli is a web application that allows the user to stream music, add songs to a favorites list, and share their own music with other users.',
                    technologies: 'React | Redux | Node.js | PostgreSQL | SCSS | Firebase',
                    img1: swafli1,
                    img2: swafli2,
                    img3: swafli3,
                    url: 'http://www.swafli.fun/',
                    github: 'https://github.com/pandora-clone/pandora-clone'
                },
                {
                    name: 'door/door (Door to Door) | Sole Developer',
                    description: "Door to Door is a web application that allows members of a specific homeowner's association to search for their neighborhood and fees as well as communicate with other members.",
                    technologies: 'React | Redux | Node.js | PostgreSQL | Auth0',
                    img1: door1,
                    img2: door2,
                    img3: door3,
                    url: 'http://doortodoor.site:8082/#/',
                    github: 'https://github.com/kevcheung/door-door'
                }
            ]
        }
    }
    render() {
        let projectDisplay;
        projectDisplay = this.state.projects.map(({name, description, technologies, img1, img2, img3, url, github}) => (
                <div className='one'>
                        <h1 className='blueTitle smallName topSpace'>{name}</h1>
                        <h2 className='smallContent'>{technologies}</h2>
                        <p className='smallContent paragraph'>{description}</p>
                    {/* <div className='imgSection'>
                        <img className='images' src={img1}/>
                        <img className='images' src={img2}/>
                        <img className='images' src={img3}/>
                    </div> */}
                    <div className='projectlinks'>
                        <p className='smallContent'>URL: <a className='projectLink' href={url}>{url}</a></p>
                        <p className='smallContent'>GitHub: <a className='projectLink' href={github}>{github}</a></p>
                    </div>
                </div>
        ));
        return (
            <div className='background whiteBack project'>
                <div className='content'>
                    <h1 className='blueTitle'>Projects</h1>
                    {projectDisplay}
                </div>
            </div>
        );
    }
}

export default Projects;