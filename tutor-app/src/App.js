import React from 'react';
import {observer} from 'mobx-react';
<<<<<<< HEAD
import LoginForm from './Components/LoginForm';
import HomeScreen from './Components/homeScreen';
import TutorApply from './Components/TutorApply';
import studentProfile from './Components/studentProfile.js'
=======
import UserStore from './Components/stores/UserStore';
import SubmitButton from './Components/submitButton';
import LoginForm from './Components/loginForm';
>>>>>>> 101a75294fcc150636318e610662ed31a2626795
import './App.css';

//this youtube series is helping to set up login system -> 
//might have other videos https://www.youtube.com/watch?v=QoLUB0QkUaE&t=165s!

class App extends React.Component {
  //March 12th - Hannah 
  //define methods of api 
  //login function 
  async componentDidMount(){
    try{
      //checks if user is logged in once component is mounted
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.usernmae = result.username;
      }
      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  //logout function
  async doLogout(){
    try{
      //checks if user is logged in once component is mounted
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
        UserStore.usernmae = '';
      }
    }
    catch(e){
      console.log(e)
    }
  }

  //rendering
  render(){

    if (UserStore.loading){
      return (
        <div className='app'>
          <div className = 'container'>
            Loading, please wait..
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
      if (UserStore.isLoggedIn){
        <div className='app'>
          <div className = "container">
            Welcome {UserStore.username}
            <SubmitButton
              text={'Log out'}
              disabled = {false}
              onClick = {() => this.doLogout()}
              />
          </div>
        </div>
      }
      return (
        <div clasName = 'app'>
          <div className = 'container'>
            <LoginForm />
          </div>
        </div>

      );

    }
}
}

export default observer(App);
