import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card1 from '../props/Card1';
import Card2 from '../props/Card2';

class Cards extends React.Component {
  render() {
    return (
      <Container fluid={true} className="mt-2 fadeIn-cards">
        <Row>
          <Col sm="12" lg="6"><Card1/></Col>
          <Col sm="12" lg="6"><Card2/></Col>
        </Row>
      </Container>
    );
  }
}

export default Cards