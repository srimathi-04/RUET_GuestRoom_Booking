import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const ContactUs = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    emailjs
      .sendForm(
        'service_a28cl3d',
        'template_nqn96yk',
        form.current,
        'Oeo9lD2JJqpD5oUCE'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert('Email Successfully Sent.');
          window.location.href = '/';
        },
        (error) => {
          setFormStatus('Send');
          console.log(error.text);
          window.alert('Oops!, Something went wrong. ');
        }
      );
    e.target.reset();
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-3"> Contact Us</h1>
      <form ref={form} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="user_name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="user_email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="text">
            Subject
          </label>
          <input
            className="form-control"
            type="text"
            id="text"
            name="subject"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="6"
            cols="8"
            name="message"
            required
          />
        </div>
        <button className="btn btn-primary subbtn " type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
