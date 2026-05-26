'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

const RequestReject = ({ id, status }) => {

    const router = useRouter()

    const handleReject = async () => {

        const { data: jwtToken } = await authClient.token();
        const token = jwtToken?.token


        const updateData = {
            status,
        }

        const res = await fetch(`http://localhost:8000/allpets2/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                token: `Beared ${token}`
            },
            body: JSON.stringify(updateData)

        })
        const data = await res.json()


        console.log(data);

        if (data.modifiedCount > 0) {
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