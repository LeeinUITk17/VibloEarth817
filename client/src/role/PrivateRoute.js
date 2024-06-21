
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Preloader } from './../component/child.component'; 

const PrivateRoute = () => {
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

    return isAuthenticated===true ? <Outlet /> : <Navigate to="/login" />; 
};

export default PrivateRoute;
