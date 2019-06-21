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
                  <Col lg="8" className = "m-auto feedback-bg">
                      <Form onSubmit={this.handleSubmit} className="mb-4 footer-margin">
                       <Row form>
                         <Col md={6}>
                         <FormGroup>
                        <Input type="text" name="firstName"  className="form-control" size="md" placeholder="First Name" onChange={this.handleChange}/>
                        </FormGroup>
                           </Col>
                           <Col md={6}>
                         <FormGroup>
                        <Input type="text" name="lastName"  className="form-control" size="md" placeholder="Last Name" onChange={this.handleChange}/>
                        </FormGroup>
                           </Col>
                       </Row>
                        <FormGroup> 
                        <Input type="text" name="email" className="form-control mt-2" size="md" placeholder="Email" onChange={this.handleChange}/>
                        </FormGroup> 
                         <FormGroup>
                         <Input type="textarea" name="message" onChange={this.handleChange} placeholder="Message" />
                      </FormGroup>
                        <Button outline size="sm" block type="submit" className="mt-3">Send</Button>
                    </Form>
                  </Col>
                </Row>
              </Container> 
        )
    }
}

export default Contact;