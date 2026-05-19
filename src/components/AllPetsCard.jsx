import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";

const AllPetsCard = ({ pet }) => {
    const { petName, _id, species, breed, age, location, gender, imageURL, updatedAt, statusownerEmail, description, adoptionFee, adoptionFeelocation, vaccinationStatus, healthStatus, status } = pet;


    return (
        <div
            className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-16/18">
                <Image
                    alt="Course Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={imageURL || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"}

                    fill
                />
                <div className="absolute top-4 right-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {status}
                    </Chip>
                </div>
                <div className="absolute top-4 left-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {species}
                    </Chip>
                </div>
            </div>
            <div className="p-5 flex flex-col grow space-y-2.5">
                <div className="space-y-2">
                    <Link href={``}>
                        <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                            {petName}
                        </h3>
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <p>{breed}</p>
                    <GoDotFill className="mt-1" />
                    <p>{age} years old</p>
                    <GoDotFill className="mt-1" />
                    <p>{gender}</p>
                </div>

                <div className="flex items-center gap-2 text-md text-slate-500 font-bold">
                    <IoLocationSharp />
                    <p>{location}</p>
                </div>

                <div className="pt-2 mt-auto border-t border-slate-100 flex gap-8 items-center">
                    {/* <span className="text-2xl font-black text-[#68c69b]">${adoptionFee}</span> */}
                    <Link href={`/all-pets/${_id}`} className="w-full">
                        <Button className={'w-full'} variant="outline">
                            View Details
                        </Button>
                    </Link>
                    <Link href={''} className="w-full">
                        <Button
                            // variant="flat"

                            className="font-bold w-full bg-[#68c69b] rounded-2xl px-6"
                        >
                            Adopt Now
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default AllPetsCard;