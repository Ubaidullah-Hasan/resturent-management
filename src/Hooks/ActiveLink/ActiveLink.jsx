import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({children, to}) => {
    console.log(to)

    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active" : ""
                    // : isPending
                    //     ? "pending"
                    //     : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;