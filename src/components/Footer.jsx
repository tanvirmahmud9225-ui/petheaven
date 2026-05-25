
import Link from 'next/link';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail, MdOutlinePets } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-6xl md:text-7xl font-bold text-white">
                            Wanderlust
                        </h1>
                        <p className="mt-4 max-w-xl">
                            Your gateway to extraordinary travel experiences around the world.
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Social Links */}
                        <div className="space-y-3">
                            <div className='flex items-center'>
                                <Link href="/" className="flex items-center gap-2 group">
                                    <div className="p-2 bg-[#68c69b] rounded-xl group-hover:rotate-12 transition-transform">
                                        <MdOutlinePets className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-extrabold text-2xl tracking-tight text-[#68c69b]">
                                        PetHeaven
                                    </span>
                                </Link>
                            </div>
                            <p>Connecting loving families with pets in need. Every adoption saves a life and creates a beautiful bond.</p>
                            <div className='flex gap-5 text-white text-2xl items-center'>
                                <Link href={``}><FaFacebook /></Link>
                                <Link href={``}><BsTwitterX /></Link>
                                <Link href={``}><FaInstagram /></Link>
                                <Link href={``}><FaYoutube /></Link>

                            </div>
                            <p>© 2026 PetNest. All rights reserved.</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white mb-3 tracking-wide font-bold">Platform</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-white cursor-pointer"><Link href={'/all-pets'}>All Pets</Link></li>
                                <li className="hover:text-white cursor-pointer"><Link href={'/dashboard/addpet'}>Add a Pet</Link></li>
                                <li className="hover:text-white cursor-pointer"><Link href={'/dashboard/myRequests'}>My Request</Link></li>
                                <li className="hover:text-white cursor-pointer"><Link href={'/dashboard/myLisiting'}>My Listing</Link></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white mb-3 tracking-wide font-bold">Company</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-white cursor-pointer"><Link href={''}>About Us</Link></li>
                                <li className="hover:text-white cursor-pointer">
                                    <Link href={''}>Success Stories</Link>
                                </li>
                                <li className="hover:text-white cursor-pointer">
                                    <Link href={''}>Pet Care Tips</Link>
                                </li>
                                <li className="hover:text-white cursor-pointer">
                                    <Link href={''}>Why Adopt?</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white mb-3 tracking-wide font-bold">CONTACT US</h3>
                            <ul className="space-y-2">
                                <li className='flex gap-2 items-center'> <IoLocationSharp /> 123 Street, Animal City, AC 12345</li>
                                <li className='flex gap-2 items-center'><MdEmail /> info@petheaven.com</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </footer>
        </div>
    );
};

export default Footer;