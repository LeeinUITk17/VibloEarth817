
import React, { useContext, useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Preloader } from '../component/child.component'; 

const AuthLimit = () => {
    const { user, isLoading } = useContext(UserContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            console.log('User:', user);
            setIsAuthenticated(true);
        }
    }, [user, isLoading]);

    if (isLoading ) {
        return <Preloader />; 
    }

    return isAuthenticated===true ? window.location.href = '/home' : window.location.href = '/login';
};

export default AuthLimit;
