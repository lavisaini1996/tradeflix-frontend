import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Testimonials.css';
import TestiImage from '../../assets/Testimonials/TestimonialImage.png';
import TestGraph from '../../assets/TestMonialGraph.png';
import FullStar from '../../assets/Testimonials/FullStar.svg';
import NotFullStar from '../../assets/Testimonials/EmptyStar.svg';
import ClonIcon from '../../assets/Testimonials/Clonicon.svg';

export function Testimonials() {
    const [dataArray, setDataArray] = useState([
        {
            desc: 'Tradeflix has changed the way I deal with trading. It is their uncomplicated and easy to read articles which made me gain the confidence to tackle different markets.',
            name: 'Shivani M.',
            star: 4,
            slogan: 'Beginner Trader'
        },
        {
            desc: 'I have been trading for many years, but there are several aspects that Tradeflix’s experts have highlighted that I had not thought of before.”',
            name: 'Devansh L.',
            star: 4,
            slogan: 'Experienced Investor'

        },
        {
            desc: 'Since I am a novice when it comes to putting my money into various assets, Tradeflix has completely changed the game for me. All the materials that they provide are very clear cut and would assist hugely.',
            name: 'Ankita R.',
            star: 4,
            slogan: 'New Investor'

        },
        {
            desc: 'The analysis of the stock market and the news updates provided on Tradeflix are very useful to me. It has been my best platform for observing all the activities in the stock market.',
            name: 'Rohit S.',
            star: 4,
            slogan: 'Active Trader'

        },
        {
            desc: 'Thanks to the stock market tips sourced from Tradeflix including SEBI registered advisors, I have managed to make better relevant stock market investments. Their guidance is truly valuable.',
            name: 'Nikhil P.',
            star: 4,
            slogan: 'Stock Market Enthusiast'

        },
    ]);

    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={i < count ? FullStar : NotFullStar}
                    alt={i < count ? 'Full Star' : 'Empty Star'}
                />
            );
        }
        return stars;
    };

    return (
        <Container fluid className="testimonial-container testcon mt-5">
            <Row className="align-items-center">
                <Col md={12} className="text-start text-md-left testcon">
                    <Carousel indicators={true} interval={1000} >
                        {dataArray.map((item, index) => (
                            <Carousel.Item key={index} >

                                <Row className='align-items-center justify-content-around'>
                                    <Col md={4}>
                                        <h5 className="mb-3 testhead">TESTIMONIAL</h5>

                                        <Card className="shadow border-0 p-4">
                                            <Card.Body>
                                                <blockquote className="blockquote">
                                                    <p>{item.desc}</p>
                                                </blockquote>
                                                <div className="d-flex align-items-center mt-4 testimageon">
                                                    <img
                                                        src={TestiImage}
                                                        alt="User"
                                                        className="rounded-circle mr-3"
                                                        style={{ width: '60px', height: '60px' }}
                                                    />
                                                    <img src={ClonIcon} alt="Quote Icon" className="colanimage" />
                                                    <div className="mx-2">
                                                        <div className="text-warning">
                                                            <div className="ratingstar">{renderStars(item.star)}</div>
                                                            <h6 className="mb-0 text-dark">{item.name}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        {/* Graph Section */}
                                        <div className="graphcontainer">
                                            <img src={TestGraph} alt="Graph" />
                                            <div className="testdetailcontainer1 testdetailcontainer p-3 d-flex flex-column align-items-end">
                                                <div className="mb-1">
                                                    <span className="fr4t6y7u">{item?.name}</span>
                                                </div>
                                                <div>
                                                    <span>{item?.slogan}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>

            </Row>
        </Container>
    );
}
