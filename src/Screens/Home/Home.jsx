import React from "react";
import { Basic } from "../../Components/Basic";
import { Button } from "../../Components/Button";
import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import "./Home.css";
import { Banner } from "../../Components/Banner/Banner";
import { AssestContainer } from "../../Components/AssestContainer/AssestContainer";
import { About } from "../../Components/About/About";

export function Home() {
    return (
        <>
            <Banner />
            <AssestContainer />
            <About />
            <div className="">
                <div className="hero">



                </div>

                <div className="ABOUT-US">

                </div>

                <div className="DOWNLOAD-OUR-APP">
                    <div className="overlap-2">
                        <div className="background-2" />

                        <div className="container-2">
                            <div className="overlay-border">
                                <div className="heading-DOWNLOAD">DOWNLOAD OUR APP</div>
                            </div>

                            <div className="download-our-app-get-wrapper">
                                <p className="download-our-app-get">
                                    Download Our App &amp;
                                    <br />
                                    Get The Special Offer!
                                </p>
                            </div>

                            <p className="install-our-app-get">
                                Install Our App &amp; Get Special Promo!
                            </p>

                            <div className="gplay-png-2" />

                            <div className="appstore-png-2" />
                        </div>

                        <img
                            className="mobile-tradeflix"
                            alt="Mobile tradeflix"
                            src="https://c.animaapp.com/LJb56hOf/img/mobile-tradeflix-1.png"
                        />
                    </div>
                </div>

                <div className="section-7">
                    <div className="section-8">
                        <div className="heading-FEATURES-wrapper">
                            <div className="heading-FEATURES">FEATURES</div>
                        </div>

                        <div className="heading-our">Our Platform Feature</div>

                        <p className="lorem-ipsum-dolor-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo
                            <br />
                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                            magnis
                            <br />
                            dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>

                    <div className="background-3" />

                    <div className="overlap-3">
                        <div className="background-border-8">
                            <div className="heading-full">Full Management Features</div>

                            <p className="lorem-ipsum-dolor-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />
                                elit. Aenean commodo ligula eget dolor.
                            </p>
                        </div>

                        <div className="background-border-8">
                            <div className="heading-full">Full Management Features</div>

                            <p className="lorem-ipsum-dolor-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />
                                elit. Aenean commodo ligula eget dolor.
                            </p>
                        </div>
                    </div>

                    <div className="background-border-9">
                        <div className="heading-full">Full Management Features</div>

                        <p className="lorem-ipsum-dolor-5">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            <br />
                            elit. Aenean commodo ligula eget dolor.
                        </p>
                    </div>

                    <div className="background-border-10">
                        <div className="heading-full">Full Management Features</div>

                        <p className="lorem-ipsum-dolor-5">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            <br />
                            elit. Aenean commodo ligula eget dolor.
                        </p>
                    </div>

                    <div className="frame-7">
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

                        <div className="frame-8">
                            <Basic
                                buttonTypeDefaultStateClassName="design-component-instance-node"
                                className="BASIC-instance"
                                layer="https://c.animaapp.com/LJb56hOf/img/layer-1.svg"
                            />
                            <div className="BASIC-2">
                                <div className="frame-9">
                                    <div className="BASIC-3">STANDARD</div>

                                    <p className="free">
                                        <span className="span">$14</span>

                                        <span className="text-wrapper-15">/month</span>
                                    </p>
                                </div>

                                <img
                                    className="layer-2"
                                    alt="Layer"
                                    src="https://c.animaapp.com/LJb56hOf/img/layer-2.svg"
                                />

                                <div className="frame-10">
                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#EAEAEB"
                                        />
                                        <div className="text-wrapper-16">3 prototypes</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#EAEAEB"
                                        />
                                        <div className="text-wrapper-16">3 boards</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#EAEAEB"
                                        />
                                        <div className="text-wrapper-16">Single user</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#EAEAEB"
                                        />
                                        <div className="text-wrapper-16">Normal security</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#EAEAEB"
                                        />
                                        <div className="text-wrapper-16">
                                            Permissions &amp; workflows
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className="button-2"
                                    divClassName="button-3"
                                    state="default"
                                    text="Choose Plan"
                                    type="default"
                                />
                            </div>

                            <div className="BASIC-4">
                                <div className="frame-9">
                                    <div className="BASIC-5">ENTERPRISE</div>

                                    <p className="free-2">
                                        <span className="text-wrapper-17">$50</span>

                                        <span className="text-wrapper-18">/month</span>
                                    </p>
                                </div>

                                <img
                                    className="layer-2"
                                    alt="Layer"
                                    src="https://c.animaapp.com/LJb56hOf/img/layer-3.svg"
                                />

                                <div className="frame-10">
                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#334155"
                                        />
                                        <div className="text-wrapper-19">3 prototypes</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#334155"
                                        />
                                        <div className="text-wrapper-19">3 boards</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#334155"
                                        />
                                        <div className="text-wrapper-19">Single user</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#334155"
                                        />
                                        <div className="text-wrapper-19">Normal security</div>
                                    </div>

                                    <div className="frame-11">
                                        <IconOutlineCheckCircle20
                                            className="icon-outline-check-circle-20"
                                            color="#334155"
                                        />
                                        <div className="text-wrapper-19">
                                            Permissions &amp; workflows
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className="design-component-instance-node"
                                    divClassName="button-4"
                                    state="default"
                                    text="Choose Plan"
                                    type="default"
                                />
                            </div>
                        </div>
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
                        <div className="container-wrapper">
                            <div className="container-4">
                                <div className="heading-wrapper">
                                    <div className="heading-3">TESTIMONIAL</div>
                                </div>

                                <div className="text-wrapper-29">slide 2 of 3</div>

                                <div className="overlap-5">
                                    <div className="overlay-shadow-wrapper">
                                        <div className="overlay-shadow">
                                            <p className="lorem-ipsum-dolor-7">
                                                &#34;Lorem ipsum dolor sit amet,
                                                <br />
                                                consectetur adipiscing elit, sed do
                                                <br />
                                                eiusmod tempor incididunt ut labore
                                                <br />
                                                et dolore magna aliqua.&#34;
                                            </p>

                                            <div className="confident-smiling-2" />

                                            <div className="strong-camille">Sakshi Rawat</div>

                                            <img
                                                className="emojione-star"
                                                alt="Emojione star"
                                                src="https://c.animaapp.com/LJb56hOf/img/emojione-star.svg"
                                            />

                                            <img
                                                className="emojione-star-2"
                                                alt="Emojione star"
                                                src="https://c.animaapp.com/LJb56hOf/img/emojione-star-1.svg"
                                            />

                                            <img
                                                className="emojione-star-3"
                                                alt="Emojione star"
                                                src="https://c.animaapp.com/LJb56hOf/img/emojione-star-2.svg"
                                            />

                                            <img
                                                className="emojione-star-4"
                                                alt="Emojione star"
                                                src="https://c.animaapp.com/LJb56hOf/img/emojione-star-3.svg"
                                            />

                                            <img
                                                className="emojione-star-5"
                                                alt="Emojione star"
                                                src="https://c.animaapp.com/LJb56hOf/img/emojione-star-4.svg"
                                            />
                                        </div>
                                    </div>

                                    <img
                                        className="icon"
                                        alt="Icon"
                                        src="https://c.animaapp.com/LJb56hOf/img/icon.svg"
                                    />
                                </div>

                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-3">
                                        <div className="paragraph-background-wrapper">
                                            <div className="paragraph-background">
                                                <div className="heading-marketing">
                                                    Best in Analyzing data
                                                </div>

                                                <div className="heading-lavinia">Ruchika Mehra</div>
                                            </div>
                                        </div>

                                        <div className="section-9">
                                            <div className="paragraph-background-2">
                                                <div className="heading-marketing">
                                                    Best in Analyzing data
                                                </div>

                                                <div className="heading-lavinia-2">Rahul Rawat</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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