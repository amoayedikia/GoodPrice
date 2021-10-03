import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import "./UserAvatar.scss";

const UserAvatar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <BsPersonFill className="avatar" onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas__menu">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Edit Profile</Nav.Link>
              <Nav.Link eventKey="link-1">Change Password</Nav.Link>
              <Nav.Link eventKey="link-2">
                <Link to="/login" className="login">
                  Sign in
                </Link>
              </Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default UserAvatar;
