import EditPetCard from '@/components/EditPetCard';
import { auth } from '@/lib/auth';
import { getPetById } from '@/lib/data';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Form } from '@heroui/react';
import { headers } from 'next/headers';

import React from 'react';

const PetEditPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const singlePet = await getPetById(id, token)






    return (
        <div className='w-6xl mx-auto'>
            <div className='mb-10'>
                <h1 className='text-4xl font-bold'>Update {singlePet.petName} listing</h1>
            </div>

            <EditPetCard singlePet={singlePet} />
        </div>
    );
};

export default PetEditPage;