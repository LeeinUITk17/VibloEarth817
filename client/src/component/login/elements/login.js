import React, { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
      const response = await axios.post('http://localhost:8000/api/login', {
        username: formData.username,
        password: formData.password
      }, {
        withCredentials: true 
      });
      console.log('Login Response:', response.data);
      alert('Login successful!');
      window.location.href = '/home';
    } catch (error) {
      console.error('Error:', error.response.data);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="cart-section mt-150 mb-150">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="single-product-img">
                    <img src="assets/img/products/product-img-5.jpg" alt="one piece"></img>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="coupon-section">
                    <h3><strong>Login</strong></h3>
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
       <p> <button type="submit">Login</button></p>
      </form>
      <p> <a href="/register"> <button >Sign in</button></a></p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default LoginForm;