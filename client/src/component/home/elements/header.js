import { useContext } from 'react';
import React from 'react';
import axios from 'axios';
import Hero from './hero';
import { SearchArea } from '../../child.component';
import { UserContext } from '../../../context/UserContext';
const Header = () => {
    const { user } = useContext(UserContext);
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
    <>
    <div className="top-header-area" id="sticker">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
                <div className="main-menu-wrap">
                    <div className="site-logo">
                        <a href="/home">
                           <img src="assets/img/logo.png" alt=""></img>
                        </a>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li className="current-list-item"><a href="/home">Home</a></li>
                            <li><a href="/news">News</a> </li>
                            <li><a href="/contact">Contact</a></li>
                            {user ? (
                                <li>
                                <div className="header-icons">
                                  <a href="/profile">
                                    <img src="assets/img/account.png" alt="" />
                                  </a>
                                  <ul className="sub-menu">
                                    <li>
                                      <a href="/profile">Your Account</a>
                                    </li>
                                    <li className="header-icons">
                                      <img
                                        src="assets/img/logout.png"
                                        onClick={handleLogout}
                                        className="boxed-btn"
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                  
                                </div>
                              </li>                       
                            ) : (
                                <li>
                                <div className="header-icons">
                                  <a className="login" href="/login">
                                    <img src="assets/img/login.png" alt="" />
                                  </a>{" "}
                                  <a className="mobile-hide search-bar-icon" href="#">
                                    <i className="fas fa-search"></i>
                                  </a>
                                </div>
                              </li>
                            )}
                        </ul>
                    </nav>
                    <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                    <div className="mobile-menu"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<SearchArea/>
<Hero/>
    </>
   )
}
export default Header;