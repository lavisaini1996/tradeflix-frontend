import './Banner.css'
import Video from '../../assets/BannerBackgroundVideo.mp4'
import { useEffect, useRef } from 'react';
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
        <>
            <div className="background">
                <div className="overlap">
                    <div className="pngegg" />
                    <video className='bannervideo' ref={videoRef} autoPlay loop playsInline>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div className="frame-wrapper">
                        <div className="div-wrapper">
                            <div className="frame-4">
                                <p className="heading-your">
                                    Your Partner in Profitable Trading.
                                </p>

                                <p className="lorem-ipsum-dolor">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    <br />
                                    adipiscing elit. Aenean commodo ligula eget
                                    <br />
                                    dolor. Aenean massa. Cum sociis.
                                </p>

                                <div className="text-wrapper-5">Active Users</div>

                                <div className="heading">
                                    <div className="text-wrapper-6">3,8M +</div>
                                </div>

                                <div className="overlap-group">
                                    <div className="portrait-of" />

                                    <div className="confident-smiling" />

                                    <div className="man-smile-portrait" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="heading-2">
                            <div className="text-wrapper-7">Trade with Clarity.</div>
                        </div>

                        <div className="frame-5">
                            <div className="gplay-png" />

                            <div className="appstore-png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}