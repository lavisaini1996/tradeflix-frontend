import React from "react";
import { Basic } from "../../Components/Basic";
import { Button } from "../../Components/Button";
import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import "./Home.css";
import { Banner } from "../../Components/Banner/Banner";
import { AssestContainer } from "../../Components/AssestContainer/AssestContainer";
import { About } from "../../Components/About/About";
import { DownloadSection } from "../../Components/DownloadSection/DownloadSection";
import { FeaturesSection } from "../../components/FeaturesSection/FeaturesSection";
import { PlansContainer } from "../../Components/PlansContainer/PlansContainer";
import { Testimonials } from "../../Components/Testimonials/Testimonials";

export function Home() {
    return (
        <>
            <Banner />
            <AssestContainer />
            <About />

            <DownloadSection />
            <FeaturesSection />
            <div className="account">
                <div className="heading-OPEN-wrapper">
                    <div className="heading-OPEN">OPEN ACCOUNT</div>
                </div>
                <div className="choose-the-variety-wrapper">
                    <div className="choose-the-variety">
                        Choose The Variety
                        <br />
                        of Plans
                    </div>
                </div>
                <p className="lorem-ipsum-dolor-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    <br />
                    commodo ligula eget dolor. Aenean massa.
                </p>
            </div>

            <PlansContainer />
            <Testimonials />

            <div className="home">
                <div className="hero">



                </div>

                <div className="ABOUT-US">

                </div>



                <div className="section-7">


                    <div className="background-3" />



                    <div className="frame-7">







                    </div>

                    <footer className="footer">
                        <div className="container-3">
                            <img
                                className="layer-3"
                                alt="Layer"
                                src="https://c.animaapp.com/LJb56hOf/img/layer-x0020-1-1@2x.png"
                            />

                            <div className="overlap-group-2">
                                <div className="text-wrapper-20">Designed by</div>

                                <div className="link-3">
                                    <div className="text-wrapper-21">StarNext</div>
                                </div>
                            </div>

                            <div className="heading-pages-link">Pages link</div>

                            <div className="link-4">
                                <div className="text-wrapper-22">Home</div>
                            </div>

                            <div className="link-5">
                                <div className="text-wrapper-23">About</div>
                            </div>

                            <div className="link-6">
                                <div className="text-wrapper-24">Feature</div>
                            </div>

                            <div className="link-7">
                                <div className="text-wrapper-25">Contact</div>
                            </div>

                            <div className="link-8">
                                <div className="text-wrapper-26">Privacy Policy</div>
                            </div>

                            <div className="frame-12">
                                <div className="heading-contact-us">Contact us</div>

                                <div className="link-9">
                                    <img
                                        className="img-2"
                                        alt="Img"
                                        src="https://c.animaapp.com/LJb56hOf/img/65f3ed594c8df21d9574790e-email-svg.svg"
                                    />

                                    <div className="text-wrapper-27">hello@gmail.com</div>
                                </div>

                                <div className="link-10">
                                    <img
                                        className="img-3"
                                        alt="Img"
                                        src="https://c.animaapp.com/LJb56hOf/img/66068644b34ea0fbb0b1f880-phone-svg.svg"
                                    />

                                    <div className="text-wrapper-28">+124 555 666 99</div>
                                </div>
                            </div>

                            <div className="frame-13">
                                <div className="heading-follow-us">Follow us on</div>

                                <img
                                    className="link-11"
                                    alt="Link"
                                    src="https://c.animaapp.com/LJb56hOf/img/link.svg"
                                />

                                <img
                                    className="link-12"
                                    alt="Link"
                                    src="https://c.animaapp.com/LJb56hOf/img/link-1.svg"
                                />

                                <img
                                    className="link-13"
                                    alt="Link"
                                    src="https://c.animaapp.com/LJb56hOf/img/link-2.svg"
                                />

                                <img
                                    className="link-14"
                                    alt="Link"
                                    src="https://c.animaapp.com/LJb56hOf/img/link-3.svg"
                                />

                                <img
                                    className="link-15"
                                    alt="Link"
                                    src="https://c.animaapp.com/LJb56hOf/img/link-4.svg"
                                />
                            </div>
                        </div>
                    </footer>

                    <div className="overlap-4">

                        <div className="overlap-wrapper">
                            <div className="overlap-6">
                                <div className="background-4" />

                                <div className="section-10">
                                    <div className="unleash-the-power-of-wrapper">
                                        <p className="unleash-the-power-of">
                                            Unleash the power of our
                                            <br />
                                            iOS and Android apps
                                        </p>
                                    </div>

                                    <p className="empower-your-daily">
                                        Empower Your Daily Interactions and Stay Connected Anywhere.
                                        Elevate Your Experience by Downloading Our Feature-
                                        <br />
                                        Rich App for Effortless Access to Innovation, Convenience, and
                                        Seamless Connectivity
                                    </p>

                                    <img
                                        className="link-16"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link-5.svg"
                                    />

                                    <img
                                        className="link-17"
                                        alt="Link"
                                        src="https://c.animaapp.com/LJb56hOf/img/link-6.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}