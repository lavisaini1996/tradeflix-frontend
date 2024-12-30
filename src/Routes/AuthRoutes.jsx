import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Home } from "../Screens/Home/Home.jsx";
import { Root } from "./Root.jsx";
import About from "../Screens/About/About.jsx";
import Contact from "../Screens/Contact/Contact.jsx";
import Features from "../Screens/Features/Features.jsx";
import { Subscription } from "../Screens/Subscription/Subscription.jsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.jsx";

const AuthRoutes = () => {
    return (
        <>
            {/* ScrollToTop must be outside Routes */}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="features" element={<Features />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                    <Route path="subcription" element={<Subscription />} />
                </Route>
            </Routes>
        </>
    );
};

export default AuthRoutes;
