import { Spinner } from '@heroui/react';
import React from 'react';
import { IoMdPaw } from 'react-icons/io';

const loading = () => {
    return (
        <div className='flex justify-center mt-20 h-screen'>
            <div className="flex flex-col items-center gap-2 relative">
                <Spinner className='size-20 text-green-600' />
                <IoMdPaw className='absolute size-8 flex items-center top-5 justify-center' />
                <span className="text-xl text-muted">Featiching Pets....</span>
            </div>
        </div>
    );
};

export default loading;