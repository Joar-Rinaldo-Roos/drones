import React, { useRef, useState } from 'react'

import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './SignInElement'

import { Alert } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"


const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const login = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return (
    <Container>
      <>
        <FormWrap>
          <Icon to="/">Drone</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              {error && <Alert variant="danger">{error}</Alert>}
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required />
              <FormLabel htmlFor='for'>password</FormLabel>
              <FormInput type='password' ref={passwordRef} required />
              <FormButton disabled={loading} className="w-100" type='submit'> Continue</FormButton>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password" color="black">Forgot Password?</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </FormContent>
        </FormWrap>
      </>
    </Container>
  )
}

export default SignIn