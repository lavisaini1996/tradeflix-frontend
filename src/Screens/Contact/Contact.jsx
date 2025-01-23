import './Contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contactImg from '../../assets/contact-img.png';
import Email from '../../assets/email.png';
import Phone from '../../assets/phone.png';
import Connect from '../../assets/connect.png';
import Location from '../../assets/location.png';
import CIg from '../../assets/CIg.png';
import CFb from '../../assets/CFb.png';
import CDb from '../../assets/CDb.png';
import CTw from '../../assets/CTw.png';
import CLn from '../../assets/CLn.png';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        phone: '',
        message: ""
    })
    const validate = () => {
        if (formValue?.name == '') {
            setErrorMessage({ ...errorMessage, name: 'name is required' })
            return false;
        }
        if (formValue?.email == '') {
            setErrorMessage({ ...errorMessage, email: 'email is required' })
            return false;
        }
        if (formValue?.message == '') {
            setErrorMessage({ ...errorMessage, message: 'message is required' })
            return false;
        }
        return true;

    }
    const setValue = (name, value) => {
        console.log(name, value)
        setFormValue({ ...formValue, [name]: value })
        if (!value) {
            setErrorMessage({ ...errorMessage, [name]: `${name} is required*` })
        } else {
            setErrorMessage({ ...errorMessage, [name]: '' })
        }
    }
    const sendEmail = () => {
        if (isSending) {
            return;
        }
        if (!validate()) {
            return;
        }
        setIsSending(true)
        const formData = {
            name: formValue?.name,
            email: formValue?.email,
            phone: formValue?.phone,
            message: formValue?.message
        }

        emailjs.send('service_3p80yvj', 'template_mudb32v', formData, 'V59BuQNTgHU-KWHTo').then((result) => {
            toast('Mail has been sent successfully!', { type: "success" })
            setIsSending(false)

            setFormValue({ name: '', email: '', phone: '', message: "" })
        }).catch((error) => {
            setIsSending(false)
            toast("Something Went Wrong!", { type: 'error' })
        })
    }
    return (
        <>
            <div className="contact">
                <h1>Connect With <span style={{ color: '#4166AE' }}>Trade<span style={{ color: '#FF0000' }}>flix</span></span></h1>
                <p>Contact us today to get started! Whether you have questions, feedback, or inquiries, our team is here to help. Reach out to us
                    via phone, email, or the contact form below, and we'll get back to you as soon as possible. We look forward to hearing from you!</p>
            </div>
            <div className="contact-from">
                <Container style={{ background: '#F4F4F4', borderRadius: '20px', padding: '40px' }}>
                    <Row>
                        <Col lg={6} md={12}>
                            <h5 className="pb-3">We're Here to Help</h5>
                            <Form>
                                <Form.Group controlId="formName" className="mb-4">
                                    <Form.Label>Name <span className="error">*</span> </Form.Label>
                                    <Form.Control type="text" value={formValue?.name} onChange={(e) => setValue('name', e.target.value)} />
                                    <span className="error">
                                        {errorMessage?.name}
                                    </span>
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formEmail" className="mb-4">
                                            <Form.Label>Email Address <span className="error">*</span></Form.Label>
                                            <Form.Control type="email" value={formValue?.email} onChange={(e) => setValue('email', e.target.value)} />
                                            <span className="error">
                                                {errorMessage?.email}
                                            </span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formPhone" className="mb-4">
                                            <Form.Label>Phone No</Form.Label>
                                            <Form.Control type="text" value={formValue?.phone} onChange={(e) => setValue
                                                ('phone', e.target.value)
                                            } />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="formMessage" className="mb-4">
                                    <Form.Label>Message<span className="error">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={4} value={formValue?.message} onChange={(e) => setValue('message', e.target.value)} />
                                    <span className="error">
                                        {errorMessage?.message}
                                    </span>
                                </Form.Group>

                                <Button onClick={() => sendEmail()} className="w-100 btn-submit">
                                    {isSending ? 'sending...' : 'Submit'}
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={5}>
                            <img src={contactImg} className="img d-none mx-auto d-sm-block" /></Col>
                    </Row>
                </Container>
            </div>
            <div className="contact-detail">
                <Container>
                    <Row>
                        <Col md={6} lg={3}><div className="card"><div className="icon"><img src={Phone} /></div><h6>Talk to us directly</h6><a style={{ color: "#2E4686", fontWeight: "bold" }}>+91-9999981445</a></div></Col>
                        <Col md={6} lg={3}><div className="card"><div className="icon"><img src={Email} /></div><h6>Send your queries</h6><a style={{ color: "#2E4686", fontWeight: "bold" }}>connect@tradeflix.co</a></div></Col>
                        <Col md={6} lg={3}><div className="card"><div className="icon"><img src={Location} /></div><h6>Find us here</h6><a>Chicago HQ Estica Cop. Macomb, MI
                            48042</a></div></Col>
                        <Col md={6} lg={3}><div className="card"><div className="icon"><img src={Connect} /></div><h6>stay connected on social</h6>
                            <div className="social-icons">
                                <div className="icon-box"><img src={CIg} /></div>
                                <div className="icon-box"><img src={CFb} /></div>
                                <div className="icon-box"><img src={CDb} /></div>
                                <div className="icon-box"><img src={CTw} /></div>
                                <div className="icon-box"><img src={CLn} /></div>
                            </div></div></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;