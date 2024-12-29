import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Bull from "../../assets/bull.mp4";
import Secure from "../../assets/SecureAbout.svg";
import Global from "../../assets/Global.svg";
import './About.css'
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
                            className="position-absolute w-100 h-100 aboutvideo"
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
                            Maximum Profit &amp; Expert Trading Guidance
                        </h2>
                        <p className="text-muted mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>

                    {/* Features Section */}
                    <Row className="g-4">
                        {[
                            {
                                img: Secure,
                                title: "Secure Transaction",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            },
                            {
                                img: Global,
                                title: "Global Services",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            },
                        ].map((feature, index) => (
                            <Col md={6} key={index}>
                                <Card className="h-100 shadow-sm border-0">
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
                            More About Us
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}
