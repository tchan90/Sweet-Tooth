import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import storefront from '../../img/store-front.jpg';


 class Footer extends Component {
    render() {
        return (
                <footer className="footer">
            <Container fluid={true} className="footer-style">
              <Row>
                <Col sm="12" lg="5" className="footer-margin">
                <p className="footer-text-head">Feedback</p>
                <Contact/>
                </Col>
                <Col sm="12" lg="3" className="footer-margin">
                <p className="footer-text-head">Customer Service</p>
                <ul className="cs-style">
                  <li className="li-footer-style"><Link className="footer-text">FAQ</Link></li>
                  <li className="li-footer-style"><Link className="footer-text">Jobs</Link></li>
                  <li className="li-footer-style"><Link className="footer-text">Privacy Policy</Link></li>
                  <li className="li-footer-style"><Link className="footer-text">Terms and Conditions</Link></li>
                </ul>
                </Col>
                <Col sm="12" lg="4" className="footer-margin">
                <p className="footer-text-head">Contact Us</p>
                <div className="text-center">
                  <img alt="store-front" src={storefront} className="w-50"/>
                </div>
                <p className="footer-text text-center mt-3">45 Gumdrops Lane, CandyCorn SA</p>
                </Col>
            </Row></Container>
          
          </footer>
        )
    }
}

export default Footer;