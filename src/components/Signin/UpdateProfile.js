import React, { useRef, useState } from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './SignInElement'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { Alert } from "react-bootstrap"

const UpdateProfile = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <Container>
      <>
        <FormWrap>
          <Icon to="/">Drone</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Update Profile</FormH1>
              {error && <Alert variant="danger">{error}</Alert>}
              <FormLabel id='email' htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required defaultValue={currentUser.email} />
              <FormLabel id='password' htmlFor='for'>Password</FormLabel>
              <FormInput type='password' ref={passwordRef} required placeholder="Leave blank to keep the same" />
              <FormLabel id='password-confirm' htmlFor='for'>Password Confirmation</FormLabel>
              <FormInput type='password' ref={passwordConfirmRef} required placeholder="Leave blank to keep the same"
              />
              <FormButton disabled={loading} className="w-100" type='submit' > Update</FormButton>
              <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </>
    </Container>

  )
}

export default UpdateProfile