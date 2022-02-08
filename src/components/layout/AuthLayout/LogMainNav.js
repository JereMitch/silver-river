import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MyButton } from "../../Button";
import "../../styles/MainNav.css";
import { IconContext } from "react-icons/lib";
import Logout from '../../login/Logout'
import { useAuth } from '../../../contexts/AuthContext'
import { DropdownButton } from "react-bootstrap";

function LogMainNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser } = useAuth()

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
            <Link to="/lh" className="MainNav-logo" onClick={closeMobileMenu}>
              <img src="https://svgsilh.com/svg/1106336.svg" alt="logo" className='MainNav-img' />
              <p>Silver River<br/> Counseling</p>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/lh" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ls"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/la"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/lp"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Payment &amp; Insurance
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/ls"
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
                  <Link to="/ls" className="btn-link">
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
          <li classname='nav-item'>
          <DropdownButton title="Profile">
            <p className='p' ><strong>Name:</strong> Jeremy</p> <br/>
            <p className='p' ><strong>Email:</strong> {currentUser.email}</p> <br/>
            <p className='p' ><strong>Balance:</strong> $56.90</p><br/>
            <p className='p' ><strong>Next Apppointment:</strong> <br/>Jan. 14, 2022</p>
              <Logout className='login-links' />             
          </DropdownButton>
          </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default LogMainNav;
