'use client';

import { Button, Input, Calendar, DateField, DatePicker, Label } from '@heroui/react';

import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';


const AdoptionCard = ({ singlePet }) => {
    const { petName, _id, species, breed, age, location, gender, imageURL, updatedAt, statusownerEmail, description, adoptionFee, adoptionFeelocation, vaccinationStatus, healthStatus, status } = singlePet;



    const { data: session, isPending } = authClient.useSession()
    const user = isPending ? <p>Loading........</p> : session?.user;

    return (
        <div>

            <div className="grow flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-white p-5 rounded-[1rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        <div className=" space-y-2 relative">
                            <p className="text-xl font-semibold">Request to adopt {petName}</p>
                            <p>Fill out this form and the owner will review your request.</p>
                        </div>

                        <form
                            className="space-y-4"
                        >
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-bold text-slate-700 ml-1"
                                >
                                    Pet Name
                                </label>
                                <Input
                                    id="name"
                                    readOnly={true}
                                    defaultValue={petName}
                                    placeholder="Enter your name"
                                    name="name"
                                    startContent={<User className="w-5 h-5 text-slate-400" />}
                                    className={`cursor-not-allowed border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 bg-white w-full rounded-2xl`}
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-bold text-slate-700 ml-1"
                                >
                                    Your Name
                                </label>
                                <Input
                                    id="name"
                                    readOnly={true}
                                    defaultValue={user?.name}
                                    placeholder="Enter your name"
                                    name="name"
                                    startContent={<User className="w-5 h-5 text-slate-400" />}
                                    className="border-2 cursor-not-allowed border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 bg-white w-full rounded-2xl"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold text-slate-700 ml-1"
                                >
                                    Your Email
                                </label>
                                <Input
                                    id="email"
                                    readOnly={true}
                                    defaultValue={user?.email}
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    startContent={<Mail className="w-5 h-5 text-slate-400" />}
                                    className="border-2 cursor-not-allowed border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 bg-white w-full rounded-2xl"
                                />
                            </div>



                            <DatePicker className="w-full text-sm font-bold text-slate-700 ml-1" name="date">
                                <Label>Date</Label>
                                <DateField.Group fullWidth>
                                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                    <DateField.Suffix>
                                        <DatePicker.Trigger>
                                            <DatePicker.TriggerIndicator />
                                        </DatePicker.Trigger>
                                    </DateField.Suffix>
                                </DateField.Group>
                                <DatePicker.Popover>
                                    <Calendar aria-label="Event date">
                                        <Calendar.Header>
                                            <Calendar.YearPickerTrigger>
                                                <Calendar.YearPickerTriggerHeading />
                                                <Calendar.YearPickerTriggerIndicator />
                                            </Calendar.YearPickerTrigger>
                                            <Calendar.NavButton slot="previous" />
                                            <Calendar.NavButton slot="next" />
                                        </Calendar.Header>
                                        <Calendar.Grid>
                                            <Calendar.GridHeader>
                                                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                            </Calendar.GridHeader>
                                            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                        </Calendar.Grid>
                                        <Calendar.YearPickerGrid>
                                            <Calendar.YearPickerGridBody>
                                                {({ year }) => <Calendar.YearPickerCell year={year} />}
                                            </Calendar.YearPickerGridBody>
                                        </Calendar.YearPickerGrid>
                                    </Calendar>
                                </DatePicker.Popover>
                            </DatePicker>

                            <Button
                                color="primary"
                                type="submit"

                                className="w-full h-12 text-lg bg-[#68c69b] font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
                            >
                                Adopt {petName} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdoptionCard;