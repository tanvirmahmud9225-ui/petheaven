import AllPetsCardMyLisiting from '@/components/AllPetsCardMyLisiting';
import { auth } from '@/lib/auth';
import { getPetsMyListing } from '@/lib/data';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyListingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user?.id

    const pets = await getPetsMyListing(userId);



    const available = pets.filter(pet => pet.status == "avaibale")
    const approve = pets.filter(pet => pet.status == "adopted")




    return (
        <div className=''>
            <div className='mb-10 space-y-5'>
                <h1 className='text-6xl font-bold '>My Listings</h1>
                <p>Manage your pet lisitings and adoption requests.</p>
            </div>
            {
                pets.length === 0 ?
                    < div className='border border-gray-300 flex flex-col justify-center items-center p-10 gap-5 rounded-xl shadow-xl '>
                        <h1 className='text-4xl font-bold'>No Listing Yet</h1>
                        <p className='text-xl text-gray-500'>Start by adding a pet that needs a new home.</p>
                        <Link href={'/dashboard/addPet'}><Button>+ Add Your First Pet</Button></Link>
                    </div>
                    :
                    <div>
                        <div className='mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='px-15 py-10 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{pets.length}</h1>
                                    <p className='text-2xl font-semibold'>Total Listing</p>

                                </div>
                            </div>
                            <div className='px-15 py-10 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{available.length}</h1>
                                    <p className='text-2xl font-semibold'>Available</p>

                                </div>
                            </div>
                            <div className='px-15 py-10 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{approve.length}</h1>
                                    <p className='text-2xl font-semibold'>Adopted</p>

                                </div>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-1 lg:grid-cols-3  mx-auto gap-5'>
                            {
                                pets.map(pet => <AllPetsCardMyLisiting key={pet._id} pet={pet} />)
                            }
                        </div>
                    </div>
            }
        </div >
    );
};

export default MyListingPage;