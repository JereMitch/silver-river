import React, { useRef, useState } from "react";
import { Form, Button as Buttons, Card as BtCard, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.replace("/lh");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
    <div
    className='d-flex align-items-center justify-content-center'
    >
      <div
      className='w-100' style={{maxWidth: '400px'}}
      >
      <BtCard>
        <BtCard.Body>
          <h2 className="text-center mb-5">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Buttons disabled={loading} className="w-100 mt-4" type="submit">
              Log In
            </Buttons>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </BtCard.Body>
      </BtCard>
      </div>
    </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}


