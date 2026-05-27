
import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import PetRequestShowCard from "./PetRequestShowCard";
import DeleteCard from "./DeleteCard";
import { getPetRequest, getPetsMyListingByPetId } from "@/lib/data";

const AllPetsCardMyLisiting = async ({ pet }) => {
    const { petName, _id, species, breed, age, location, gender, imageURL, status } = pet;

    const requestPet = await getPetsMyListingByPetId(pet?._id);

    const statu = requestPet?.status






    return (
        <div
            className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-20/15">
                <Image
                    alt="Course Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={pet?.imageURL || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"}

                    fill
                />
                <div className="absolute top-4 right-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {pet?.status}
                    </Chip>
                </div>
                <div className="absolute top-4 left-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {pet?.species}
                    </Chip>
                </div>
            </div>
            <div className="p-5 flex flex-col grow space-y-2.5">
                <div className="space-y-2">
                    <Link href={``}>
                        <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                            {pet?.petName}
                        </h3>
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <p>{pet?.breed}</p>
                    <GoDotFill className="mt-1" />
                    <p>{pet?.age} years old</p>
                    <GoDotFill className="mt-1" />
                    <p>{pet?.gender}</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-md text-slate-500 font-bold">
                        <IoLocationSharp />
                        <p>{pet?.location}</p>
                    </div>
                    <div>
                        {
                            statu == "pending" && <p className="text-amber-700 font-bold">Requested</p>
                        }
                    </div>
                </div>

                <div className="pt-2 mt-auto border-t border-slate-100 space-y-3">
                    {/* <span className="text-2xl font-black text-[#68c69b]">${adoptionFee}</span> */}
                    <div className="flex gap-4 items-center">
                        <Link href={`/all-pets/${pet?._id}`} className="w-full h-full flex items-center justify-center  group">
                            <Button className={'w-full border-gray-300'} variant="outline">
                                View Details
                            </Button>
                        </Link>
                        <Link href={`/editpet/${pet?._id}`} className="w-full h-full items-center justify-center group">
                            <Button

                                className="font-bold w-full border-gray-300 rounded-2xl px-6"
                            >
                                Edit
                            </Button></Link>
                    </div>
                    <div className="flex gap-4 items-center">

                        <PetRequestShowCard id={pet?._id} status={pet?.status} />
                        <DeleteCard _id={pet?._id} petName={pet?.petName} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPetsCardMyLisiting;