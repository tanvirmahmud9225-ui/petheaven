import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LuLeaf } from 'react-icons/lu';

const PetCareTips = () => {
    return (
        <div className='bg-[#FBF9F5] py-40'>
            <div className='w-7xl mx-auto'>
                <div className='my-10 text-center space-y-4'>
                    <h1 className='text-7xl font-bold '>Pet Care Tips & Advice</h1>
                    <p className='text-gray-500 text-xl'>Expert guidance to help you provide the best for your furry friends <br /> personality and endless love to give.</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                    <div className=' border border-gray-300 shadow-sm rounded-xl hover:scale-105 transition-transform duration-300 w-full p-5 space-y-3 flex flex-col justify-center'>
                        <div className='flex items-center gap-2'>
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                        </div>
                        <p className=' text-gray-600 text-[1rem]'>"Adopting Luna was the best decision we ever made. She brought so much joy into our lives!"</p>
                        <h1 className='text-2xl font-bold '>- Sarah M.</h1>
                    </div>



                    <div className=' border border-gray-300 shadow-sm rounded-xl hover:scale-105 transition-transform duration-300 w-full p-5 space-y-3 flex flex-col justify-center'>
                        <div className='flex items-center gap-2'>
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                        </div>
                        <p className=' text-gray-600 text-[1rem]'>"Adopting Luna was the best decision we ever made. She brought so much joy into our lives!"</p>
                        <h1 className='text-2xl font-bold '>- Sarah M.</h1>
                    </div>



                    <div className=' border border-gray-300 shadow-sm rounded-xl hover:scale-105 transition-transform duration-300 w-full p-5 space-y-3 flex flex-col justify-center'>
                        <div className='flex items-center gap-2'>
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                            <FaHeart className='w-7 h-7 text-red-400' />
                        </div>
                        <p className=' text-gray-600 text-[1rem]'>"Adopting Luna was the best decision we ever made. She brought so much joy into our lives!"</p>
                        <h1 className='text-2xl font-bold '>- Sarah M.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCareTips;