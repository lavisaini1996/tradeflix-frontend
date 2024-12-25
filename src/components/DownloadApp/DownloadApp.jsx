import './DownloadApp.css';
import Background from '../../assets/app-bg.png';
import Dwnld1 from '../../assets/apple.png';
import Dwnld2 from '../../assets/google-play.png';

export function DownloadApp() {
    return (
        <>
            <div className="app-dwnld-section" style={{
                backgroundImage: `url(${Background})`
            }}>
                <div className="content">
                    <h5>Unleash the power of our
                        iOS and Android apps</h5>
                    <p>Empower Your Daily Interactions and Stay Connected Anywhere. Elevate Your Experience by Downloading Our Feature-
                        Rich App for Effortless Access to Innovation, Convenience, and Seamless Connectivity</p>
                    <div className="dwnld-link">
                        <img src={Dwnld1} alt="" />
                        <img src={Dwnld2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}