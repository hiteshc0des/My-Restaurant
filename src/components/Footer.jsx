import React, { useState } from "react";
import "../components/Footer.css";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email address to subscribe.");
      return;
    }

    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_tag">
                <h2>Location</h2>
                <p>
                  #213 Street,
                  <br />
                  XYZ City{" "}
                </p>
                <div className="footer_tag">
                  <h2>Follow Us</h2>
                  <i className="fa-brands fa-facebook-f"></i>&ensp;
                  <i className="fa-brands fa-twitter"></i>&ensp;
                  <i className="fa-brands fa-instagram"></i>&ensp;
                  <i className="fa-brands fa-linkedin-in"></i>&ensp;
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_tag">
                <h2>Quick Links</h2>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Gallery</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_tag">
                <h2>Contact</h2>
                <p>+94 12 3456 789</p>
                <p>+94 25 5568456</p>
                <p>johndeo123@gmail.com</p>
                <p>foodshop123@gmail.com</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_tag">
                <h2>Our Service</h2>
                <p>Fast Delivery</p>
                <p>Easy Payments</p>
                <p>24 x 7 Service</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <NewsletterForm />
            </div>
          </div>
          <p className="p-3 m-0 text-center">Copyright @ made by....</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
