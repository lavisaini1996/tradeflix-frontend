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
import { DownloadApp } from "../../Components/DownloadApp/DownloadApp";

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

            <PlansContainer isYearly={false} />
            <Testimonials />
            <DownloadApp />


        </>

    )
}