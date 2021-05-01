import React from 'react';
import {observer} from 'mobx-react';
import LoginForm from './Components/LoginForm';
import HomeScreen from './Components/homeScreen';
import TutorApply from './Components/TutorApply';
import PostListing from './Components/postListing';
import StudentProfile from './Components/studentProfile';
import './App.css';
import './index.css'

class App extends React.Component{
  render(){
    if(window.location.href.includes("/home")){
      return(
        /*<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        </head>*/

        <body>
          <div className="nav"> 
            <nav className="nav">
                <div className="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul className= "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
            <div id="root"></div>
            <div className = 'app'>
                <div className = 'container'>
                  <HomeScreen/>
                </div>
            </div>
            </div>
          </body>

      )
    }
    else if(window.location.href.includes("/login")){
      return(
        <body>
            <nav>
                <div class="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul class = "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
            <div id="root"></div>
          <div className = 'app'>
              <div className = 'container'>
                <LoginForm/>
              </div>
          </div>
        </body>
      )
    }
    else if(window.location.href.includes("/tutor-apply")){
      return(
        <body>
          <div className="nav"> 
            <nav className="nav">
                <div className="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul className= "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
        <div className = 'app'>
            <div className = 'container'>
              <TutorApply/>
            </div>
        </div>
        </div>
        </body>
      )
    }

    else if(window.location.href.includes("/profile")){
      return(
        <body>
          <div className="nav"> 
            <nav className="nav">
                <div className="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul className= "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
        <div className = 'app'>
            <div className = 'container'>
              <StudentProfile/>
            </div>
        </div>
        </div>
        </body>
      )
    }

    else if(window.location.href.includes("/post-success")){
      return(
        <body>
          <div className="nav"> 
            <nav className="nav">
                <div className="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul className= "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
        <div className = 'app'>
            <div className = 'container'>
              <h2>Successfully posted your listing!</h2>
              <a href="home"><h5>Retrun to Home</h5></a>
            </div>
        </div>
        </div>
        </body>
      )
    }

    else if(window.location.href.includes("/post-listing")){
      return(
        <body>
          <div className="nav"> 
            <nav className="nav">
                <div className="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul className= "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
        <div className = 'app'>
            <div className = 'container'>
              <PostListing/>
            </div>
        </div>
        </div>
        </body>
      )
    }

    else{
      return(
        <body>
          <div className="nav"> 
            <nav className="nav">
                <div className="logo">
                    <h4>Tutor App</h4>
                </div>
                <ul className= "navs">
                    <li><a href="home">Home</a></li>
                    <li><a href="post-listing">Post Listing</a></li>
                    <li><a href="tutor-apply">Tutor Apply</a></li>
                    <li><a href="profile">Create Profile</a></li>
                    <li><a href="login">Log In</a></li>
                </ul>
            </nav>
            <div className = 'app'>
                <div className = 'container'>
                  <HomeScreen/>
                </div>
            </div>
            </div>
          </body>
      )
    }
  }

}

export default observer(App);