import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    
    return (
        <>
            <h1 className="webName">CameraShop</h1>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">CameraShop</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>
                         {/* <Nav.Link as={HashLink} to="/PlaceOrder">Place Order</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/allorders">Manage All Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageServices">Manage Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/addservice">Add A New Service</Nav.Link>
                        {
                        user?.email ?
                        <Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Button onClick={logout} color="inherit">Logout</Button>
                        </Box>
                            
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        } */}
                        <Navbar.Text>
                            <a className="ms-2" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;