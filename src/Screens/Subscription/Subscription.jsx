import { useState } from 'react'
import { DownloadApp } from '../../Components/DownloadApp/DownloadApp'
import { PlansContainer } from '../../Components/PlansContainer/PlansContainer'
import './Subscription.css'
export function Subscription() {

    const [isPlanYearly, setIsPlanYearly] = useState(false);
    const isChecked = (e) => {

        if (e.target.checked) {
            setIsPlanYearly(true)
        } else {
            setIsPlanYearly(false)
        }
    }
    return (
        <>
            <div className="account">
                <div className="choose-the-variety-wrapper">
                    <div className="choose-the-variety" style={{ width: '100%' }}>
                        Our Flexible Price Plan
                    </div>
                </div>
                <p className="lorem-ipsum-dolor-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    <br />
                    commodo ligula eget dolor. Aenean massa.
                </p>
            </div>

            <div className="subsplan d-flex justify-content-center">
                <div className="planmonth">
                    <span>MONTHLY</span>
                </div>
                <div className='mx-3'>
                    <label class="toggle-container">
                        <input type="checkbox" onChange={(e) => isChecked(e)} />
                        <span class="slider"></span>
                    </label>
                </div>
                <div className="planmonth">
                    <span>YEARLY (Save 15%)</span>
                </div>
            </div>




            <PlansContainer isYearly={isPlanYearly} />
            <DownloadApp />
        </>
    )
}