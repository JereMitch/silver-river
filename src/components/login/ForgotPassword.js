import React, { useRef, useState } from "react";
import { Form, Button as Buttons, Card as btCard, Alert } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for futher instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)

    }


  return (
    <>
    <div
    className='d-flex align-items-center justify-content-center'
    >
      <div
      className='w-100' style={{maxWidth: '400px'}}
      >
      <btCard>
        <btCard.Body>
          <h2 className="text-center mb-5">Password Reset</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Buttons disabled={loading} className="w-100 mt-4" type="submit">
              Reset Password
            </Buttons>
          </Form>
              <div className="w-100 text-center mt-2">
                <Link to='/login'>Login</Link>
              </div>  
        </btCard.Body>
      </btCard>
      </div>
    </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  );
}

export default ForgotPassword;
