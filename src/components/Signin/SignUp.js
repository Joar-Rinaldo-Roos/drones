import React, { useRef, useState } from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './SignInElement'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { Alert } from "react-bootstrap"
const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      console.log(emailRef.current.value)
      console.log(passwordRef.current.value)
      console.log(passwordConfirmRef.current.value)

      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
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
              <FormH1>Create your account</FormH1>
              {error && <Alert variant="danger">{error}</Alert>}
              <FormLabel id='email' htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required />
              <FormLabel id='password' htmlFor='for'>Password</FormLabel>
              <FormInput type='password' ref={passwordRef} required />
              <FormLabel id='password-confirm' htmlFor='for'>Password Confirmation</FormLabel>
              <FormInput type='password' ref={passwordConfirmRef} required />
              <FormButton disabled={loading} className="w-100" type='submit' > Register</FormButton>
              <div className="w-100 text-center mt-2" color='white'>
                Already have an account? <Link to="/signin">Log In</Link>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </>
    </Container>
  )
}

export default SignUp