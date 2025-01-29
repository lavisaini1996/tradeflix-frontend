import React from "react";
import { Basic } from "../../Components/Basic";
import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import "./Home.css";
import { Banner } from "../../Components/Banner/Banner";
import { AssestContainer } from "../../Components/AssestContainer/AssestContainer";
import { About } from "../../Components/About/About";
import { DownloadSection } from "../../Components/DownloadSection/DownloadSection";
import { PlansContainer } from "../../Components/PlansContainer/PlansContainer";
import { Testimonials } from "../../Components/Testimonials/Testimonials";
import { DownloadApp } from "../../Components/DownloadApp/DownloadApp";
import { FeaturesSection } from "../../components/FeaturesSection/FeaturesSection";
import { Link } from "react-router";
import { Button } from "react-bootstrap";

export function Home() {
    return (
        <>
            <Banner />
            <AssestContainer />
            <About />

            <DownloadSection />
            <FeaturesSection />
            <div className="account mt-5">
                <div className="heading-OPEN-wrapper">
                    <div className="heading-OPEN ">OPEN ACCOUNT</div>
                </div>
                <div className="choose-the-variety-wrapper">
                    <div className="choose-the-variety">
                        Choose The Variety
                        of Plans
                    </div>
                </div>
                <p className="lorem-ipsum-dolor-6">
                    Tradeflix offers two kind of plans for Beginner and Pro Investor.
                    <br />
                    Have a look at our plans below.
                </p>
            </div>

            <PlansContainer isYearly={false} />
            <div className="d-flex justify-content-center mt-5">

                <Button
                    variant="primary"
                    className="rounded-pill px-4 py-3 aboutbutton"
                >
                    <Link className="nav-link" to='/subcription'>
                        Check More

                    </Link>
                </Button>
            </div>
            <Testimonials />
            <DownloadApp />


        </>

    )
}