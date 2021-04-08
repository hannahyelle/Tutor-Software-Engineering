
import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {SubjectSelect, TimeSelect} from './dropdownSelect';

class PostListing extends React.Component{

    render(){
        return(
            <div>
            <link rel="stylesheet" href="style.css" />
            <div className="form">
            <h2 className="logIn-header">Create a Listing to Connect With Tutors</h2>
                <Form className="innerform">
                    <Form.Group className = "input" controlId = "formBasicSubject">
                        <Form.Label>Select Subjects</Form.Label>
                        <SubjectSelect/>
                    </Form.Group>
                    <Form.Group className = "input" controlId = "formBasicTimes">
                        <Form.Label>Select Time Availabilities</Form.Label>
                        <TimeSelect/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className = "button" onClick = {this.render}>
                        Post Listing
                    </Button>
                </Form>
            </div>
        </div>
        );
    }
}

export default PostListing;