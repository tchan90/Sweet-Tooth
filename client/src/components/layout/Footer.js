import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';


 class Footer extends Component {
    render() {
        return (
                <footer className="footer">
            <Container className="footer-table footer-style">
              <Row>
                <Col sm="12" lg="3" className="m-auto">
                <Link to="/Jobs" className="footer-links">Jobs</Link>
                </Col>
                <Col sm="12" lg="3" className="m-auto">
                <Link to="/Privacy" className="footer-links">Privacy</Link>
                </Col>
                <Col sm="12" lg="3" className="m-auto">
                <Link to="/TermsAndCond" className="footer-links">Terms and Conditions</Link>
                </Col>
                <Col sm="12" lg="3" className="m-auto">
                <Link to="/Contact" className="footer-links">Contact</Link>
                </Col>
            </Row></Container>
          

          <div className="container-fluid footer-smalltxt">
              <p className="footer-smalltxt"><strong>Sweet Tooth</strong> Copyright 2019</p>
          </div>
           
          </footer>
        )
    }
}

export default Footer;