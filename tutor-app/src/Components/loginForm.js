//March 12th - Hannah 
import React from 'react';
import SubmitButton from './submitButton';
import UserStore from './stores/UserStore';
import InputField from './inputField';


//Hananh

class LoginForm extends React.Component {
    
    loginCredentials = []
    //stores information
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }


    setInputValue(property, val){
        val = val.trim();
        //username and password have max length of 12
        if (val.length >12){
            return;
        }
        this.setState({
            [property]:val
        })
    }

    //resets form if something is incorrect
    resetForm(){
        this.setState({
        username: '',
        password: '',
        buttonDisabled: false
        })
    }

    checkLogin(username, pswrd){
        for (var k = 0; k < this.loginCredentials.length; k++){
            if (k[0] == username && k[1] == pswrd){
                return true
            }
            else{
                return false
            }
        }
    }

    async signUp(){
        if (!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        try{

        }
        catch(e){
            console.log(e);
            this.resetForm();
            this.loginCredentials.push([this.state.username,this.state.password]);
            this.doLogin();
        }
    }
    //logs in a user
    async doLogin(){
        if (!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        //can not press login a second time
        this.setState({
            buttonDisabled:true
        })
        //try to set username and password
        try{
            let res = await fetch('/login',{
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });
            let result = this.checkLogin(this.state.username,this.state.password)
            if (result == true){
                UserStore.isLogginIn = true;
                UserStore.username = result.username;
            }
            else if (result == false){
                this.resetForm();
                alert(result.msg);
            }
        }
        //if there is an issue reset the form
        catch(e){
            console.log(e);
            this.resetForm();
        }
    }
    render(){
        //return login if user presses login
        return (
            <div className="login Form">
                <InputField
                    type = 'text'
                    placeholder = 'Username'
                    value = {this.state.username ? this.state.username : ''}
                    onChange= { (val) => this.setInputValue('username',val)}
                    />
                <InputField
                    type = 'text'
                    placeholder = 'Password'
                    value = {this.state.password ? this.state.password : ''}
                    onChange ={(val) =>this.setInputValue('password',val)}
                    />
                <SubmitButton
                    text = 'Login'
                    disabled = {this.state.buttonDisabled}
                    onClick = {this.doLogin()}
                />
                <SubmitButton
                    text = 'Sign Up'
                    disabled = {this.state.buttonDisabled}
                    onClick = {this.signUp()}
                />
            </div>
        );
    }

}


export default LoginForm;