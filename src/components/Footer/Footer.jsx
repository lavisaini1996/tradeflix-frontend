import { Link } from 'react-router';
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <div className="footer-main">
                        <Row>
                            <Col lg={3}>
                                <img
                                    className="brand-logo"
                                    alt="Layer"
                                    src="https://c.animaapp.com/LJb56hOf/img/layer-x0020-1-1@2x.png"
                                />
                                <p>Tradeflix is an educational platform that simplifies trading with expert insights, stock tips, and SEBI-registered advisor support for all levels.</p></Col>
                            <Col lg={3}></Col>
                            <Col lg={2}>
                                <h5>Pages Link</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/features'>Feature</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='/term-and-conditions'>Terms and Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                </ul></Col>
                            <Col lg={2}>
                                <h5>Contact us</h5>
                                <ul className="list-unstyled">
                                    <li><a href="mailto:hello@gmail.com"><img
                                        className="img-2"
                                        alt="Img"
                                        src="https://c.animaapp.com/LJb56hOf/img/65f3ed594c8df21d9574790e-email-svg.svg"
                                    /> hello@gmail.com</a></li>
                                    <li><a href="tel:+91-123456789">
                                        <img
                                            className="img-3"
                                            alt="Img"
                                            src="https://c.animaapp.com/LJb56hOf/img/66068644b34ea0fbb0b1f880-phone-svg.svg"
                                        /> +91-123456789</a></li>
                                </ul></Col>
                            <Col lg={2}>
                                <h5>Follow us on</h5>
                                <div className="social-icon">
                                    <img
                                        className="link-11"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link.svg"
                                    />

                                    <img
                                        className="link-12"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link-1.svg"
                                    />

                                    <img
                                        className="link-13"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link-2.svg"
                                    />

                                    <img
                                        className="link-14"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link-3.svg"
                                    />

                                    <img
                                        className="link-15"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link-4.svg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-bottom">
                        <p>Designed by <a>StarNext</a></p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;