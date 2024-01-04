import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {

    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-[#d70c26] lg:text-blue-500" : "text-white "
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;