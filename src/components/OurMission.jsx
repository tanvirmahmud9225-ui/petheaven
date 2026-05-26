import { Heart } from 'lucide-react';
import React from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import { PiMedalLight } from 'react-icons/pi';
import { SlLocationPin } from 'react-icons/sl';

const OurMission = () => {
    return (
        <div className='lg:w-7xl w-[94%] mx-auto py-25'>
            <div className='text-center space-y-4'>
                <h1 className='text-7xl font-bold'>Our Mission</h1>
                <p>At PetHaven, our mission is to connect kind hearts with loving paws. We rescue, rehabilitate, and <br /> rehome animals in need, while educating the community about responsible pet wonership. Every animal <br /> deserves a second chance at happiness and we're here to make that happen.</p>
            </div>
            <div className='my-5 grid col-end-1 md:col-end-2 lg:grid-cols-4 gap-5'>
                <div className='border border-gray-200 shadow-lg p-5 rounded-2xl hover:scale-105 transition-transform duration-300 space-y-1.5'>
                    <div className='flex w-10 h-10 mx-auto justify-center items-center p-2 rounded-full bg-gray-200'>
                        <Heart className='text-green-800' />
                    </div>
                    <h1 className='text-center font-extrabold text-green-600 text-2xl'>2,500+</h1>
                    <p className='text-gray-500 text-center'>Animals Rescued</p>
                </div>



                <div className='border border-gray-200 shadow-lg p-5 rounded-2xl hover:scale-105 transition-transform duration-300 space-y-1.5'>
                    <div className='flex w-10 h-10 mx-auto justify-center items-center p-2 rounded-full bg-gray-200'>
                        <FaUserGroup className='text-red-500' />
                    </div>
                    <h1 className='text-center font-extrabold text-red-400 text-2xl'>1,800+</h1>
                    <p className='text-red-300 text-center'>Happy Adoptions</p>
                </div>


                <div className='border border-gray-200 shadow-lg p-5 rounded-2xl hover:scale-105 transition-transform duration-300 space-y-1.5'>
                    <div className='flex w-10 h-10 mx-auto justify-center items-center p-2 rounded-full bg-gray-200'>
                        <PiMedalLight className='text-green-800 size-20' />
                    </div>
                    <h1 className='text-center font-extrabold text-green-600 text-2xl'>20+</h1>
                    <p className='text-gray-500 text-center'>Years Of Service</p>
                </div>


                <div className='border border-gray-200 shadow-lg p-5 rounded-2xl hover:scale-105 transition-transform duration-300 space-y-1.5'>
                    <div className='flex w-10 h-10 mx-auto justify-center items-center p-2 rounded-full bg-gray-200'>
                        <SlLocationPin className='text-green-800 size-15' />
                    </div>
                    <h1 className='text-center font-extrabold text-green-600 text-2xl'>5</h1>
                    <p className='text-gray-500 text-center'>Partner Shelters</p>
                </div>



            </div>
        </div>
    );
};

export default OurMission;