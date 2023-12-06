import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Form from 'react-bootstrap/Form';
import {FaBell,FaComment,FaBars,FaSistrix} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './logo/navbar.png';

import './header.css';
import person1 from './images/person1.jpg';
import logo from './images/logo.jpg';

function Header() {
  const notificationCount = 3;
  const commentCount = 8;
   
  return (
   
    <Navbar className='custom-navbar' expand="lg">


      <Container>
       
      <img src={navbar} 
                     alt="Logo" 
                     className='navlogo'/> 
      <a href='#icon' className='menu-icon'><FaBars/></a>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='features' href="#features">Dreams Technologies</Nav.Link>
            </Nav>
             
             <Nav>
              <div>
             <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search here"
                    className="mr-sm-2"
                    aria-label="Search"
                    style={{background:'#ffcccc',borderRadius:'18px',margin:'5px 0px',position:'relative',}}
           />
           <span className='icon'><FaSistrix/></span>
                
                </Form>
                </div>
                <div>
                <img src={logo} alt='flag' className='flagpic' /></div>
          <NavDropdown title="English" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="French">French</NavDropdown.Item>
              <NavDropdown.Item href="Spanish">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="Arabic">Arabic</NavDropdown.Item>
              <NavDropdown.Item href="japanese">japanese</NavDropdown.Item>
            </NavDropdown>
            <Nav className='ml-auto'>
                <Nav.Link href="#notifications" className="text-white">
                    <FaBell />
                    <span className="notification-badge">{notificationCount}</span>

                </Nav.Link>
                <Nav.Link href="#comments" className="text-white">
                    <FaComment />
                    <span className="comment-badge">{commentCount}</span>



                </Nav.Link>

            </Nav>
            <div className='person'>
            <img src={person1} 
                     alt="person" 
                     className='person1'/> 
            </div>
            <NavDropdown title="Admin" id="collapsible-nav-dropdown" className='text-white'>
          <NavDropdown.Item href="logout">logout</NavDropdown.Item>
             
            </NavDropdown>
            
          </Nav>



        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;




































































