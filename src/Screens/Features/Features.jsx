import './Features.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { DownloadSection } from "../../Components/DownloadSection/DownloadSection";
import FeatureImg from '../../assets/feature-img.jpg';
import Icon from '../../assets/collection1.svg';
import Icon2 from '../../assets/collection2.svg';
import { useState } from 'react';

function Features() {
    const features = [
        { img: Icon, title: "Trusted Recommendations", description: "Based on all the wisdom circles create a one stop analytical center for issuing all recommendations regarding the purchase or sale of shares.", isHighlighted: false },
        { img: Icon2, title: "Real-Time Market Updates", description: "With the end of this training the students will be able to understand the marketplace and trading life with all its aspects.", isHighlighted: true },
        { img: Icon, title: "Expert Insights", description: "Better evaluation of one will be acquired after the completion of a deeper study regarding macroeconomic factors taken into consideration.", isHighlighted: false },
        { img: Icon2, title: "User-Friendly Interface", description: "The most effective platform will be switching from easy to advanced targeting different groups of traders starting with beginners.", isHighlighted: true },
        { img: Icon2, title: "Educational Resources", description: "The best way a greater understanding of the markets is acquired is through volumes of tutorials and articles coupled up by videos.", isHighlighted: true },
        { img: Icon, title: "Multiple Subscription Plans", description: "Professional traders and fresh entrants have different requirements hence they should be able to choose from various available subscription plans.", isHighlighted: false },
        { img: Icon2, title: "Risk Analysis Tools", description: "Equipping oneself with instruments, that will be able to determine potential risks and rewards different smarter choices will be made leading to better investments.", isHighlighted: true },
        { img: Icon, title: "Dependable and Safe", description: "At Tradeflix, be assured of feeling safe as the environment is constantly looking out to protect your data as well as your privacy.", isHighlighted: false }
    ];
    const [dataArray, setDataArray] = useState([
        {   
            slogan: 'Explore Market Insights',
            desc: 'Explore comprehensive market insights to begin your journey with Tradeflix. Our system gives insights into available market trends thereby allowing you to plan your investment objectives strategically.',
            name: 'Praful Kumar',
            star: 4
        },
        {   
            slogan: 'Access Expert Recommendations',
            desc: 'Obtain actionable recommendations and sound ideas provided by validated advisors and industry professionals under SEBI regulation. These recommendations will help you in all your trading and investment activities.',
            name: 'Praful Kumar',
            star: 4
        },
        {   
            slogan: 'Stay Updated in Real Time',
            desc: 'Look out for live news on market movements, stock prices and investment news. Our platform guarantees that you get current most critical information at all times.',
            name: 'Praful Kumar',
            star: 4
        },
        {   
            slogan: 'Learn and Strategize',
            desc: 'Regardless of the trader’s experience, Tradeflix provides tips and resources to users describing methods of trading strategies to strengthen their understanding of trading and increase confidence in their methods.',
            name: 'Praful Kumar',
            star: 4
        },
        {   
            slogan: 'Make Informed Decisions',
            desc: 'Takedow the three helpful pieces of information provided: Some commissions suggest trading within the range of growth, educational materials, and trading techniques an advisor.',
            name: 'Praful Kumar',
            star: 4
        },
        {   
            slogan: 'Monitor and Optimize',
            desc: 'Whenever the market changes or someone provides new recommendations, make sure to readjust your plan and follow it so that one continues to stay on the path of success.',
            name: 'Praful Kumar',
            star: 4
        }
    ]);

    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        console.log(selectedIndex)
        setActiveIndex(selectedIndex)
    }
    return (
        <>
            <div className="feature-section">
                <Container className="custom-wrapper">
                    <Row>
                        <Col lg={6} className="d-flex justify-content-center align-items-center">
                            <div className="content-box">
                                <p className="tagline">Trade with Clarity</p>
                                <h1 className="title">
                                    User Friendly<br /> <span>
                                        Stock Analysis and
                                        Recommendation Platform</span>
                                </h1>
                                <p className="description pr-3">
                                Tradeflix makes stock analysis and recommendations convenient for every trader.
                                </p>
                                <div className="button-group">
                                    <button className="btn buy-now">Buy Now</button>
                                    <button className="btn view-demo">View Demo</button>
                                </div></div></Col>
                        <Col lg={6}>
                            <img src={FeatureImg} className="w-100" />
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="how-it-work">
                <Container className="custom-wrapper">
                    <Row>
                        <Col lg={6}>

                            <h2 className="title">How Tradeflix<br />Works</h2>
                            <div className="step-card">
                                <div className="content-box">
                                    <p className="step-title">Step {activeIndex + 1}/{dataArray.length}</p>
                                    {/* <h3 className="step-heading">Lorem ipsum</h3>
                                    <p className="step-description">
                                        Lorem ipsum dolor sit amet consectetur. Et at sapien at
                                        viverra fusce. Sociis adipiscing convallis in purus dui
                                        netus. In quisque rhoncus augue phasellus id volutpat. Metus
                                        urna blandit tempus.
                                    </p> */}


                                    <Carousel activeIndex={activeIndex} pause="hover" indicators={false} interval={3000} onSelect={handleSelect}>
                                        {dataArray.map((item, index) => (
                                            <Carousel.Item key={index} >
                                                <h2 style={{fontSize: '22px'}}>{item?.slogan}</h2>
                                                <p>{item?.desc}</p>

                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="process-box">
                                <div className="process-title">How Tradeflix Works?</div>
                                <div className="process-description">If you’re new to trading or have been trading for some time, Tradeflix helps you at every step with easy to use features and varied subscription options.</div>
                                <div className="process-flow">
                                    <div className={`process-step step1 ${activeIndex === 0 ? 'review' : ''} `} onClick={() => setActiveIndex(0)}>Project discovery</div>
                                    <div className={`process-step step2 ${activeIndex === 1 ? 'review' : ''}`} onClick={() => setActiveIndex(1)}>Talent recruitment</div>
                                    <div className={`process-step step3 ${activeIndex === 2 ? 'review' : ''}`} onClick={() => setActiveIndex(2)}>
                                        Review & approval
                                    </div>
                                    <div className={`process-step step4 ${activeIndex === 3 ? 'review' : ''}`} onClick={() => setActiveIndex(3)}>Onboarding & integration</div>
                                    <div className={`process-step step5 ${activeIndex === 5 ? 'review' : ''}`} onClick={() => setActiveIndex(5)}>Performance evaluation</div>
                                    <div className={`process-step step6 ${activeIndex === 4 ? 'review' : ''}`} onClick={() => setActiveIndex(4)}>Project execution</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="features-card">
                <Container className="custom-wrapper">
                    <h2 className="mb-3 text-center">Features</h2>
                    <p className="mb-4 text-center">Take a look at some of the crucial features that will assist you in your trading journey.</p>

                    <Row style={{ margin: "60px 0 0" }}>
                        {features.map((feature, index) => (
                            <Col lg={3} md={6} key={index} className="mb-4">
                                <div className={`card ${feature.isHighlighted ? 'highlighted' : ''}`}>
                                    <div className="icon mb-3">
                                        <img src={feature.img} />
                                    </div>
                                    <h5>{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <DownloadSection />
        </>
    )
}

export default Features;