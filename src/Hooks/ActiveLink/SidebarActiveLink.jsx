import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarActiveLink = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-white" : "text-black"
            }
        >
            {children}
        </NavLink>
    );
};

export default SidebarActiveLink;