import React from "react";
import CountdownTimer from "./CountdownTimer";
import logo from "../data/logo.png"
import  Social  from "./social";
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
        <div>
          <img src={logo} alt="logo" width="" height="150px"/>
         
        </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              <h1 className="poppins-bold">
                  {props.data ? props.data.title : "Loading..."}
                 </h1>
                 <div></div>
                <p>We’re working hard to bring you an enhanced experience! Our website is currently under development and will be live soon.</p>
                <CountdownTimer/>
              </div>
            </div>
          </div>
          <Social/>
        </div>
      </div>
    </header>
  );
};
