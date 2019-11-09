import React from "react";
import "./Custombutton.scss";

const Custombutton = ({ children, isGoogleSignin, ...otherprops }) => (
    <button className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`} {...otherprops}>
        {children}
    </button>
)
export default Custombutton;