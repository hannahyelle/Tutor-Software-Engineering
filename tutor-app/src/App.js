import React from 'react';
import {observer} from 'mobx-react';
import LoginPortal from './Components/LoginPortal';
import HomeScreen from './Components/homeScreen';
import './App.css';

class App extends React.Component{
  render(){
    if(window.location.href.includes("/home")){
      return(
        <div clasName = 'app'>
            <div className = 'container'>
              <HomeScreen/>
            </div>
        </div>
      )
    }
    else if(window.location.href.includes("/login")){
      return(
        <div clasName = 'app'>
            <div className = 'container'>
              <LoginPortal/>
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