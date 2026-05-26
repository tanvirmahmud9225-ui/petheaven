"use client";
import { Button } from "@heroui/react";
import { ArrowRight, Star, Play, Heart } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";

const Hero = () => {

    return (
        <section className="relative overflow-hidden  from-blue-50 via-slate-50 to-slate-50 ">

            <Swiper
                navigation
                pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="h-[90vh] bg-[url('../../public/banner-1.jpg')] bg-cover bg-center  px-4 sm:px-6 lg:px-8 relative z-10">

                        <div className="h-full flex flex-col justify-center items-center text-white space-y-5">
                            <h1 className="text-8xl text-green-300 text-center font-bold mb-9">Find Your Perfect Pet <br /> Companion  Today</h1>
                            <p className="text-2xl">Adopt, love and give a forever home to a furry friend</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    href="/courses"
                                    color="primary"
                                    size="lg"
                                    className="h-14 text-xl flex items-center bg-[#68c69b] px-10 font-bold rounded-full shadow-2xl shadow-blue-600/30 group"
                                >
                                    <span>Adopt Now</span> <ArrowRight className="size-5 mt-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="bordered"
                                    size="lg"
                                    className="h-14 border px-8 text-xl font-bold rounded-full group"
                                >
                                    <Heart className="mr-2 size-5 fill-slate-900 group-hover:scale-120 transition-transform" /> Donate Now
                                </Button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] bg-[url('../../public/banner-3.jpg')] bg-cover bg-center  px-4 sm:px-6 lg:px-8 relative z-10">

                        <div className="h-full flex flex-col justify-center items-center text-white space-y-5">
                            <h1 className="text-8xl text-green-300 text-center font-bold mb-9">You Can Help
                                When They Need Us</h1>
                            <p className="text-2xl">Adopt, love and give a forever home to a furry friend</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button

                                    color="primary"
                                    size="lg"
                                    className="h-14 text-xl flex items-center bg-[#68c69b] px-10 font-bold rounded-full shadow-2xl shadow-blue-600/30 group"
                                >
                                    <Link href="/all-pets">Adopt Now</Link> <ArrowRight className="size-5 mt-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="bordered"
                                    size="lg"
                                    className="h-14 border px-8 text-xl font-bold rounded-full group"
                                >
                                    <Heart className="mr-2 size-5 fill-slate-900 group-hover:scale-120 transition-transform" /> Donate Now
                                </Button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>


            </Swiper>


        </section>
    );
};

export default Hero;