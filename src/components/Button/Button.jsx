/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconSolidPlus29 } from "../../Icons/IconSolidPlus29/IconSolidPlus29";
import "./style.css";

export const Button = ({
    type,
    state,
    className,
    divClassName,
    text = "Continue",
}) => {
    return (
        <div className={`button ${type} ${state} ${className}`}>
            {state === "default" && (
                <div className={`continue ${divClassName}`}>{text}</div>
            )}

            {state === "right-icon" && <div className="text-wrapper">{text}</div>}

            {["icon-only", "left-icon", "right-icon", "two-icon"].includes(state) && (
                <IconSolidPlus29
                    className="icon-solid-plus"
                    color={
                        ["link-only", "outline", "text"].includes(type)
                            ? "#1E293B"
                            : "white"
                    }
                />
            )}

            {["left-icon", "two-icon"].includes(state) && (
                <div className="div">{text}</div>
            )}

            {state === "two-icon" && (
                <IconSolidPlus29
                    className="icon-solid-plus"
                    color={
                        ["link-only", "outline", "text"].includes(type)
                            ? "#1E293B"
                            : "white"
                    }
                />
            )}
        </div>
    );
};
