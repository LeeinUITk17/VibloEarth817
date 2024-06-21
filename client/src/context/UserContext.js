import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://localhost:8000/api/auth', {
                    withCredentials: true  
                });
                console.log('Response:', response.data);
                setUser(response.data); 
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null); 
            } finally {
                setIsLoading(false); 
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}> 
            {children}
        </UserContext.Provider>
    );
};