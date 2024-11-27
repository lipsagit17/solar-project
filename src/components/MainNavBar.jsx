import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src="/img/logo.png" alt="" width="150px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Product 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Product 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> Download Catalogue</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;