import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/assets/logo.png";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="left">
          <div className="items-wrapper">
            <div className="item">
              <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <span className="label">Follow your interest.</span>
            </div>
            <div className="item">
              <span className="icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="label">Hear what people are talking about.</span>
            </div>
            <div className="item">
              <span className="icon">
                <i className="fa fa-comment" aria-hidden="true"></i>
              </span>
              <span className="label">Join the conversation.</span>
            </div>
          </div>
        </div>
        <div className="center">
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{ width: "5rem" }}
          />
          <h1>
            See what's happening in
            <br />
            the world right now.
          </h1>
          <span className="span-label">Join Fake Twitter today.</span>
          <Link to="/signup" className="btn-sign-up">
            Sign up
          </Link>
          <Link to="/login" className="btn-login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
