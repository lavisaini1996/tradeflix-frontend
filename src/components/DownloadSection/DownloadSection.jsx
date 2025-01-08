import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileImage from "../../assets/MobileImage.svg";
import GoogleStore from "../../assets/GoogleStore.svg";
import AppStore from "../../assets/AppStore.svg";
import './DownloadSection.css'

export function DownloadSection() {
    return (
        <div
            className="downloadsection d-flex align-items-center justify-content-center text-center downloadbgimage overflow-hidden position-relative mt-5"
        >
            <Container>
                <Row className="align-items-center">
                    {/* Text and Call-to-Actions */}
                    <Col md={7} className="text-white text-start">
                        <div
                            className="overlay-border p-2 d-inline-block ffr5tyhy"

                        >
                            <span className="fw-bold" style={{ fontSize: "13px", }}>
                                DOWNLOAD OUR APP
                            </span>
                        </div>

                        <h2 className="fw-bold mb-3 dwnldsection" >
                            Download Our App &amp;
                            <br />
                            Upgrade your Trading Journey
                        </h2>

                        <p className="text-light mb-4" style={{ opacity: 0.8 }}>
                        Press the button below to install app.
                        </p>

                        <div className="d-flex gap-3">
                            <Button
                                variant="dark"
                                className="d-flex align-items-center justify-content-center googleImage"
                            ></Button>

                            <Button
                                variant="dark "
                                className="d-flex align-items-center justify-content-center appstoreImage"
                            ></Button>
                        </div>
                    </Col>

                    {/* Mobile Image */}
                    <Col md={5} className="position-absolute mobileimage">
                        <img
                            src={MobileImage}
                            alt="Mobile App"
                            className="img-fluid mobileimage"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
