import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, authLoading } = useContext(AuthContext);
    const location = useLocation();

    if (authLoading) {
        return (
            <div className='h-screen flex items-center justify-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }

    if(user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from:location?.pathname}} replace />

    
};

export default PrivateRoute;