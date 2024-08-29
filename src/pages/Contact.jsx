import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Contact.css";
import ContactInfo from "../components/ContactInfo";
// import { Form } from "react-bootstrap";
import Reviews from "../components/Reviews";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    guestsNumber: "",
    date: "",
    comments: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    guestsNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    setFormErrors({ ...formErrors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let valid = true;
    const errors = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      guestsNumber: "",
    };

    if (formData.firstName.trim().length < 4) {
      errors.firstName = "First Name must be at least 4 characters long";
      valid = false;
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
      errors.firstName =
        "First Name should not contain numbers or special characters";
      valid = false;
    }

    if (formData.lastName.trim().length < 4) {
      errors.lastName = "Last Name must be at least 4 characters long";
      valid = false;
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
      errors.lastName =
        "Last Name should not contain numbers or special characters";
      valid = false;
    }

    if (formData.emailAddress.trim() === "") {
      errors.emailAddress = "Email Address is required";
      valid = false;
    } else if (!validateEmail(formData.emailAddress)) {
      errors.emailAddress = "Please enter a valid email address";
      valid = false;
    }

    if (formData.phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone Number is required";
      valid = false;
    } else if (!validatePhone(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
      valid = false;
    }

    if (formData.guestsNumber.trim() === "") {
      errors.guestsNumber = "Number of Guests is required";
      valid = false;
    } else if (!validateNumber(formData.guestsNumber)) {
      errors.guestsNumber = "Please enter a valid number";
      valid = false;
    }

    if (!valid) {
      setFormErrors(errors);
      return;
    }

    // Log form data to console
    console.log(formData);

    alert("Form submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      guestsNumber: "",
      date: "",
      comments: "",
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\+?[0-9+]+$/;
    return re.test(phone);
  };

  const validateNumber = (number) => {
    const re = /^[0-9]+$/;
    return re.test(number);
  };

  return (
    <div className="contact-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Contact Us</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="first-name">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    isInvalid={formErrors.firstName !== ""}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.firstName}
                  </Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="last-name">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    isInvalid={formErrors.lastName !== ""}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.lastName}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="email-address">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="emailAddress"
                    onChange={handleChange}
                    value={formData.emailAddress}
                    isInvalid={formErrors.emailAddress !== ""}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.emailAddress}
                  </Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    id="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    isInvalid={formErrors.phoneNumber !== ""}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.phoneNumber}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="guests-number">
                    Number Of Guests
                  </Form.Label>
                  <Form.Control
                    type="number"
                    id="guestsNumber"
                    onChange={handleChange}
                    value={formData.guestsNumber}
                    isInvalid={formErrors.guestsNumber !== ""}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.guestsNumber}
                  </Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="date">Date</Form.Label>
                  <Form.Control
                    type="date"
                    id="date"
                    onChange={handleChange}
                    value={formData.date}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="comments">Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  id="comments"
                  onChange={handleChange}
                  value={formData.comments}
                  required
                />
              </Form.Group>

              <Button type="submit" className="btn btn-success btn-lg">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
};

export default Contact;
