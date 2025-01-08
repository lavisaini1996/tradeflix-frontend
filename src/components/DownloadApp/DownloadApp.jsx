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
                    <h5>Master Trading with Clarity – Your Gateway to Expert Insights!</h5>
                    <p>Upgrade your trading journey with Tradeflix – Trading with Clarity. We are active on PlayStore and AppStore. Install Now!</p>
                    <div className="dwnld-link">
                        <img src={Dwnld1} alt="" />
                        <img src={Dwnld2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}