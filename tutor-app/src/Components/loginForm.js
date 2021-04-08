import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";


class LoginForm extends React.Component{
    
    loginCredentials = [['hannah@me.com','hello']];
    state = {
        email:"",
        password:"",
        login:false
    };
    
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value});
    };

    /*validateForm(){
        // password needs to be 14 or less in length
        return email.length >0 && password.length > 0 && password.length < 15;
    } */

    logIn(){
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        try{
            var i;
            for (i=0;i<this.loginCredentials.length;i++){
                if (this.loginCredentials[i] == [this.state.email,this.state.password]){
                    this.state.login=true;
                }
            }
            return;
        }
        catch(e){
            console.log(e)
        }
    }

    register(){
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        try{
            var i;
            var accountStatus = false;
            for (i=0;i<this.loginCredentials.length;i++){
                if (this.loginCredentials[i] == [this.state.email,this.state.password]){
                    accountStatus= true;
                }
            if (accountStatus == false){
                this.loginCredentials.push([this.state.email,this.state.password])
            }
        }
        }
        catch(e){
            console.log(e)
        }
    }

    render(){
        return (
        <div>
            <link rel="stylesheet" href="style.css" />
            <div className="form">
            <h2 className="logIn-header">Log In to Tutor Zone 3000!</h2>
                <Form className="innerform">
                    <Form.Group className = "input" controlId = "formBasicEmail">
                        <Form.Label>Email address
                        </Form.Label>
                        <Form.Control type ="email" placeholder = "name@example.com" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formBasicPassword">
                        <Form.Label>Password 
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className = "button" onClick = {this.logIn}>
                        Submit
                    </Button>
                    <Button variant="secondary" type="submit" className = "button" onClick = {this.register}>
                        New Register
                    </Button>
                </Form>
            </div>
        </div>)
    }
}

export default LoginForm