import React from 'react';
import {observer} from 'mobx-react';
import LoginPortal from './Components/LoginPortal';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div clasName = 'app'>
          <div className = 'container'>
            <LoginPortal/>
          </div>
      </div>
    )
  }

}

export default observer(App);