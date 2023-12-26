import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({children, to}) => {

    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-[#d70c26] lg:text-blue-500" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;