import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class About extends Component {
    render() {
        return (
            <div>
                <Container className = "card-banner-start">
        <Row className = "text-center">
          <Col lg={8} className = "m-auto pb-3">
              <h1 className="card-banner-title" id="about">About Us</h1>
              <FontAwesomeIcon icon="cookie-bite" size="3x" className = "mb-2"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique eros eu dolor finibus mattis. Fusce eleifend tristique eleifend. Morbi scelerisque ullamcorper ante, non semper ante venenatis ac. Nunc gravida viverra ipsum, maximus vestibulum magna porttitor sit amet. Proin at hendrerit libero.</p>
              <p>Donec in ullamcorper quam. Integer euismod blandit metus, ut mollis massa tempor sed. Vestibulum accumsan massa non gravida sollicitudin. Praesent faucibus nibh ante, vitae fermentum elit pulvinar et. Curabitur faucibus velit sit amet arcu dapibus auctor. In nisi nunc, semper sit amet nulla nec, rhoncus scelerisque tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum porta sodales maximus. Proin sollicitudin at eros in tincidunt. Morbi lacus erat, lobortis nec diam ut, aliquet viverra justo.</p>
          </Col>
        </Row>
      </Container>
            </div>
        )
    }
}

export default About;