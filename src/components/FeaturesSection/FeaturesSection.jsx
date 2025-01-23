import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureVideo from "../../assets/FeatureVideo.mp4";
import './FeatureSection.css';

export function FeaturesSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
                .play()
                .catch((error) => console.error("Video autoplay failed:", error));
        }
    }, []);
    const [dataArray, setDataArray] = useState([
        {
            question: 'Is Tradeflix a trading platform?',
            answer: 'No, Tradeflix is an educational resource designed to provide knowledge and insights into trading and investing. We do not facilitate trading transactions.'
        },
        {
            question: 'How often is the market data updated?',
            answer: 'In order to provide you the most correct and current information, our market analysis and data are synchronized on a real time basis.'
        }, {
            question: 'Do you offer investment advice?',
            answer: "Tradeflix helps users obtain stock tips from SEBI registered research analysts and investment advisors. Tradeflix itself does not provide direct investment advice to their customers on a one-on-one basis. Obviously this is a platform aimed at providing information and general understanding of the market; the format is so that users can have enough information to make their own investment decisions."
        }, {
            question: " Can beginners benefit from Tradeflix?",
            answer: "Definitely! Our platform contains necessary resources not only for advanced traders but also for beginners, as well, including guides, tutorials, and analysis."
        }
    ])
    return (
        <div className="featuresection mt-5">
            <Container>
                {/* Features Heading */}
                <Row className="text-start mb-4">
                    <Col xs={12} md={6}>
                        <div
                            className="d-inline-block py-2 px-3 rounded-pill bg-light border border-secondary"
                            style={{ width: "110px" }}
                        >
                            <span className="fw-semibold text-dark" style={{ fontSize: "13px" }}>
                                FAQ
                            </span>
                        </div>
                        <h2 className="mt-3 fw-bold featurehead"  >
                            Frequently Asked Questions
                        </h2>
                    </Col>
                    <Col md={6} className="d-flex align-items-end text-start">
                        <p className="text-muted" style={{ fontSize: "16px", lineHeight: "24px" }}>
                            Hey there! Got questions? We've got answers. Check out our FAQ for all the deets. Still not satisfied? Contact us!
                        </p>
                    </Col>
                </Row>

                {/* Video and Feature Description */}
                <Row className="">
                    <Col xs={12} md={6}>
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
                    <Col md={6} className="faqsCon">


                        {/* Feature Blocks */}
                        {/* {Array(3)
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
                                             Is Tradeflix a trading platform?
                                        </Card.Title>
                                        <Card.Text
                                            className="text-muted"
                                            style={{ fontSize: "16px", lineHeight: "24px" }}
                                        >
                                            No, Tradeflix is an educational resource designed to provide knowledge and insights into trading and investing. We do not facilitate trading transactions.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))} */}
                        <Accordion defaultActiveKey="0">
                            {
                                dataArray?.map((element, index) => {
                                    return (
                                        <>
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>{element?.question}</Accordion.Header>
                                                <Accordion.Body>
                                                    {element?.answer}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </>
                                    )
                                })
                            }


                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
