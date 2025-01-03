import './Features.css';
import { Container, Row, Col } from 'react-bootstrap';
import { DownloadSection } from "../../Components/DownloadSection/DownloadSection";
import FeatureImg from '../../assets/feature-img.jpg';
import Icon from '../../assets/collection1.svg';
import Icon2 from '../../assets/collection2.svg';

function Features() {
    const features = [
        { img: Icon, title: "Stock Trading Analysis", description: "Lorem ipsum dolor sit amet consectetur. In morbi.", isHighlighted: false },
        { img: Icon2, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: true },
        { img: Icon, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: false },
        { img: Icon2, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: true },
        { img: Icon2, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: true },
        { img: Icon, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: false },
        { img: Icon2, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: true },
        { img: Icon, title: "8 Dashboards", description: "Unique dashboard templates.", isHighlighted: false }
    ];
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
                                        Guidance Platform</span>
                                </h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur. Sed tincidunt ipsum
                                    quisque egestas. Faucibus semper lacus.
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

                            <h2 className="title">How our Platform <br />works</h2>
                            <div className="step-card">
                                <div className="content-box">
                                    <p className="step-title">Step 1/6</p>
                                    <h3 className="step-heading">Lorem ipsum</h3>
                                    <p className="step-description">
                                        Lorem ipsum dolor sit amet consectetur. Et at sapien at
                                        viverra fusce. Sociis adipiscing convallis in purus dui
                                        netus. In quisque rhoncus augue phasellus id volutpat. Metus
                                        urna blandit tempus.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="process-box">
                                <div className="process-title">Lorem ipsum dolor sit</div>
                                <div className="process-description">
                                    Lorem ipsum dolor sit amet consectetur. Vitae nulla id urna metus molestie
                                    dignissim morbi interdum lectus.
                                </div>
                                <div className="process-flow">
                                    <div className="process-step step1">Project discovery</div>
                                    <div className="process-step step2">Talent recruitment</div>
                                    <div className="process-step review step3">
                                        Review & approval
                                    </div>
                                    <div className="process-step step4">Onboarding & integration</div>
                                    <div className="process-step step5">Performance evaluation</div>
                                    <div className="process-step step6">Project execution</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="features-card">
                <Container className="custom-wrapper">
                    <h2 className="mb-3 text-center">Features</h2>
                    <p className="mb-4 text-center">Simple and organized Analysis Platform will help you get started right away</p>

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