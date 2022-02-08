import React, { useRef, useState } from "react";
import { Form, Button as Buttons, Card as btCard, Alert } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function SignUp() {
  const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value) 
            history.replace('/login')
        } catch {
            setError('Failed to create and account')
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
          <h2 className="text-center mb-5">Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Buttons disabled={loading} className="w-100 mt-4" type="submit">
              Sign Up
            </Buttons>
          </Form>
        </btCard.Body>
      </btCard>
      </div>
    </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </>
  );
}

export default SignUp;
