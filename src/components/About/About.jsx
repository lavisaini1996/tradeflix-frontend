import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Bull from "../../assets/bull.mp4";
import Secure from "../../assets/SecureAbout.svg";
import Global from "../../assets/Global.svg";
import './About.css'
import { Link } from "react-router";
export function About() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((error) => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Row className="w-100 align-items-start justify-content-evenly">
                {/* Video Section */}
                <Col sm={12} lg={5} className="mb-4">
                    <div
                        className="border rounded-3 overflow-hidden position-relative aboutvideocon"
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            playsInline
                            className="position-absolute h-100 aboutvideo"
                            style={{ left: '-36%' }}
                        >
                            <source src={Bull} type="video/mp4" />
                        </video>
                    </div>
                </Col>

                {/* About Section */}
                <Col sm={12} lg={6} className="d-flex flex-column justify-content-between align-items-start">
                    <div>
                        <div className="d-inline-block bg-light border rounded-pill text-center py-2 px-4 mb-3">
                            <strong>ABOUT US</strong>
                        </div>
                        <h2 className="fw-bold mb-3 maxheading" >
                            Your Trusted Source for Financial Market Education
                        </h2>
                        <p className="text-muted mb-4">Tradeflix gives stock market tips and allows you to interact with SEBI-registered analysts and advisors who give you relevant advice.</p>
                    </div>

                    {/* Features Section */}
                    <Row className="g-4">
                        {[
                            {
                                img: Secure,
                                title: "Expert Insights",
                                description: "Expert insights that you need to become an expert trader.",
                            },
                            {
                                img: Global,
                                title: "User Friendly Platform",
                                description: "Easy-to-use application available on PlayStore & AppStore.",
                            },
                        ].map((feature, index) => (
                            <Col md={6} key={index}>
                                <Card className="h-100 shadow-sm border-0 hovercon">
                                    <Card.Body className="d-flex flex-column align-items-start text-center">
                                        <div
                                            className="d-flex justify-content-center align-items-center  mb-3 aboutcard aboutimageborder"

                                        >
                                            <img
                                                src={feature.img}
                                                alt={feature.title}
                                                className="img-fluid aboutcardimage"
                                            />
                                        </div>
                                        <Card.Title className="fw-bold mb-2">
                                            {feature.title}
                                        </Card.Title>
                                        <Card.Text className="text-muted text-start">
                                            {feature.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Call-to-Action Button */}
                    <div className="mt-4 text-center">
                        <Button
                            variant="primary"
                            className="rounded-pill px-4 py-3 aboutbutton"
                        >
                            <Link className="nav-link" to='/about'>
                                More About Us

                            </Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}
