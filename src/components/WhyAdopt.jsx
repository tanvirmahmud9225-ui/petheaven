import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { LuLeaf } from 'react-icons/lu';

const WhyAdopt = () => {
    return (
        <div className='bg-[#f3f6f0] py-40'>

            <div className='w-7xl mx-auto'>
                <h1 className='text-7xl text-center my-15 font-bold'>Why Adopt ?</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                    <div className=' border border-gray-300 hover:shadow-sm rounded-xl hover:-translate-y-2 transition-transform duration-300 w-full p-5 flex flex-col justify-center items-center space-y-3'>
                        <div className='w-20 bg-gray-100 h-20 rounded-full p-2 flex items-center justify-center'>
                            <FaRegHeart className='w-10 h-10 text-green-600' />
                        </div>
                        <h1 className='text-3xl font-bold '>Save Lives</h1>
                        <p className='text-center text-gray-600'>Every adoption saves a life and opens space for another rescue. You're a hero in their story.</p>
                    </div>


                    <div className=' border border-gray-300 hover:shadow-sm rounded-xl hover:-translate-y-2 transition-transform duration-300 w-full p-5 flex flex-col justify-center items-center space-y-3'>
                        <div className='w-20 bg-gray-100 h-20 rounded-full p-2 flex items-center justify-center'>
                            <AiTwotoneHome className='w-10 h-10 text-green-600' />
                        </div>
                        <h1 className='text-3xl font-bold '>Find Companionship</h1>
                        <p className='text-center text-gray-600'>Pets bring unconditional love, joy and loyal companionship to your every single day.</p>
                    </div>


                    <div className=' border border-gray-300 hover:shadow-sm rounded-xl hover:-translate-y-2 transition-transform duration-300 w-full p-5 flex flex-col justify-center items-center space-y-3'>
                        <div className='w-20 bg-gray-100 h-20 rounded-full p-2 flex items-center justify-center'>
                            <LuLeaf className='w-10 h-10 text-green-600' />
                        </div>
                        <h1 className='text-3xl font-bold '>Support Shelters</h1>
                        <p className='text-center text-gray-600'>Your adoption fees help shelters continue their mission of rescuing and caring for animals in need.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyAdopt;