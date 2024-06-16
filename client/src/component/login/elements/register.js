import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
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
      const response = await axios.post('http://localhost:8000/api/login/add', {
        username: formData.username,
        password: formData.password,
        email: formData.email
      }, {
        withCredentials: true // Ensure cookies are sent with the request
      });
      console.log('Response:', response.data);
      // Handle successful registration (e.g., redirect or show success message)
      alert('Registration successful!');
      // Optionally, redirect to another page
      // history.push('/dashboard');
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle error (e.g., show error message)
      alert('Registration failed. Please try again.');
    }
  };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Username:</label>
    //       <input type="text" name="username" value={formData.username} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input type="password" name="password" value={formData.password} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label>Email:</label>
    //       <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    //     </div>
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
       <div className="cart-section mt-150 mb-150">
       <div className="container">
           <div className="row">
               <div className="col-md-5">
                   <div className="single-product-img">
                       <img src="assets/img/products/product-img-1.jpg" alt="one piece"></img>
                   </div>
               </div>
               <div className="col-lg-4">
                   <div className="coupon-section">
                       <h3><strong>Sign in</strong></h3>
                       <form onSubmit={handleSubmit}>
        <div className='coupon-form-wrap'>
        <p>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </p>
        </div>
        <div className='coupon-form-wrap'>
         <p>
         <label>Password:</label>
         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
         </p>
        </div>
        <div className='coupon-form-wrap'>
          <p>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </p>
        </div>
        <button type="submit">Register</button>
      </form>
                   </div>
               </div>
           </div>
       </div>
   </div>
  );
};

export default RegisterForm;
