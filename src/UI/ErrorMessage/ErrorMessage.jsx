import React from 'react';
import { TbAlertTriangleFilled } from 'react-icons/tb';

const ErrorMessage = () => {
    return (
        <div className='p-10 flex items-center justify-center flex-col border border-gray-300 rounded-2xl'>
            <TbAlertTriangleFilled size={120} className='text-yellow-500' />
            <p className='text-xs sm:text-[14px]'>You hasn't selected Products</p>
            <h1 className='text-xl sm:text-3xl font-bold'>Please Select one</h1>
        </div>
    );
};

export default ErrorMessage;