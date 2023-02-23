// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginIcon from '@mui/icons-material/Login';
// import "../navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
// import { Login } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../redux/Action/Authaction';
import { useDispatch } from 'react-redux';
// import { Signup } from './Signup';

function NavBar() {
  const token=localStorage.getItem("token")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <Navbar style={{zIndex:"1"}} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">José Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
            <Nav.Link href="Products">Products</Nav.Link>
            
              <Nav.Link href="/contact">Contact</Nav.Link>
             
              <Nav.Link href="/Addproduct">Add</Nav.Link>
             
          
         
          </Nav>
          {token ?  <button onClick={() => dispatch(logout(),navigate("/"))}>LogOUT</button>
          : 
          <div>
          <a href="" style={{size:'120px'}}>
            <ShoppingCartIcon />Shopping</a>
           
           <Link to="/Login" className="btn btn-online-dark">
            <LoginIcon />Login </Link>
            </div> }
         
            
          
            
            
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;