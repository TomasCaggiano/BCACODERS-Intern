import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>
        I would love to hear from you! Whether you have a question, a job opportunity, or just want to connect, feel free to reach out to me through any of the following methods.
      </p>
      <h2>Email</h2>
      <p><a href="mailto:tomascaggiano03@gmail.com">tomascaggiano03@gmail.com</a></p>
      <h2>Phone</h2>
      <p>+54 9 11 2386-4222</p>
      <h2>LinkedIn</h2>
      <p><a href="https://www.linkedin.com/in/tomascaggiano">LinkedIn Profile</a></p>
      <h2>GitHub</h2>
      <p><a href="https://github.com/tomascaggiano">GitHub Profile</a></p>
    </div>
  );
}

export default Contact;

