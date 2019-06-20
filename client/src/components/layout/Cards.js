import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

class Cards extends Component {
    render() {
        return (
            <div>
                <Container className="content-style">
        <Row className="height-content mt-2">
          <Col sm="12" lg="6" className="image-main-1"/>
          <Col sm="12" lg="6" className="text-center align-self-center">
             <h2> Curabitur non justo ac arcu pharetra consequat vitae ac eros</h2> 
             <p>Curabitur gravida, felis vel pharetra posuere, metus ante dictum lectus, eget euismod ipsum dolor auctor nunc. Maecenas pretium sem vel metus iaculis, a viverra ante rutrum. Quisque lacus lacus, volutpat a vestibulum ac, dignissim nec magna.</p>
             <button type="button" className="btn btn-outline-info mb-3">Read More</button>
            </Col>
        </Row>
      </Container>

      <Container className="content-style">
          <Row className="height-content">
            <Col sm="12" lg="6" className="text-center align-self-center">
               <h2>Donec imperdiet risus eget risus bibendum posuere</h2> 
               <p>Suspendisse condimentum risus eu tortor lacinia, eu convallis tellus interdum. Quisque quam sapien, accumsan a vulputate ac, dapibus nec sapien. Nulla commodo metus nec massa tincidunt, vel hendrerit ex pulvinar.</p> 
               <button type="button" className="btn btn-outline-info mb-3">Read More</button>
            </Col>
            <Col sm="12" lg="6" className="image-main-2"/>
          </Row>
        </Container>
            </div>
        )
    }
}

export default Cards;