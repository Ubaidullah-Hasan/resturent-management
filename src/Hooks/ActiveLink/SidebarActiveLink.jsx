import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarActiveLink = ({ children, to, end }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-white" : "text-black"
            }
            end={end}  // Add the end prop
        >
            {children}
        </NavLink>
    );
};

export default SidebarActiveLink;