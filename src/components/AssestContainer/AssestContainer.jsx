import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Crypto from "../../assets/crypto.png";
import Forex from "../../assets/forex.png";
import Gold from "../../assets/gold.png";
import Group from "../../assets/group.png";
import Indices from "../../assets/indices.png";
import Stock from "../../assets/stocks.png";
import './AssestContainer.css'
export function AssestContainer() {
    return (
        <Container className="mt-5">
            <Row className="text-center">
                <Col>
                    <div
                        className="py-2 px-4 border rounded-pill mx-auto mb-3"
                        style={{
                            backgroundColor: "#f5f7fa",
                            borderColor: "#e2e8f1",
                            width: "155px",
                        }}
                    >
                        <span className="fw-bold">TRADING OPTION</span>
                    </div>
                    <h2 className="fw-bold mb-3" style={{ fontSize: "47.8px" }}>
                        Trading Assets
                    </h2>
                    <p className="text-muted mb-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        <br />
                        commodo ligula eget dolor. Aenean massa.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center g-4">
                {[
                    { img: Stock, title: "Stocks Trading Analysis" },
                    { img: Forex, title: "Forex Trading Analysis" },
                    { img: Gold, title: "Commodities Trading" },
                    { img: Indices, title: "Stocks Indices" },
                    { img: Crypto, title: "Cryptos Trading Analysis" },
                    { img: Group, title: "Bonds Trading" },
                ].map((asset, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card
                            className="text-white text-center d-flex flex-row assestcardcontainer"

                        >
                            <Card.Img
                                variant="top"
                                src={asset.img}
                                alt={asset.title}
                                className="assestcardimage"
                            />
                            <Card.Body className=" text-start d-flex justify-content-center flex-column px-3 py-0" >
                                <Card.Title className="fw-bold">{asset.title}</Card.Title>
                                <Card.Text className="text-muted">
                                    Lorem ipsum dolor sit
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
