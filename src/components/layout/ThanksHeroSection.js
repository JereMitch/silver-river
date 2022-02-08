import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThanksHeroSection.css";

function ThanksHeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "thanks__hero-section" : "thanks__hero-section darkBg"}
      >
        <div className="thanks-container font">
          <div
            className="thanks-row thanks__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "thanks-row",
            }}
          >
            <div className="thanks-col">
              <div className="thanks__hero-text-wrapper">
                <div className="thanks-top-line">{topLine}</div>
                <h1 className={lightText ? "thanks-heading" : "thanks-heading thanks-dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "thanks__hero-subtitle"
                      : "thanks__hero-subtitle thanks-dark"
                  }
                >
                  {description}
                </p>
                <Link to="/">
                    <button className="thanks-btn">{buttonLabel}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThanksHeroSection;