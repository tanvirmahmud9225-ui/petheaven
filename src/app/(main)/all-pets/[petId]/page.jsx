import { getPetById } from '@/lib/data';
import React from 'react';
import { Button, Chip, DateField } from '@heroui/react';
import { BookOpen, Clock, BarChart, Users } from 'lucide-react';
import Image from 'next/image';
import { LuPawPrint } from 'react-icons/lu';
import { FaRegCalendarMinus, FaUser } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { TbVaccine } from 'react-icons/tb';
import AdoptionCard from '@/components/AdoptionCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { BiLeftArrow } from 'react-icons/bi';

const PetDetailsPage = async ({ params }) => {
    const { petId } = await params;


    const { token } = await auth?.api.getToken({
        headers: await headers()
    })

    const singlePet = await getPetById(petId, token);
    const { petName, _id, species, breed, age, location, gender, imageURL, updatedAt, statusownerEmail, description, adoptionFee, adoptionFeelocation, vaccinationStatus, healthStatus, status } = singlePet;

    console.log(status);


    const featuredItems = [
        { icon: LuPawPrint, name: "Species", label: species || '12h 30m' },
        { icon: LuPawPrint, name: "Breed", label: breed || 'Beginner' },
        { icon: FaRegCalendarMinus, name: "Age", label: `${age || 24} Years Old` },
        { icon: FaUser, name: "Gender", label: `${gender || 0} ` },
        { icon: FaMapLocationDot, name: "Location", label: `${location || 0} ` },
        { icon: BsCurrencyDollar, name: "Adoption Fee", label: `$${adoptionFee || 0} ` },
        { icon: MdOutlineHealthAndSafety, name: "Health Status", label: `${healthStatus || 0} ` },
        { icon: TbVaccine, name: "Vaccinated", label: `${vaccinationStatus || 0} ` },
    ];




    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <Link href={'/all-pets'}><Button className={'rounded-lg border-gray-300'} variant='outline'><BiLeftArrow /> Back To All Pets</Button></Link>
            <div className="grid grid-cols-1 lg:grid-cols-7 mt-3 gap-8 items-start">
                <div className="lg:col-span-4 space-y-8">
                    <div className="relative group overflow-hidden rounded-[1rem] shadow-2xl aspect-15/12">
                        <Image
                            src={imageURL}
                            alt="Course Thumbnail"
                            fill
                            className="object-cover transform transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6">
                            <Chip
                                color="primary"
                                variant="solid"
                                className="font-bold shadow-xl text-lg px-3 py-1"
                            >
                                {status}
                            </Chip>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className='flex items-center justify-between'>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                {petName}
                            </h1>
                            <p className='text-2xl font-bold'><span className='text-gray-500'>Adoption Fee:</span> ${adoptionFee}</p>
                        </div>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                        {featuredItems.map((item, i) => (
                            <div key={i}
                                className="flex items-center justify-between gap-3 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200 text-slate-900 font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className='flex items-center gap-3'>
                                    <item.icon className="w-5 h-5 text-[#68c69b]" />
                                    <span className='text-gray-500'> {item.name}</span> :
                                </div>
                                <div>
                                    <span> {item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

                <div className="lg:col-span-3">
                    <AdoptionCard singlePet={singlePet} />
                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;