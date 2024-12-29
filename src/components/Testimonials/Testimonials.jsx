import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Testimonials.css';
import TestiImage from '../../assets/Testimonials/TestimonialImage.png';
import TestGraph from '../../assets/TestMonialGraph.png';
import FullStar from '../../assets/Testimonials/FullStar.svg';
import NotFullStar from '../../assets/Testimonials/EmptyStar.svg'
import ClonIcon from '../../assets/Testimonials/Clonicon.svg'
export function Testimonials() {
    return (
        <Container fluid className="testimonial-container py-5 px-5 testcon mt-5">
            <Row className="align-items-center">
                <Col md={5} className="text-start text-md-left testcon">
                    <h5 className="mb-3 testhead">TESTIMONIAL</h5>
                    <Carousel indicators={true} interval={1000} style={{ height: '300px' }}>
                        <Carousel.Item className='bg-red' style={{ height: '300px' }}>
                            <Card className="shadow border-0 p-4"   >
                                <Card.Body style={{ height: '300px !important' }}>
                                    <blockquote className="blockquote">
                                        <p>
                                            "Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua."
                                        </p>
                                    </blockquote>
                                    <div className="d-flex align-items-center mt-4 testimageon">
                                        <img
                                            src={TestiImage}
                                            alt="User"
                                            className="rounded-circle mr-3"
                                            style={{ width: '60px', height: '60px' }}
                                        />
                                        <img src={ClonIcon} alt="" className='colanimage' />
                                        <div className='mx-2'>
                                            <div className="text-warning">
                                                <div className="ratingstar">
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={NotFullStar} alt="" />
                                                </div>
                                                <h6 className="mb-0 text-dark">Sakshi Rawat</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="shadow border-0 p-4">
                                <Card.Body>
                                    <blockquote className="blockquote">
                                        <p>
                                            "Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur."
                                        </p>
                                    </blockquote>
                                    <div className="d-flex align-items-center mt-4 testimageon">
                                        <img
                                            src={TestiImage}
                                            alt="User"
                                            className="rounded-circle mr-3"
                                            style={{ width: '60px', height: '60px' }}
                                        />
                                        <img src={ClonIcon} alt="" className='colanimage' />

                                        <div className='mx-2'>
                                            <div className="text-warning">
                                                <div className="ratingstar">
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={NotFullStar} alt="" />
                                                </div>
                                                <h6 className="mb-0 text-dark">Sakshi Rawat</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="shadow border-0 p-4">
                                <Card.Body>
                                    <blockquote className="blockquote">
                                        <p>
                                            "Integer posuere erat a ante
                                            venenatis dapibus posuere velit
                                            aliquet."
                                        </p>
                                    </blockquote>
                                    <div className="d-flex align-items-center mt-4 testimageon">
                                        <img
                                            src={TestiImage}
                                            alt="User"
                                            className="rounded-circle mr-3"
                                            style={{ width: '60px', height: '60px' }}
                                        />
                                        <img src={ClonIcon} alt="" className='colanimage' />

                                        <div className='mx-2'>
                                            <div className="text-warning">
                                                <div className="ratingstar">
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={FullStar} alt="" />
                                                    <img src={NotFullStar} alt="" />
                                                </div>
                                                <h6 className="mb-0 text-dark">Sakshi Rawat</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6}>
                    {/* Other Content */}
                    <div className='graphcontainer'>
                        <img src={TestGraph} alt="" style={{ width: '100%' }} />
                        <div className="testdetailcontainer1 testdetailcontainer p-3 d-flex flex-column align-items-end">
                            <div className='mb-1'>
                                <span className='fr4t6y7u'>Ruchika Rawat</span>
                            </div>
                            <div>
                                <span>Best in Analysis data</span>
                            </div>
                        </div>
                        <div className="testdetailcontainer2 testdetailcontainer p-3 d-flex flex-column align-items-end">
                            <div className='mb-1'>
                                <span className='fr4t6y7u'>Ruchika Rawat</span>
                            </div>
                            <div>
                                <span>Best in Analysis data</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
