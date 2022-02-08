import React from "react";
import "../styles/Footer.css";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/" className="foot-logo">
          <img
            src="https://svgsilh.com/svg/1106336.svg"
            alt="logo"
            className="foot-img"
          />
          <p>
            Silver River
            <br /> Counseling
          </p>
        </Link>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/" className="font">
              Home
            </Link>
            <Link to="/services" className="font">
              Services
            </Link>
            <Link to="/about" className="font">
              About
            </Link>
            <Link to="/payment" className="font">
              Payment &amp; Insurance
            </Link>
          </div>
          <div className="footer-contact">
            <h3 className='font'>Contact Us:</h3>
            <p className="phone font">
              Phone: <a href="/">(385) 485-6731</a>
            </p>
            <p className="address font">
              Silver River Counseling <br/>63 North 300 East Suite 1E<br/> Provo, UT 84606
            </p>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights font">Silver River Counseling © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.psychologytoday.com/us/therapists/loren-mitchell-provo-ut/796635"
              }
              target="_blank"
              aria-label="Twitter"
            >
              <MdPsychology />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
