import React, { useRef, useState } from 'react'
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { Alert } from "react-bootstrap"
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './SignInElement'


const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
              {message && <Alert variant="success">{message}</Alert>}
              <FormLabel id='email' htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required />
              <FormButton disabled={loading} className="w-100" type='submit' > Reset Password</FormButton>
              <div className="w-100 text-center mt-2" color='white'>
                Login <Link to="/signin">Log In</Link>
              </div>
              <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </>
    </Container>

  )
}

export default ForgotPassword