import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Row, Col} from 'reactstrap';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import axios from 'axios';


class Contact extends Component {
  constructor(){
    super();
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      message:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  } 
  async handleSubmit(e){
    e.preventDefault();
    const {firstName,lastName,email,message} = this.state;
    const form = await axios.post('api/form',{
      firstName,
      lastName,
      email,
      message
    })
  }

    render() {
        return (
                 <Container className = "card-banner-contact">
                <Row className = "mt-2 text-center ">
                  <Col lg="6" className = "m-auto pb-3 feedback-bg">
                      <h1 className="card-banner-title m-auto" id="contact">Contact Us</h1>
                      <FontAwesomeIcon icon="comments" size="3x" className="mb-2"/>
                      <h3>Fill the form below</h3>
                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                        <Input type="text" name="firstName"  className="form-control" placeholder="First Name" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup> 
                        <Input type="text" name="lastName"  className="form-control mt-2" placeholder="Last Name" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup> 
                        <Input type="text" name="email" className="form-control mt-2" placeholder="Email" onChange={this.handleChange}/>
                        </FormGroup> 
                         <FormGroup>
                         <Input type="textarea" name="message" onChange={this.handleChange} placeholder="Message" />
                      </FormGroup>
                        <Button type="submit" className="btn btn-primary btn-black btn-lg btn-block mt-3">Send</Button>
                    </Form>
                  </Col>
                </Row>
              </Container> 
        )
    }
}

export default Contact;