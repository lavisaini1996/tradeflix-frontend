import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureVideo from "../../assets/FeatureVideo.mp4";
import './Feature.css'
export function Features() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
                .play()
                .catch((error) => console.error("Video autoplay failed:", error));
        }
    }, []);

    return (
        <div className="featuresection py-5">
            <Container>
                {/* Features Heading */}
                <Row className="text-start mb-4">
                    <Col md={6}>
                        <div
                            className="d-inline-block py-2 px-3 rounded-pill bg-light border border-secondary"
                            style={{ width: "110px" }}
                        >
                            <span className="fw-semibold text-dark" style={{ fontSize: "13px" }}>
                                FEATURES
                            </span>
                        </div>
                        <h2 className="mt-3 fw-bold featurehead"  >
                            Our Platform Feature
                        </h2>
                    </Col>
                    <Col md={6} className="d-flex align-items-end text-start">
                        <p className="text-muted" style={{ fontSize: "16px", lineHeight: "24px" }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </Col>
                </Row>

                {/* Video and Feature Description */}
                <Row className="">
                    <Col md={6}>
                        <div
                            className="rounded overflow-hidden featurevideocont"
                        >
                            <video
                                className="w-100 h-100 featurevideo"
                                ref={videoRef}
                                autoPlay
                                loop
                                playsInline
                            >
                                <source src={FeatureVideo} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col md={6}>


                        {/* Feature Blocks */}
                        {Array(3)
                            .fill(null)
                            .map((_, index) => (
                                <Card
                                    key={index}
                                    className="mb-3 p-3 border-light shadow-sm featurecardcon"
                                    style={{ borderRadius: "10px", background: '#F5F7FA' }}
                                >
                                    <Card.Body>
                                        <Card.Title
                                            className="fw-bold text-dark"
                                            style={{ fontSize: "28px" }}
                                        >
                                            Full Management Features
                                        </Card.Title>
                                        <Card.Text
                                            className="text-muted"
                                            style={{ fontSize: "16px", lineHeight: "24px" }}
                                        >
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Aenean commodo ligula eget dolor.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
