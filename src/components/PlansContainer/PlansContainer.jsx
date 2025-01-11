import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, ListGroup, Dropdown } from 'react-bootstrap';
import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import './PlansContainer.css';
import DiamongImage from '../../assets/Diamong.svg'
export function PlansContainer({ isYearly }) {
    const [selectedValue, setSelectedValue] = useState({
        key: '1 Month',
        value: 1,
        price: 499
    });
    const [proValue, setProValue] = useState({
        key: '15 Days',
        value: 0.5,
        price: 600
    })
    // Handle selection
    const handleSelect = (eventKey) => {
        console.log(eventKey)
        const data = basicPlan.filter(data => data.key === eventKey);
        setSelectedValue(data[0]);
    };
    const handleProSelect = (eventKey) => {
        const data = proPlan.filter(data => data.key === eventKey);

        setProValue(data[0])
    }
    const [basicPlan, setBasicPlan] = useState([
        {
            key: '1 Month',
            value: 1,
            price: 499
        },
        {
            key: '3 Months',
            value: 3,
            price: 1199
        },
        {
            key: '6 Months',
            value: 6,
            price: 1799
        },
        {
            key: '1 Year',
            value: 12,
            price: 2499
        }
    ])
    const [proPlan, setProPlan] = useState([
        {
            key: '15 Days',
            value: 0.5,
            price: 600
        },
        {
            key: '1 Month',
            value: 1,
            price: 899
        },
        {
            key: '3 Months',
            value: 3,
            price: 2099
        },
        {
            key: '6 Months',
            value: 6,
            price: 3299
        },
        {
            key: '1 Year',
            value: 12,

            price: 5499
        }
    ])
    return (
        <Container className="mt-4 d-flex justify-content-center mt-5 p-0">
            <Row className="justify-content-center g-4 plancon">
                {/* Basic Plan */}
                <Col xs={12} md={6} lg={4}>
                    <div className="container p-0 w-100">
                        <Dropdown onSelect={handleSelect} className='dropdowncon'>
                            <Dropdown.Toggle id="dropdown-basic" className='dropbutton'>
                                {selectedValue?.key}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: '35%' }}>
                                {
                                    basicPlan?.map((element, index) => {
                                        return (
                                            <>
                                                <Dropdown.Item eventKey={element?.key}>{element?.key}</Dropdown.Item>
                                            </>
                                        )
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Card className="shadow border-0 bg-light border4166AE cardcon">
                        <Card.Body className='plancardbody bg3A6A970D d-flex flex-column justify-content-between'>
                            <div>
                                <Card.Title className="text-start planheading px-3 plancolor">Basic</Card.Title>
                                <Card.Text className="text-start display-4 plancolor px-3">
                                    <span className='plancount'>&#8377;{(selectedValue?.price)}</span>
                                </Card.Text>
                                <div className='px-3'>
                                    <img src={DiamongImage} alt="" />
                                </div>
                            </div>
                            <div>
                                <ListGroup variant="flush mt48">
                                    <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                        <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                        <div className="plancolor">
                                            Stock Only

                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                        <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                        <div className="plancolor">
                                            Expert Picks

                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                        <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                        <div className="plancolor">
                                            Basic Market News

                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center bg3A6A970D">
                                        <IconOutlineCheckCircle20 className="me-2 plancolor" />
                                        <div className="plancolor">
                                            Educational Content

                                        </div>
                                    </ListGroup.Item>

                                </ListGroup>
                                <div className="text-center mt-4">
                                    <Button variant=" w86 bg4166AE text-white">Choose Plan</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className="container p-0 w-100">
                        <Dropdown onSelect={handleProSelect} className='dropdowncon'>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className='dropbutton'>
                                {proValue?.key}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: '35%' }}>
                                {
                                    proPlan?.map((element, index) => {
                                        return (
                                            <>
                                                <Dropdown.Item eventKey={element?.key}>{element?.key}</Dropdown.Item>

                                            </>
                                        )
                                    })
                                }

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Card className="shadow border-0 text-white planmiddlecon border4166AE cardcon">
                        <Card.Body className='plancardbody d-flex flex-column justify-content-between'>
                            <div>
                                <Card.Title className="text-start px-3 planheading">Pro Investor</Card.Title>
                                <Card.Text className="text-start   px-3">
                                    <span className='plancount'>&#8377;{proValue?.price}</span>
                                </Card.Text>
                                <div className='px-3'>
                                    <img src={DiamongImage} alt="" />
                                </div></div>
                            <div>
                                <ListGroup variant="flush" className="planmiddlecon mt48">
                                    <ListGroup.Item className="d-flex align-items-center  planmiddlecon text-white">
                                        <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                        Stocks+Features+Options
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                        <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                        Advanced Stock Picks
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                        <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                        In-depth Analysis
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                        <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                        Webinars
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center  text-white planmiddlecon">
                                        <IconOutlineCheckCircle20 className="me-2" color="#ffffff" />
                                        Advanced Portfolio Tools
                                    </ListGroup.Item>
                                </ListGroup>
                                <div className="text-center mt-4">
                                    <Button variant="light w86 plancolor">Choose Plan</Button>
                                </div></div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Enterprise Plan
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
                </Col> */}
            </Row>
        </Container>
    );
}
