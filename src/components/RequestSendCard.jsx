
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const RequestSendCard = ({ petName }) => {
    return (
        <div className='flex flex-col gap-3 items-center rounded-2xl px-5 py-8 border border-gray-300 shadow-lg'>
            <IoCheckmarkCircleOutline className="size-15 text-green-500" />
            <h1 className='text-lg font-bold'>Request Submitted!</h1>
            <p className='text-gray-500 text-center'>Your adoption request for <span className='text-gray-600'>{petName}</span> has been sent to the owner. You can track its status in My Requests.</p>
            <Link href='/dashboard/myRequests'>
                <Button variant='outline'>View My Requests</Button>
            </Link>
        </div>
    );
};

export default RequestSendCard; <h1>Request Sent</h1>