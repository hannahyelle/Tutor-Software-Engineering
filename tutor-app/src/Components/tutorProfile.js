

//get data from database or create from application 

import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

class tutorProfile extends React.Component{
    name = "";
    lname = "";
    email = "";
    sub1 = "";
    sub2 = "";
    employment = "";
    gpa = "";
    //get data from database or create from application 
    constructor(name, lname, email, sub1, sub2, employ, gpa){
        name = this.name;
        lname = this.lname;
        email = this.email;
        sub1 = this.sub1;
        sub2 = this.sub2;
        employment = employ;
        gpa = this.gpa;
    }

    render(){
        //https://react-bootstrap.github.io/components/cards/
        //get it to access class variables
        <div>
            <Card > 
                <Card.Img variant = "top" src = "Tutoring-01.gif">
                <Card.Title>name</Card.Title>
                <Card.text> employment , gpa: gpa</Card.text>
                <ListGroup variant="indent">
                    <ListGroupItem.Item> sub1 </ListGroupItem.Item>
                    <ListGroupItem.Item> sub2</ListGroupItem.Item>
                </ListGroup>
                </Card.Img>
            </Card>
        </div>
    }
}