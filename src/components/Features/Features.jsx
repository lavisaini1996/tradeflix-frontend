import './Feature.css'
import FeatureVideo from '../../assets/FeatureVideo.mp4'
import { useEffect, useRef } from 'react';
export function Features() {
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
            <div className="featuresection">
                <div className="section-8">
                    <div className="heading-FEATURES-wrapper">
                        <div className="heading-FEATURES">FEATURES</div>
                    </div>

                    <div className="heading-our">Our Platform Feature</div>
                    <div className='background-3'>
                        <video className='featureVideo' ref={videoRef} autoPlay loop playsInline>
                            <source src={FeatureVideo} type="video/mp4" />
                        </video>
                    </div>

                </div>

                <div className="featureblock">
                    <p className="lorem-ipsum-dolor-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo
                        <br />
                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis
                        <br />
                        dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <div>
                        <div className="background-border">
                            <div className="heading-full">Full Management Features</div>

                            <p className="lorem-ipsum-dolor-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />
                                elit. Aenean commodo ligula eget dolor.
                            </p>
                        </div>

                        <div className="background-border">
                            <div className="heading-full">Full Management Features</div>

                            <p className="lorem-ipsum-dolor-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />
                                elit. Aenean commodo ligula eget dolor.
                            </p>
                        </div>

                        <div className="background-border">
                            <div className="heading-full">Full Management Features</div>

                            <p className="lorem-ipsum-dolor-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />
                                elit. Aenean commodo ligula eget dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}