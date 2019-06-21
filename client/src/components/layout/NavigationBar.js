import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavHashLink as NavLink} from 'react-router-hash-link'

class NavigationBar extends Component {
    constructor(props) {
      super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    render() {
        return (
            <div>
            <Navbar dark className = "navbar-color">
          <NavbarBrand to="/" className="mr-auto"><FontAwesomeIcon icon="ice-cream" color="#E6D896"/></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="#about" className="navlink-style">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#gallery" className="navlink-style">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" className="navlink-style">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#contact" className="navlink-style">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/newsletter" className="navlink-style">Newsletter</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
        )
    }
}

export default NavigationBar;