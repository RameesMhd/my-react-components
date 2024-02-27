import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MyNavbar = () => {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary sticky-top">
                    <Container className='navbar-container'>
                        <Navbar.Brand href="#">
                            <img src='' />
                            Brand Logo
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about">About Us</Nav.Link>
                                    <NavDropdown
                                        title="Programs"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#program1">
                                            Program 1
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#program2">
                                            Program 2
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#program3">
                                            Program 3
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#about">Contact Us</Nav.Link>
                                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default MyNavbar;