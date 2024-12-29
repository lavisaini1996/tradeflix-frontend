import './Features.css';
import { Container, Row, Col } from 'react-bootstrap';
import { DownloadSection } from "../../Components/DownloadSection/DownloadSection";
import FeatureImg from '../../assets/feature-img.jpg';

function Features() {
    return (
        <>
            <div className="feature-section">
                <Container>
                    <Row>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
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
                        <Col md={6}>
                            <img src={FeatureImg} className="w-100" />
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="how-it-work">
                <Container>
                    <Row>
                        <Col md={6}>

                            <h2 className="title">How our Platform works</h2>
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
                    </Row>
                </Container>
            </div>
            {/* <DownloadSection /> */}
        </>
    )
}

export default Features;