import React from 'react';
import UserStore from './stores/UserStore';;

class toolBar extends React.Component{
    //different rendering of login for if user is logged in or if user is logged out
    render(){
        if (UserStore.isLoggedIn == True){
            return(
                <ul class = "navs">
                    <li><a href="homeScreen.js">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="studentProfile.js">Create Profile</a></li>
                    <li><a href="LoginForm.js">Log In</a></li>
                </ul>  );
        }
        else{
            return(
                <ul class = "navs">
                    <li><a href="homeScreen.js">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="studentProfile.js">Create Profile</a></li>
                    <li><a href="LoginForm.js">Log Out</a></li>
                </ul> );
        }
    }
}

export default toolBar;