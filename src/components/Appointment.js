import React from "react";
import { useRef } from "react";
// FOR READING VALUES GIVEN, USE 'useRef'. TO ALTER WHAT IS OUTPUT ON THE SCREEN USE 'useState'.
import Card from "./Card";
import "../components/styles/Appointment.css";
import { MyButton } from "./Button";

const Appointment = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newAppt = {
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
      description: enteredDescription,
    };
    props.onAddAppointment(newAppt);
    console.log(newAppt);
  }

  return (
    <div className="appointment-div">
      <div className="appt-div">
      <h1 className="appointment-header-text font">
        We understand that life can weigh us down
      </h1>
      <p className="appointment-text font">
        Let us know how we can best help you, and we will get back to you as soon as we can
      </p>
        </div> 
      <div className="card-div" id='scrolly-boi'>
        <Card>
          <form id='appt-section' className="form font" onSubmit={submitHandler}>
            <div className="control">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                required
                id="title"
                ref={nameInputRef}
                placeholder="Name"
              />
            </div>
            <div className="control">
              <label htmlFor="image">Phone Number</label>
              <input
                type="phone"
                required
                id="image"
                ref={phoneInputRef}
                placeholder="111-222-3333"
              />
            </div>
            <div className="control">
              <label htmlFor="address">Email</label>
              <input
                type="email"
                required
                id="address"
                ref={emailInputRef}
                placeholder="example@email.com"
              />
            </div>
            <div className="control">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                required
                ref={descriptionInputRef}
                placeholder="Brief Description..."
              ></textarea>
            </div>
            <div className="actions">
              <MyButton buttonStyle="btn--outline">Submit</MyButton>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Appointment;
