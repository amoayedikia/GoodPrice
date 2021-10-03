import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { useSelector, useDispatch } from 'react-redux'

//import Footer from '../../components/Layout/Admin/Footer'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'

//import ImagePreview from '../../components/ImagePreview'

//import { register } from '../../actions/user-action'
//import { USER_REGISTER_RESET } from '../../constants/user-constants'

const Register = ({ history }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userProfile, setUserProfile] = useState('')
  const [country, setCountry] = useState('')

  const [previewImage, setImagePreview] = useState(
    '/assets/images/admin/preview_placeholder.png'
  )

  const [errorMessage, setErrorMessage] = useState('')

  const userDetails = useSelector((state) => state.userDetails)
  const { registering, error, registered } = userDetails

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    e.preventDefault()
    if (
      firstName === '' ||
      birthDate === '' ||
      contact === '' ||
      lastName === '' ||
      password === '' ||
      confirmPassword === '' ||
      country === ''
    ) {
      setErrorMessage('Please enter all the fields')
      window.scrollTo(0, 0)
    } else if (!re.test(email)) {
      setErrorMessage('Please provide a valid email address')
      window.scrollTo(0, 0)
    } else if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match')
      window.scrollTo(0, 0)
    } else if (password.length < 6) {
      setErrorMessage('Password should not be less than 6 characters')
      window.scrollTo(0, 0)
    } else if (userProfile === '') {
      setErrorMessage('Please select a profile image')
      window.scrollTo(0, 0)
    } else {
      setErrorMessage('')
      const formData = new FormData()
      //Creating Form Data to be sent
      formData.append('first_name', firstName)
      formData.append('last_name', lastName)
      formData.append('email', email)
      formData.append('contact', contact)
      formData.append('password', password)
      formData.append('profile_image', userProfile)
      formData.append('date_of_birth', birthDate)
      formData.append('country', country)
      //Dispatching the Create Team Action
      // dispatch(register(formData))
      window.scrollTo(0, 0)
      resetForm()
    }
  }

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setContact('')
    setBirthDate('')
    setPassword('')
    setConfirmPassword('')
    setCountry('')
    setUserProfile('')
    setImagePreview('/assets/images/admin/preview_placeholder.png')
  }

  const imageHandler = (e) => {
    setUserProfile(e.target.files[0])
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  /*useEffect(() => {
    dispatch({
      type: USER_REGISTER_RESET,
    })
  }, [])*/

  return (
    <>
      <Container style={{ minHeight: '82vh' }}>
        <Row>
          <Col md={6} sm={12} xs={12} className='offset-md-3'>
            <h1 className='my-4'>Welcome to GoodPrice</h1>
            <h3 className='my-4'>Register</h3>

            <Form className='mb-5'>
              {errorMessage ? (
                <Message variant='danger'>{errorMessage}</Message>
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : null}
              {registered ? (
                <Message variant='success'>
                  You are registered successfully. A verification link has been
                  sent to your registered email address.{' '}
                  <a href='/login'>Log in</a> to the website after clicking on
                  the link in the email address{' '}
                </Message>
              ) : null}
              <Form.Group controlId='playerFirstName' className='my-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='playerLastName' className='my-3'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='playerEmail' className='my-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='xyz@arcanaleague.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='playerPassword' className='my-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter your Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='playerConfirmPassword' className='my-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='userBirthDate' className='my-3'>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type='date'
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='userCountry' className='my-3'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='playerContact' className='my-3'>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type='number'
                  minLength='10'
                  maxLength='10'
                  placeholder='Enter your Contact Number'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>
              {/*<Form.Group>
                <Form.Label>Profile Image</Form.Label>
                <ImagePreview
                  path={previewImage}
                  alternate='logo-image'
                  title='Team Logo'
                />
                <Form.File
                  id='playerProfileUpload'
                  onChange={imageHandler}
                  accept='.jpg, .jpeg, .png'
                />
              </Form.Group>*/}
              <Form.Group>{registering ? <Loader /> : null}</Form.Group>
              <Form.Group className='mt-5'>
                <Button variant='primary' onClick={handleSubmit}>
                  Register
                </Button>
                &nbsp; &nbsp; &nbsp;
                <LinkContainer to='/login'>
                  <Button variant='danger'>Back</Button>
                </LinkContainer>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      {/*<Footer />*/}
    </>
  )
}

export default Register
