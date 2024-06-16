import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/contact', {
        Name: formData.name,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message
      }, {
        withCredentials: true // If you need to send cookies with the request
      });
      console.log('Response:', response.data);
      // Handle successful response (e.g., display a success message or clear the form)
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '',  subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      // Handle error response (e.g., display an error message)
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="contact-form">
      <form method="Post" id="fruitkha-contact" onSubmit={handleSubmit}>
        <p>
          <input type="text" placeholder="Name" name="name" id="name" value={formData.name} onChange={handleChange} required />
          <input type="email" placeholder="Email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </p>
        <p>
          <input type="text" placeholder="Subject" name="subject" id="subject" value={formData.subject} onChange={handleChange} required />
        </p>
        <p>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        </p>
        <button type="submit" className="boxed-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
