import React from 'react';
import UseScreenWidth from '../../Hooks/UseScreenWidth';
import { FaStar } from 'react-icons/fa6';

const Rating = ({ value, max = 5, onRate, emptyColor = "#A1A1A1", filledColor = "black" }) => {
    const { screenWidth } = UseScreenWidth();
    const numbers = Array.from({ length: max }, (_, index) => index + 1);
    
    return (
        <div className='flex gap-2'>
            {numbers.map((item, index) => (
                <span key={index}>
                    {index < value ?
                        <FaStar color={filledColor} size={screenWidth < 600 ? 30 : 50} />
                        :
                        <FaStar color={emptyColor} size={screenWidth < 600 ? 30 : 50} />
                    }
                </span>
            ))}
        </div>
    );
};

export default Rating;