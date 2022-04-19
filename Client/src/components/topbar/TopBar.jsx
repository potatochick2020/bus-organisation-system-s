import "./topbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function TopBar(){
    return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Bus system</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#features">Member</Nav.Link>
        <Nav.Link href="#pricing">Bus Route</Nav.Link>
        <Nav.Link href="#pricing">Driver</Nav.Link>
        <Nav.Link href="#pricing"><Link className="link" to="/Email">Email</Link></Nav.Link>
        <NavDropdown title="Send Email" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">secrets</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">send email</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Keep it for reference</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
            Dank memes
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default TopBar;
