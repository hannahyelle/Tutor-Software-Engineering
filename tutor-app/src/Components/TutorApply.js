import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
//import {API} from 'aws-amplify';
//import { TutorApplication as createTutorData } from './graphql/mutations';


class TutorApplication extends React.Component{
    /*
    initialFormState = {
        firstname:"",
        lastname:"",
        email:"",
        age:"",
        sub1:"",
        sub2:"",
        employment:"",
        gpa:"",
    };
    
    const [apply, setApply] = useState([]);
    const [formData,setFormData] = useState(initialFormState);

    createApplication(){
        if (!formData.firstname || !formData.lastName) return;
        await API.graphql({query: createTutorData, variables:{input: formData} })
        setApply([...apply, formData]);
        setFormData(initialFormState);
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
                        <Form.Control type ="firstname" placeholder = "john" 
                        onChange={e => setFormData({...formData, 'firstname': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId = "formLastName">
                        <Form.Label>Last name:</Form.Label>
                        <Form.Control type ="lastname" placeholder = "Doe" 
                        onChange={e => setFormData({...formData, 'lastname': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId = "formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type ="email" placeholder = "John_Doe@example.com" 
                        onChange={e => setFormData({...formData, 'email': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub1">
                        <Form.Label>Age </Form.Label>
                        <Form.Control type="age" 
                        onChange={e => setFormData({...formData, 'age': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub1">
                        <Form.Label>Class subject 1 </Form.Label>
                        <Form.Control type="sub1" placeholder="STS232" 
                        onChange={e => setFormData({...formData, 'sub1': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub2">
                        <Form.Label>Class subject 2 </Form.Label>
                        <Form.Control type="sub2" placeholder="..." 
                        onChange={e => setFormData({...formData, 'sub2': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formPrior1">
                        <Form.Label>Employment </Form.Label>
                        <Form.Control type="employment" placeholder="Ski Instructor" 
                        onChange={e => setFormData({...formData, 'employment': e.target.value})}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formGPA">
                        <Form.Label>GPA </Form.Label>
                        <Form.Control type="gpa" placeholder="4.0" 
                        onChange={e => setFormData({...formData, 'gpa': e.target.value})}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className = "button" onClick = {createApplication}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>)
    }*/

    state = {
        firstname:"",
        lastname:"",
        email:"",
        age:"",
        sub1:"",
        sub2:"",
        employment:"",
        gpa:"",
    };

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value});
    };


    render(){
        return (
        <div>
            <link data-testid="applicationPage" rel="stylesheet" href="style.css" />
            <div className="form">
            <h2 className="logIn-header">Tutor Application</h2>
                <Form className="innerform">
                    <Form.Group className = "input" controlId = "formFirstName">
                        <Form.Label>First name:</Form.Label>
                        <Form.Control data-testid="nameField" type ="firstname" placeholder = "john" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId = "formLastName">
                        <Form.Label>Last name:</Form.Label>
                        <Form.Control data-testid="lastNameField" type ="lastname" placeholder = "Doe" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId = "formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type ="email" placeholder = "John_Doe@example.com" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub1">
                        <Form.Label>Age </Form.Label>
                        <Form.Control type="age" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub1">
                        <Form.Label>Class subject 1 </Form.Label>
                        <Form.Control type="sub1" placeholder="STS232" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formSub2">
                        <Form.Label>Class subject 2 </Form.Label>
                        <Form.Control type="sub2" placeholder="..." onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formPrior1">
                        <Form.Label>Employment </Form.Label>
                        <Form.Control type="employment" placeholder="Ski Instructor" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className = "input" controlId ="formGPA">
                        <Form.Label>GPA </Form.Label>
                        <Form.Control type="gpa" placeholder="4.0" onChange={this.handleChange}/>
                    </Form.Group>

                    <Button data-testid="applySubmit" variant="primary" type="submit" className = "button" onClick = {this.logIn}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>)
    }
}

export default TutorApplication
