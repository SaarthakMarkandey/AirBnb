import React from "react";
// import  ReactDOM  from "react";
// import banner from "../images/banner.png"

export default function Hero(){
    return (
        <section className="hero">
            <img src="/images/banner.png" className="hero-photo"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}