import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/login/out', {
        withCredentials: true // Ensure cookies are sent with the request
      });
      console.log('Logout Response:', response.data);
      // Optionally handle success (e.g., redirect to login page)
      window.location.href = '/home'; // Redirect to home page after logout
    } catch (error) {
      console.error('Logout Error:', error);
      // Handle error (e.g., show error message)
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <div className="logout">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="logout-box">
              <h2>Are you sure you want to logout?</h2>
              <button onClick={handleLogout} className="boxed-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
