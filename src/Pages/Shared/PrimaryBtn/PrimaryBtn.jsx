import React from 'react';

const PrimaryBtn = ({btnContent}) => {
    return (
        <div className='text-center'>
            <button className='py-5 px-[30px] border-b-[3px] rounded-b-lg border-[#1F2937] text-[#1F2937] text-[20px] font-[500] uppercase hover:shadow-lg'>{btnContent || 'button content'}</button>
        </div>
    );
};

export default PrimaryBtn;