import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState({ isLoggedIn: false });

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/auth/check', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
           credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login Status:', data.isLoggedIn); 
          setUserStatus({ isLoggedIn: data.isLoggedIn });
        } else {
          throw new Error('Failed to check login status');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setUserStatus({ isLoggedIn: false });
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (userStatus.isLoggedIn) {
      console.log('Redirecting to /home'); 
      navigate('/home');
      window.location.reload();
    }
  }, [userStatus.isLoggedIn, navigate]);

//   if (userStatus.isLoading) {
//     return <Preloader />;
//   }

  return !userStatus.isLoggedIn ? <>{children}</> : null;
};

export default AuthCheck;
