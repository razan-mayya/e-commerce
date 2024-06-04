import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../images/logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

export const NavLogin = () => {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bgColor ">
                    <Container fluid>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton className='bgColor bottomBorder'>
                                <Offcanvas.Title className='whiteColor' id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    التفاصيل
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='bgColor' >
                                <Nav className="justify-content-end flex-grow-1 pe-3"  >
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Nav.Link href="/login" className='whiteColor'>دخول</Nav.Link>
                                        <IoPersonCircleOutline color='white' size="1.5rem" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Nav.Link href="#action1" className='whiteColor'>العربة</Nav.Link>
                                        <AiOutlineShoppingCart color='white' size="1.5rem" />
                                    </div>
                                </Nav>
                                <Form className="d-flex" style={{ width: "80%" }}>
                                    <Form.Control
                                        type="search"
                                        placeholder="ابحث"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <a href='/'>
                            < Navbar.Brand >
                                < img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </a>
                    </Container >
                </Navbar >
            ))}
        </>
    )
}
