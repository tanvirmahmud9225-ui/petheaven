import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[15rem] font-bold'>404</h1>
                <p className='text-3xl'>Sorry, the page not found </p>
                <p className='text-center text-xl'>Sorry, the page you are looking for does not exit.</p>
                <div>
                    <Link href={'/'}><Button size='lg'>Back to home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default notfound;