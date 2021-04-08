import React from 'react';
import {observer} from 'mobx-react';
import LoginForm from './Components/LoginForm';
import HomeScreen from './Components/homeScreen';
import TutorApply from './Components/TutorApply';
import studentProfile from './Components/studentProfile.js'
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
    else if(window.location.href.includes("/LoginForm")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <LoginForm/>
            </div>
        </div>
      )
    }
    else if(window.location.href.includes("/TutorApply")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <TutorApply/>
            </div>
        </div>
      )
    }

    else if(window.location.href.includes("/studentProfile")){
      return(
        <div className = 'app'>
            <div className = 'container'>
              <studentProfile/>
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