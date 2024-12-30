import React from 'react';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import './PlansContainer.css';
import DiamongImage from '../../assets/Diamong.svg'
export function PlansContainer({ isYearly }) {
    return (
        <Container className="mt-4 d-flex justify-content-center mt-5 p-0">
            <Row className="justify-content-center g-4 plancon">
                {/* Basic Plan */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow border-0 bg-light border4166AE">
                        <Card.Body className='plancardbody bg3A6A970D'>
                            <Card.Title className="text-start planheading px-3 plancolor">Basic</Card.Title>
                            <Card.Text className="text-start display-4 plancolor px-3">
                                <span className='plancount'>Free</span>
                            </Card.Text>
                            <div className='px-3'>
                                <img src={DiamongImage} alt="" />
                            </div>
                            <ListGroup variant="flush mt48">
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">
                                        3 prototypes

                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        3 boards
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        Single user
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        Normal security
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        Permissions & workflows
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="text-center mt-4">
                                <Button variant=" w86 bg4166AE text-white">Choose Plan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow border-0 text-white planmiddlecon border4166AE">
                        <Card.Body className='plancardbody'>
                            <Card.Title className="text-start px-3 planheading">STANDARD</Card.Title>
                            <Card.Text className="text-start   px-3">
                                <span className='plancount'>$14</span>
                                {
                                    !isYearly ?
                                        <span className="fs-5">/month</span>
                                        :
                                        <span className="fs-5">/year</span>

                                }
                            </Card.Text>
                            <div className='px-3'>
                                <img src={DiamongImage} alt="" />
                            </div>
                            <ListGroup variant="flush" className="planmiddlecon mt48">
                                <ListGroup.Item className="d-flex align-items-center  planmiddlecon text-white">
                                    <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                    3 prototypes
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                    <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                    3 boards
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                    <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                    Single user
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                    <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                    Normal security
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                    <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                    Permissions & workflows
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="text-center mt-4">
                                <Button variant="light w86 plancolor">Choose Plan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Enterprise Plan */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow border-0 bg-light border4166AE">
                        <Card.Body className='plancardbody bg3A6A970D'>
                            <Card.Title className="text-start planheading px-3 plancolor">ENTERPRISE</Card.Title>
                            <Card.Text className="text-start display-4 plancolor px-3">
                                <span className='plancount'>$50</span>
                                {
                                    !isYearly ?
                                        <span className="fs-5">/month</span>
                                        :
                                        <span className="fs-5">/year</span>

                                }
                            </Card.Text>
                            <div className='px-3'>
                                <img src={DiamongImage} alt="" />
                            </div>
                            <ListGroup variant="flush mt48">
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">
                                        3 prototypes

                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        3 boards
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        Single user
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        Normal security
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                    <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                    <div className="plancolor">

                                        Permissions & workflows
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="text-center mt-4">
                                <Button variant=" w86 bg4166AE text-white">Choose Plan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
