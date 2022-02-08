import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MyButton } from "../Button";
import "../styles/MainNav.css";
import { IconContext } from "react-icons/lib";

function MainNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="MainNav">
          <div className="MainNav-container container">
            <Link to="/" className="MainNav-logo" onClick={closeMobileMenu}>
              <img src="https://svgsilh.com/svg/1106336.svg" alt="logo" className='MainNav-img' />
              <p>Silver River<br/> Counseling</p>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/payment"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Payment &amp; Insurance
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/services/#appt-section"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <MyButton 
                    buttonStyle='btn--outline'
                    >
                      Schedule an Appointment
                    </MyButton>
                  </Link>
                ) : (
                  <Link to="/services/#appt-section" className="btn-link">
                    <MyButton
                      buttonStyle='btn--outline'
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Schedule an Appointment
                    </MyButton>
                  </Link>
                )}
              </li>
          <li className="login-links nav-item">
            <Link to='/login' className='nav-links'>Login</Link>
          </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default MainNav;
