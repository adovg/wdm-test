import React from "react";
import "./Logo.scss";
import LogoImg from "../../Assets/logo.svg";

export default function Logo() {
    return (
        <div className="nav__logo">
           <img src={LogoImg} alt="logo img"/> 
        </div>
    )
};

