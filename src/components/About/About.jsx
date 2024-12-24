import './About.css'
import Bull from '../../assets/bull.mp4'
import { useEffect, useRef } from 'react';
export function About() {
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
        <>
            <div className="aboutus">
                <div className="container">
                    <div className="background-border-5">

                        <video className='bullvideo' ref={videoRef} autoPlay loop playsInline>
                            <source src={Bull} type="video/mp4" />
                        </video>
                    </div>
                    <div className="heading-ABOUT-US-wrapper">
                        <div className="heading-ABOUT-US">ABOUT US</div>
                    </div>

                    <div className="maximum-profit-wrapper">
                        <p className="maximum-profit">
                            Maximum Profit &amp; Expert Trading Guidance
                        </p>
                    </div>

                    <p className="lorem-ipsum-dolor-2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        <br />
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus
                        <br />
                        et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <div className="section-6">
                        <div className="background-border-6">
                            <div className="symbol-wrapper">
                                <div className="symbol"></div>
                            </div>

                            <div className="heading-secure">Secure Transaction</div>

                            <p className="lorem-ipsum-dolor-3">
                                Lorem ipsum dolor sit amet,
                                <br />
                                consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="background-border-7">
                            <div className="symbol-wrapper">
                                <div className="symbol-2"></div>
                            </div>

                            <div className="heading-global">Global Services</div>

                            <p className="lorem-ipsum-dolor-3">
                                Lorem ipsum dolor sit amet,
                                <br />
                                consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div className="link-2">
                        <div className="text-wrapper-14">More About Us</div>
                    </div>
                </div>
            </div>
        </>
    )
}