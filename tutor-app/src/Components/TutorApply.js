import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

class TutorApplication extends React.Component{
    state = {
        firstname:"",
        lastname:"",
        email:"",
        sub1:"",
        sub2:"",
        prior1:"",
        gpa:"",
    };

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value});
    };


    render(){
        return (
        <div>
            <link rel="stylesheet" href="style.css" />
            <div className="form">
            <h2 className="logIn-header">Tutor Application</h2>
                <Form className="innerform">
                    <Form.Group className = "input" controlId = "formFirstName">
                        <Form.Label>First name:</Form.Label>
                        <Form.Control type ="firstname" placeholder = "john" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId = "formLastName">
                        <Form.Label>Last name:</Form.Label>
                        <Form.Control type ="lastname" placeholder = "Doe" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId = "formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type ="email" placeholder = "John_Doe@example.com" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub1">
                        <Form.Label>Class subject 1 </Form.Label>
                        <Form.Control type="sub1" placeholder="STS232" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub2">
                        <Form.Label>Class subject 2 </Form.Label>
                        <Form.Control type="sub2" placeholder="..." onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub3">
                        <Form.Label>Class subject 3 </Form.Label>
                        <Form.Control type="sub3" placeholder="..." onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formPrior1">
                        <Form.Label>Prior experience </Form.Label>
                        <Form.Control type="prior 1" placeholder="Ski Instructor" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formGPA">
                        <Form.Label>GPA </Form.Label>
                        <Form.Control type="gpa" placeholder="4.0" onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className = "button" onClick = {this.logIn}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>)
    }
}

export default TutorApplication
