import React, { useState } from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'
import { BsPersonFill } from 'react-icons/bs'
import './UserAvatar.scss'

const UserAvatar = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <BsPersonFill className='avatar' onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='offcanvas__menu'>
            <Nav defaultActiveKey='/' className='flex-column'>
              <Nav.Link href='/profile'>Profile</Nav.Link>
              <Nav.Link eventKey='link-1'>Change Password</Nav.Link>
              <Nav.Link eventKey='link-2'>Log out</Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default UserAvatar
