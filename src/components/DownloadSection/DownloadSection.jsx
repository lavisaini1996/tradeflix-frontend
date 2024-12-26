import MobileImage from '../../assets/MobileImage.svg'
import './DownloadSection.css'
export function DownloadSection() {
    return (
        <>
            <div className="downloadsection">

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

                            <div className="downloadsecgoogle">
                                <div className="gplay-png-2" />

                                <div className="appstore-png-2" />
                            </div>
                        </div>

                        <img
                            className="mobile-tradeflix"
                            alt="Mobile tradeflix"
                            src={MobileImage}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}