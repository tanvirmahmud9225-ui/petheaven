'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { body } from 'motion/react-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const RequestApprove = ({ id, status }) => {


    const router = useRouter()
    const handleApprove = async () => {


        const { data: jwtToken } = await authClient.token();
        const token = jwtToken?.token


        const updateData = {
            status,
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                token: `Beared ${token}`
            },
            body: JSON.stringify(updateData)

        })
        const data = await res.json()
        if (data.modifiedCount > 0) {
            router.refresh()
        }
        return data


    }



    return (
        <div>
            <Button onClick={handleApprove} className="w-full" slot="close" variant="secondary">
                <BsCheckCircleFill /> Approve
            </Button>
        </div>
    );
};

export default RequestApprove;