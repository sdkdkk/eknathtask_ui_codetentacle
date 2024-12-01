import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import moonboxes from '../Images/moonboxes.png'

const NavbarComponent = () => {
  return (
    <Navbar  expand="lg" className='navbar '>
      <div className='mx-5'>
        <Navbar.Brand href="/" > <img
            src={moonboxes} 
            alt="Logo"
            className="navbar-logo m-0" 
            style={{ height: '50px' }} 
          /></Navbar.Brand>
        <Navbar />
       
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
