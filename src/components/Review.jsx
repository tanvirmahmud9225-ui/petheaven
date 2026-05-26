import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LuLeaf } from 'react-icons/lu';

const Review = () => {
    return (
        <div className='bg-[#FBF9F5] py-40'>
            <div className='lg:w-7xl w-[94%] mx-auto'>
                <div className='my-10 text-center space-y-4'>
                    <h1 className='text-7xl font-bold '>Happy Tails</h1>
                    <p className='text-gray-500 text-xl'>Stories from our wonderful adopters</p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
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

export default Review;