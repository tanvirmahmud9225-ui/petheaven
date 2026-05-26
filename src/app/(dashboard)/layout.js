"use client";
import DasNavBar from '@/components/DasNavBar';
import { authClient, signOut } from '@/lib/auth-client';
import { Button, ListBox, ListBoxItem, Tab, Tabs } from '@heroui/react';
import { Heart, PawPrint } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';
import { MdOutlinePets, MdOutlineStickyNote2 } from 'react-icons/md';




const layout = ({ children }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু ওপেন/ক্লোজ স্টেট
    const router = useRouter()


    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/"); // redirect to login page
                },
            },
        });
    }


    const MenuContent = () => (
        <div className="w-full flex flex-col justify-between h-full">
            <div className="w-full p-6">
                <p className="text-xl font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">
                    Menu
                </p>

                <ListBox
                    aria-label="User Menu"
                    variant="solid"
                    selectedKeys={new Set([pathname])}
                    className="p-0"
                    itemClasses={{
                        base: "px-4 h-12 rounded-xl text-slate-600 font-medium data-[selected=true]:bg-rose-500 data-[selected=true]:text-white data-[hover=true]:bg-slate-50 data-[hover=true]:text-slate-700 transition-all mb-1.5 last:mb-0",
                        title: "text-sm flex items-center gap-2 w-full"
                    }}
                >
                    <ListBoxItem
                        key="/"
                        textValue="My Requests"
                        as={Link}
                        href="/"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-full h-full flex items-center gap-2">
                            <MdOutlineStickyNote2 /> Home
                        </div>
                    </ListBoxItem>


                    <ListBoxItem
                        key="/dashboard/myRequests"
                        textValue="My Requests"
                        as={Link}
                        href="/dashboard/myRequests"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-full h-full flex items-center gap-2">
                            <MdOutlineStickyNote2 /> My Requests
                        </div>
                    </ListBoxItem>

                    <ListBoxItem
                        key="/dashboard/addPet"
                        textValue="Add Pet"
                        as={Link}
                        href="/dashboard/addPet"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-full h-full flex items-center gap-2">
                            <FaPlus /> Add Pet
                        </div>
                    </ListBoxItem>



                    <ListBoxItem
                        key="/dashboard/myLisiting"
                        textValue="My Listings"
                        as={Link}
                        href="/dashboard/myLisiting"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-full h-full flex items-center gap-2">
                            <Heart /> My Listings
                        </div>
                    </ListBoxItem>


                </ListBox>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-300">
                <Button
                    onClick={() => handleSignOut()}
                    variant='ghost' className="w-full flex items-center gap-2 px-4 py-3 text-xl font-semibold text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                    🚪 Logout
                </Button>
            </div>
        </div>
    );

    return (
        <div>
            {/* <DasNavBar /> */}
            <div className=''>
                {/* <div className="drawer lg:drawer-open">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {children}
                        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                            Open drawer
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">

                            <li><Link href={'/dashboard/myRequests'}>My Requests</Link></li>
                            <li><Link href={'/dashboard/addPet'}>My Pet</Link></li>
                            <li><Link href={'/dashboard/myLisiting'}>My Lisitings</Link></li>

                        </ul>
                    </div>
                </div> */}
                <div className="min-h-screen bg-slate-50/50 flex flex-col relative overflow-x-hidden">

                    {/* ১. টপ বার (যেখানে মোবাইল স্ক্রিনে আইকন থাকবে) */}
                    <div className="bg-white border-b border-slate-100 md:hidden p-4 flex items-center justify-between z-40">
                        {/* হ্যামবার্গার মেনু আইকন */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
                        >
                            <CiMenuBurger className='size-8' />
                        </button>
                        <div className="text-sm font-bold text-slate-700">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="p-2 bg-[#68c69b] rounded-xl group-hover:rotate-12 transition-transform">
                                    <MdOutlinePets className="w-6 h-6 text-white" />
                                </div>
                                <span className="font-extrabold text-2xl tracking-tight text-[#68c69b]">
                                    PetHeaven
                                </span>
                            </Link>
                            <div>
                                <h1 className='text-2xl text-center font-bold'>Dashboard</h1>
                            </div>
                        </div>
                        <div className="w-8"></div> {/* এলাইনমেন্ট ব্যালেন্স করার জন্য ফাঁকা স্পেস */}
                    </div>

                    {/* আপনার মেইন নেভিগেশন বার (ডেস্কটপের জন্য) */}
                    <div className="hidden md:block">
                        <DasNavBar />
                    </div>

                    {/* ২. মোবাইল ড্রয়ার সাইডবার (শুধুমাত্র মোবাইল স্ক্রিনে কাজ করবে) */}
                    <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                        {/* ব্যাকড্রপ ওভারলে (বাইরে ক্লিক করলে বন্ধ হবে) */}
                        <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                        {/* ড্রয়ার কন্টেন্ট */}
                        <div className={`absolute top-0 left-0 bottom-0 w-72 bg-white p-6 shadow-2xl transition-transform duration-300 flex flex-col justify-between ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                            <div className="flex items-end justify-end mb-6">

                                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg text-3xl">✕</button>
                            </div>
                            <MenuContent />
                        </div>
                    </div>

                    {/* ৩. ড্যাশবোর্ড মেইন গ্রিড লেআউট */}
                    <div className="grid grid-cols-1 md:grid-cols-11 flex-1">

                        {/* ডেস্কটপ সাইডবার (মোবাইলে hidden থাকবে, মাঝারি ও বড় স্ক্রিনে col-span-2 হবে) */}
                        <div className="hidden md:flex col-span-2 bg-white border-r border-slate-300 flex-col justify-between">
                            <MenuContent />
                        </div>

                        {/* ডানপাশের মেইন কন্টেন্ট এলাকা (মোবাইলে পুরো ১ কলাম এবং ডেস্কটপে ৫ কলাম নিবে) */}
                        <div className="col-span-1 md:col-span-9 p-4 sm:p-8 md:p-10 w-11/12 mx-auto">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );


};

export default layout;