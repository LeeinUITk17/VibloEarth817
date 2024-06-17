import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // const token = Cookies.get('jwt');
                // console.log('Token:', token);
                // if (token) {
                    const response = await axios.get('http://localhost:8000/api/auth', {
                        withCredentials: true  // Ensure cookies are sent with the request
                    });
                    console.log('Response:', response.data);
                    setUser(response.data);
                
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
