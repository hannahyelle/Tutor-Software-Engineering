import React from 'react';
import UserStore from './stores/UserStore';
import './style.css';

class homeScreen extends React.Component{

    render(){
        return(
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="style.css" />
            <div className="page">
                <a href="https://umaine.edu/"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/University_of_Maine_logo.svg/1280px-University_of_Maine_logo.svg.png" alt="Umaine Logo" style={{width: '400px', height: '120px'}} className="center" /></a>
                <h2 className="hp-header">Welcome to Tutor Zone 3000!</h2>
                <div className="scroll-box" style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>
                    <p className="description">The Tutor App is the perfect place to fulfill all your educational needs. This service offers a place for Umaine students to connect with tutors and receive the help they need. We offer easy to use features such as searching for classes, organizing a calendar, ways to communicate with other users, and more! In order to access this application one must be a student at Umaine where one then can create an account and enter profile information.</p>
                </div>
                <div className="double-box">
                    <div className="right-box">
                    <img src="https://images.pexels.com/photos/5940845/pexels-photo-5940845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Tutor people" />
                    </div>
                    <div className="left-box">
                    <h3>For Students</h3>
                    <div className="scroll-box">
                        <p>Students are able to create an account. With an account comes a profile and access to a calendar. A student can then browse the tutor search tool which lets the one search for classes or other users. Students are able to browse the tutors available and look at comapre schedules for comaptable times. Students must be a umaine student in order to create an account.</p>
                    </div>
                    <a href="profile"><h5>Create Profile</h5></a>
                    </div>
                </div>
                <div className="double-box">
                    <div className="left-box">
                    <img src="https://images.pexels.com/photos/4492160/pexels-photo-4492160.jpeg?cs=srgb&dl=pexels-artem-podrez-4492160.jpg&fm=jpg" alt="Tutor Woman" />
                    </div>
                    <div className="right-box">
                    <h3>For Tutors</h3>
                    <div className="scroll-box">
                        <p>Tutors can apply by filling out our application process and forms. Once a Tutor is accepted one is then required to make an account. Tutor accounts have different features thant student accounts such as a lace to store materials for tutoring. In order to become a tutor one must be a umaine student.</p>
                    </div>
                    <a href="./TutorApply.js"><h5>Tutor Application</h5></a>
                    </div>
                </div>
                <h4 className="footer">Tutor Group 2021</h4>
                </div>
                <div id="root" />
            </div>
        );
    }
}

export default homeScreen;