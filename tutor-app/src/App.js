import React from 'react';
import {observer} from 'mobx-react';
import LoginForm from './Components/loginForm';
import HomeScreen from './Components/homeScreen';
import TutorApply from './Components/TutorApply';
import PostListing from './Components/postListing';
import './App.css';

class App extends React.Component{
  render(){

    if(window.location.href.includes("/home")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <HomeScreen/>
            </div>
        </div>
      )
    }
    else if(window.location.href.includes("/login")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <LoginForm/>
            </div>
        </div>
      )
    }
    else if(window.location.href.includes("/tutor-application")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <TutorApply/>
            </div>
        </div>
      )
    }
    else if(window.location.href.includes("/post-listing")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <PostListing/>
            </div>
        </div>
      )
    }

    else{
      return(
        <div clasName = 'app'>
            <div className = 'container'>
              <HomeScreen/>
            </div>
        </div>
      )
    }
  }

}

export default observer(App);