import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LuLeaf } from 'react-icons/lu';

const PetCareTips = () => {
    return (
        <div className='bg-[#FBF9F5] py-40'>
            <div className='lg:w-7xl w-[94%] mx-auto'>
                <div className='my-10 text-center space-y-4'>
                    <h1 className='text-7xl font-bold '>Pet Care Tips & Advice</h1>
                    <p className='text-gray-500 text-xl'>Expert guidance to help you provide the best for your furry friends.</p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                    <div className=' border border-gray-300 shadow-sm rounded-xl hover:scale-105 transition-transform duration-300 w-full  space-y-3 flex flex-col justify-center overflow-hidden'>
                        <div className='aspect-10/8 relative group'>
                            <Image
                                alt="Course Image"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                src={'https://i.pinimg.com/1200x/e5/88/35/e58835056a629b867b25178d4f71529d.jpg'}

                                fill
                            />
                        </div>
                        <div className='p-5 space-y-3'>
                            <div className='flex items-center gap-3'>
                                <Chip>Nutrition</Chip>
                                <p>5 min read...</p>
                            </div>
                            <h1 className='text-2xl font-bold'>How to Feed Your Puppy Right</h1>
                            <p className=' text-gray-600 text-[1rem]'>Learn the essential nutrition guidelines for your growing puppy, including portion sizes, meal frequency, and healthy food choices.</p>
                            <Button className={'w-full bg-green-700'}>Read More</Button>
                        </div>
                    </div>


                    <div className=' border border-gray-300 shadow-sm rounded-xl hover:scale-105 transition-transform duration-300 w-full  space-y-3 flex flex-col justify-center overflow-hidden'>
                        <div className='aspect-10/8 relative group'>
                            <Image
                                alt="Course Image"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                src={'https://i.pinimg.com/1200x/34/0c/e1/340ce14e93baa56a34f761142406ef38.jpg'}

                                fill
                            />
                        </div>
                        <div className='p-5 space-y-3'>
                            <div className='flex items-center gap-3'>
                                <Chip> Grooming</Chip>
                                <p>7 min read...</p>
                            </div>
                            <h1 className='text-2xl font-bold'>Best Ways to Groom Your Cat</h1>
                            <p className=' text-gray-600 text-[1rem]'>Discover expert grooming techniques to keep your feline friend looking and feeling their best, from brushing to nail care.</p>
                            <Button className={'w-full bg-green-700'}>Read More</Button>
                        </div>
                    </div>


                    <div className=' border border-gray-300 shadow-sm rounded-xl hover:scale-105 transition-transform duration-300 w-full  space-y-3 flex flex-col justify-center overflow-hidden'>
                        <div className='aspect-10/8 relative group'>
                            <Image
                                alt="Course Image"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                src={'https://i.pinimg.com/1200x/ee/30/19/ee30198acc53c6c08b60ab25ee1bae11.jpg'}

                                fill
                            />
                        </div>
                        <div className='p-5 space-y-3'>
                            <div className='flex items-center gap-3'>
                                <Chip>Behavior</Chip>
                                <p>6 min read...</p>
                            </div>
                            <h1 className='text-2xl font-bold'>Understanding Pet Emotions</h1>
                            <p className=' text-gray-600 text-[1rem]'>Decode your pet's body language and emotional signals to build a stronger bond and respond to their needs effectively.</p>
                            <Button className={'w-full bg-green-700'}>Read More</Button>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default PetCareTips;