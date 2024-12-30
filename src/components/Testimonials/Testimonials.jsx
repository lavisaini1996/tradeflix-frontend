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
            desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
            name: 'Praful Kumar',
            star: 4,
            slogan: 'test'
        },
        {
            desc: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            name: 'Sakshi Rawat',
            star: 4,
            slogan: 'test1'

        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            name: 'Ruchika Rawat',
            star: 4,
            slogan: 'test2'

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
