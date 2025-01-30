import React from 'react';
import './About.css';
import Image from '../../assets/about-main.png';
import WhoWeAre1 from '../../assets/who-we-are-1.png';
import WhoWeAre2 from '../../assets/who-we-are-2.png';
import Expert1 from '../../assets/expert1.png';
import Expert2 from '../../assets/expert2.png';
import Expert3 from '../../assets/expert3.png';
import Expert4 from '../../assets/expert4.png';
import { DownloadApp } from '../../Components/DownloadApp/DownloadApp';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import AnimatedCounter from '../../Components/AnimatedCounter/AnimatedCounter';
const About = () => {
    return (
        <>

            <div className="about-section">
                <Container className="custom-wrapper">
                    <div className="about-content">
                        <div className="about-left">
                            <h1 className="about-title">
                                Your Gateway to Confident Trading
                            </h1>
                        </div>
                        <div className="about-right">
                            <p className="about-description">
                                At Tradeflix, we aim to simplify your journey in finacial markets by providing you trusted tips and professional insights. Tradeflix allows you to follow the market and make wise decisions regarding your investments.
                            </p>
                            <button className="about-button">
                                <Link className='
                                nav-link' to={'/subcription'}>View Subscription Plans</Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="banner-section">
                <img src={Image} className="banner-image" />
            </div>
            <div className="who-we-are">
                <Container className="custom-wrapper">
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className="text-content">
                                <h2>Who We Are?</h2>
                                <p>With Tradeflix, you receive market analysis, stock recommendations, and SEBI-registered Research Analysts’ guidance that will enable you to always be one step ahead in the financial market.
                                </p>
                                <div className="progress-section">
                                    <div className="progress-bar">
                                        <div className="circle" data-percentage="70">
                                            <div className="text">
                                                {/* <span>70%</span> */}
                                                <span>

                                                    <AnimatedCounter maxValue={70} duration={3000} />
                                                </span>%
                                            </div>
                                        </div>
                                        <p>Expert Recommendations</p>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="circle" data-percentage="56">
                                            <div className="text">
                                                <span>

                                                    <AnimatedCounter maxValue={56} duration={3000} />
                                                </span>%
                                            </div>
                                        </div>
                                        <p>User-Friendly App</p>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="circle" data-percentage="30">
                                            <div className="text">
                                                <span>



                                                    <AnimatedCounter maxValue={30} duration={3000} />
                                                </span>%
                                            </div>
                                        </div>
                                        <p>Real-Time Updates</p>
                                    </div>
                                </div>
                                <button className="btn">
                                    <Link className='nav-link' to='/about'>
                                        More About Us
                                    </Link>
                                </button>
                            </div>
                        </Col>
                        <Col lg={7}>
                            {/* <div className="images">
                                <Row>
                                    <Col md={6}>
                                        <img src={WhoWeAre1} /></Col>
                                    <Col md={6}>
                                        <img src={WhoWeAre2} className="d-none d-sm-block" /></Col>
                                </Row>
                            </div> */}
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="meet-expert-section">
                <Container>
                    <h2 className="expert-heading">Meet Our Experts</h2>
                    <Row className='justify-content-evenly'>
                        <Col md={6} lg={3}>
                            <img src={Expert1} />
                            <div className="content">
                                <span className="label">
                                    Research Analyst
                                </span>
                                <h5>Mr. Aadesh</h5>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <img src={Expert2} />
                            <div className="content">
                                <span className="label">
                                    Marketing & Operations
                                </span>
                                <h5>Mr. Praveen</h5>
                            </div>

                        </Col>
                        <Col md={6} lg={3}>
                            <img src={Expert3} />
                            <div className="content">
                                <span className="label">
                                    Strategy
                                </span>
                                <h5>Mr. Anand </h5>
                            </div>
                        </Col>
                        {/* <Col md={6} lg={3}>
                            <img src={Expert4} />
                            <div className="content">
                                <span className="label">
                                    Expert Trader
                                </span>
                                <h5>Ms. Roshni</h5>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
            <DownloadApp />
        </>
    )
}
export default About