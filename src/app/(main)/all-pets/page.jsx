import AllPetsCard from '@/components/AllPetsCard';
import { getAllPets } from '@/lib/data';
import React from 'react';

const AllPetsPage = async () => {

    const pets = await getAllPets();





    return (
        <div >
            <h1 className='text-7xl font-bold text-center my-20'>This is All pets page </h1>
            <div className='grid grid-cols-3 w-7xl mx-auto gap-5'>
                {
                    pets.map(pet => <AllPetsCard key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default AllPetsPage;