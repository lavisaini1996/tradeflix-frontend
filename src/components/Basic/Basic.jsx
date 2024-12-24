/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import { Button } from "../Button";
import "./style.css";

export const Basic = ({
    className,
    layer = "https://c.animaapp.com/LJb56hOf/img/layer.svg",
    buttonTypeDefaultStateClassName,
}) => {
    return (
        <div className={`BASIC ${className}`}>
            <div className="frame">
                <div className="text-wrapper-2">BASIC</div>

                <div className="text-wrapper-3">Free</div>
            </div>

            <img className="layer" alt="Layer" src={layer} />

            <div className="frame-2">
                <div className="frame-3">
                    <IconOutlineCheckCircle20
                        className="icon-outline-check"
                        color="#334155"
                    />
                    <div className="text-wrapper-4">3 prototypes</div>
                </div>

                <div className="frame-3">
                    <IconOutlineCheckCircle20
                        className="icon-outline-check"
                        color="#334155"
                    />
                    <div className="text-wrapper-4">3 boards</div>
                </div>

                <div className="frame-3">
                    <IconOutlineCheckCircle20
                        className="icon-outline-check"
                        color="#334155"
                    />
                    <div className="text-wrapper-4">Single user</div>
                </div>

                <div className="frame-3">
                    <IconOutlineCheckCircle20
                        className="icon-outline-check"
                        color="#334155"
                    />
                    <div className="text-wrapper-4">Normal security</div>
                </div>

                <div className="frame-3">
                    <IconOutlineCheckCircle20
                        className="icon-outline-check"
                        color="#334155"
                    />
                    <div className="text-wrapper-4">Permissions &amp; workflows</div>
                </div>
            </div>

            <Button
                className={buttonTypeDefaultStateClassName}
                divClassName="button-instance"
                state="default"
                text="Choose Plan"
                type="default"
            />
        </div>
    );
};
