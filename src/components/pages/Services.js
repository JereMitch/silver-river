import React from "react";
import Appointment from "../Appointment";
import ServiceHeroSection from "../layout/ServiceHeroSection";
import { serviceObjOne } from "../data/ServicesData";
import "../styles/Services.css";
import { useHistory } from "react-router-dom";
import MainNav from "../layout/MainNav";
import Footer from "../layout/Footer";

function Services() {
  const history = useHistory();

  function addAppointmentHandler(newAppt) {
    fetch(
      "https://capstone-df650-default-rtdb.firebaseio.com/appointments.json",
      {
        method: "POST",
        body: JSON.stringify(newAppt),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/thanks");
    });
  }

  return (
    <>
      <MainNav />
      <div className="service-main">
        <ServiceHeroSection {...serviceObjOne} />
        <div className="service-card">
          <Appointment onAddAppointment={addAppointmentHandler} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
