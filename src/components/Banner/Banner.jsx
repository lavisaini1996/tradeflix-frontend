import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Video from '../../assets/BannerBackgroundVideo.mp4';
import GoogleButton from '../../assets/GoogleStore.svg';
import AppStore from '../../assets/AppStore.svg';
import './Banner.css';
import BannerBackground from '../../assets/BannerImage.png';
export function Banner() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((error) => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="background">
            <video
                className="bannervideo"
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={Video} type="video/mp4" />
            </video>
            <img src={BannerBackground} className='bannerpersion' alt="" />
            <div className="bannerrightblock">
                <Container className="text-white">
                    <Row className="justify-content-center">
                        <div className='bannercard p-0'>
                            <Card className="blurcon"   >
                                <Card.Body className='d-flex flex-column align-items-end cfui8o'>
                                    <Card.Title className="heading-your text-white mt-4">
                                        Master Trading Strategies with Expert Insights
                                    </Card.Title>
                                    <Card.Text className="lorem-ipsum-dolor text-white text-end fffr5ty6 mt-2">
                                        Tradeflix is an all-in-one solution that offers insight into the world of trading. The aim is to explain how market trends work and how to create trading strategies so that you should be able to self-trade confidently.
                                    </Card.Text>
                                    {/* <div className="d-flex justify-content-end mt-3" >
                                        <div className="text-center">
                                            <p className="text-wrapper-5 text-white m-0">Active Users</p>
                                            <h4 className="text-wrapper-6 text-white">3.8M +</h4>
                                        </div>
                                        <div className="d-flex justify-content-end " style={{ width: '140px' }}>
                                            <div className="man-smile-portrait baning"></div>
                                            <div className="confident-smiling mx-2 baning"></div>
                                            <div className="portrait-of baning"></div>
                                        </div>
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>


                </Container>

            </div>
            <Row className="justify-content-start mt-5 bantradewith">
                <Col md={8} className="text-start">
                    <h1 className="heading-2 text-wrapper-7 mb-0 head">
                        Trade with
                    </h1>
                    <h1 className='head'> Clarity.</h1>
                </Col>
                <div className="frame-5 d-flex justify-content-start">
                    <img src={GoogleButton} alt="" />
                    <img src={AppStore} alt="" className='mx-3' />

                </div>
            </Row>
        </div>
    );
}
