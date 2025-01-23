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
                            width: 'fit-content'

                        }}
                    >
                        <span className="fw-bold">TRADING OPTION</span>
                    </div>
                    <h2 className="fw-bold mb-3 tradehead"  >
                        Trading Assets
                    </h2>
                    <p className="text-muted mb-4">
                        With Tradeflix, you have access to the best traders education in addition to the best traders strategies available.
                        <br />
                        Check the full range of services we provide.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center g-4">
                {[
                    { img: Stock, title: "Market Analysis", desc: 'Analysis of the market to inform future trading strategy.' },
                    { img: Forex, title: "Stocks Trading Analysis", desc: 'Determines stock trends to assist in buying/selling decisions.' },
                    { img: Gold, title: "Educational Guidance", desc: 'Resources for trading skills categorized by difficulty level.' },
                    { img: Indices, title: "Investment News", desc: 'Investment and the market news which are recent and relevant.' },
                    { img: Crypto, title: "SEBI-registered Advisors Support", desc: 'Professional advice from certified & trusted partners.' },
                    { img: Group, title: "Real-Time Market Updates", desc: 'Ability to view live updates on the various financial markets.' },
                ].map((asset, index) => (
                    <Col key={index} xs={12} sm={6} md={6} xxl={4}>
                        <Card
                            className="text-white text-center d-flex flex-row assestcardcontainer hovercon h-100"

                        >
                            <Card.Img
                                variant="top"
                                src={asset.img}
                                alt={asset.title}
                                className="assestcardimage"
                            />
                            <Card.Body className=" text-start d-flex flex-column px-3 py-0" >
                                <Card.Title className="fw-bold">{asset.title}</Card.Title>
                                <Card.Text className="text-muted text-start">
                                    {asset?.desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}
