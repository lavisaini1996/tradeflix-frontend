import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App.jsx";
import { Home } from "../Screens/Home/Home.jsx";
import { Root } from "./Root.jsx";
import About from "../Screens/About/About.jsx";
// import { About } from "../Screens/About/About.jsx";


const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} >
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AuthRoutes