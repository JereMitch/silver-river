import React from "react";
import "../styles/Footer.css";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading font'>
        Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text font'>
        You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
        <form>
        <input
        className='footer-input font'
        name='email'
        type='email'
        placeholder='Your Email'
        />
        <Button buttonStyle='btn--outline' className='font'>Subscribe</Button>
        </form>
        </div>
      </section> */}
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
          {/* <div className='footer-link-items'>
            <h2 className='font'>Contact Us</h2>
            <Link to='/' className='font'>Contact</Link>
            <Link to='/' className='font'>Support</Link>
            <Link to='/' className='font'>Destinations</Link>
            <Link to='/' className='font'>Sponsorships</Link>
          </div> */}
        </div>
        {/* <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className='font'>Videos</h2>
            <Link to='/' className='font'>Submit Video</Link>
            <Link to='/' className='font'>Ambassadors</Link>
            <Link to='/' className='font'>Agency</Link>
            <Link to='/' className='font'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='font'>Social Media</h2>
            <Link to='/' className='font'>Instagram</Link>
            <Link to='/' className='font'>Facebook</Link>
            <Link to='/' className='font'>Youtube</Link>
            <Link to='/' className='font'>Twitter</Link>
          </div>
        </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className='footer-logo'>
            <Link to='/' className='social-logo font'>
              <MdFingerprint className='navbar-icon' />
              LAVISH
            </Link>
          </div> */}
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
            {/* <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link> */}
            {/* <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link> */}
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
            {/* <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
