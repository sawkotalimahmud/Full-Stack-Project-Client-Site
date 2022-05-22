import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const admin = false

    if(!admin){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default AdminRoute;