import './Header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

export function Header() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            className="layer-x brand-logo"
                            alt="Layer"
                            src="https://c.animaapp.com/LJb56hOf/img/layer-x0020-1@2x.png"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#services">Subscription Plans</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Features</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="frame-6">
                <div className="navigation">
                    <div className="link">
                        <div className="text-wrapper-8">About</div>
                    </div>

                    <div className="link">
                        <div className="text-wrapper-9">Subscription Plans</div>
                    </div>

                    <div className="link">
                        <div className="text-wrapper-9">Features</div>
                    </div>

                    <div className="link">
                        <div className="text-wrapper-8">Contact</div>
                    </div>
                </div>

                <img
                    className="layer-x"
                    alt="Layer"
                    src="https://c.animaapp.com/LJb56hOf/img/layer-x0020-1@2x.png"
                />
            </div> */}
        </>
    )
}