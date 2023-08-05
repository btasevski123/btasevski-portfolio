import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const INIT_STATE = { username: "", email: "", message: "" };

const Footer = () => {
  const [formData, setFormData] = useState(INIT_STATE);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const localError = {};
    if (username === "") {
      localError.username = true;
    }
    if (email === "") {
      localError.email = true;
    }
    if (message === "") {
      localError.message = true;
    }
    if (username === "" || email === "" || message === "") {
      return setError(localError);
    }

    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Contact me</h2>

      <div className="app__footer-cards">
        <a href="mailto:btasevski123@gmail.com" className="app__footer-card">
          <img src={images.email} alt="email" />
          <p className="p-text">btasevski123@gmail.com</p>
        </a>

        <a href="tel:+389 71 233 606" className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <p className="p-text"> +389 71 233 606</p>
        </a>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          {error.username && <p>*Please enter your name</p>}

          <div>
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          {error.email && <p>*Please enter your email address</p>}

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {error.message && <p>*Please enter your message</p>}

          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
