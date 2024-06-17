import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/home/index';
import Blogpage from './component/blog/index';
import Detailpage from './component/blog/detail';
import Postpage from './component/blog/post';
import Contactpage from './component/contact/index';
import Loginpage from './component/login/index';
import RegisterForm from './component/login/form';

import { UserProvider } from './context/UserContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/news" element={<Blogpage />} />
          <Route path="/news/detail" element={<Detailpage />} />
          <Route path="/news/post" element={<Postpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
