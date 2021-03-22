//March 12th - Hannah 
import React from 'react';
import submitButton from './submitButton';
import UserStore from './stores/UserStore';
import inputField from './inputField';



class loginForm extends React.Component {
  
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

    async doLogin(){
        if (!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled:true
        })
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
            let result = await res.json();
            //set values to 
            if (result && result.success){
                UserStore.isLogginIn = true;
                UserStore.username = result.username;
            }
            else if (result && result.success === false){
                this.resetForm();
                alert(result.msg);
            }
        }
        catch(e){
            console.log(e);
            this.resetForm();
        }
    }
render(){
    
  return (
    <div className="login Form">
        <inputField
            type = 'text'
            placeholder = 'Username'
            value = {this.state.username ? this.state.username : ''}
            onChange= { (val) => this.setInputValue('username',val)}
            />
        <inputField
            type = 'text'
            placeholder = 'Password'
            value = {this.state.username ? this.state.username : ''}
            onChange ={(val) =>this.setInputValue('password',val)}
            />
        <submitButton
            text = 'Login'
            disabled = {this.state.buttonDisabled}
            onClick = { () => this.doLogin()}
        />
    </div>
  );
}
}

export default loginForm;