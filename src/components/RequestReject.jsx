'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';

const RequestReject = ({ id, status, token }) => {




    const router = useRouter()

    const handleReject = async () => {




        const updateData = {
            status,
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets2/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateData)

        })
        const data = await res.json()

        if (data.modifiedCount > 0) {
            toast.success("Request Rejected")
            router.refresh()
        }

        return data


    }



    return (
        <div>
            <Button onClick={handleReject} className="w-full" slot="close" variant="secondary">
                <TiDelete className='size-5.5' /> Reject
            </Button>
        </div>
    );
};

export default RequestReject;