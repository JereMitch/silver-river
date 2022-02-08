import React from "react";
import Appointment from "../../Appointment";
import LogServiceHeroSection from "../../layout/AuthLayout/LogServiceHeroSection";
import { serviceObjOne } from "../../data/ServicesData";
import "../../styles/Services.css";
import { useHistory } from "react-router-dom";
import LogMainNav from "../../layout/AuthLayout/LogMainNav";
import LogFooter from "../../layout/AuthLayout/LogFooter";

function LogServices() {
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
      history.replace("/lt");
    });
  }

  return (
    <>
      <LogMainNav />
      <div className="service-main">
        <LogServiceHeroSection {...serviceObjOne} />
        <div className="service-card">
          <Appointment onAddAppointment={addAppointmentHandler} />
        </div>
      </div>
      <LogFooter />
    </>
  );
}

export default LogServices;
