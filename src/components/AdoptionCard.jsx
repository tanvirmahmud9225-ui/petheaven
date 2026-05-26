'use client';

import { Button, Input, Calendar, DateField, DatePicker, Label, TextArea, TextField, FieldError } from '@heroui/react';

import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useState } from 'react';
import RequestSendCard from './RequestSendCard';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';


const AdoptionCard = ({ singlePet }) => {
    const [isSubmited, setIsSubmited] = useState(false)



    const { petName, _id, species, status, breed, age, location, gender, imageURL, updatedAt, userId } = singlePet;

    console.log(status);
    const { data: session, isPending } = authClient.useSession()
    const user = isPending ? <p>Loading........</p> : session?.user;

    const loggedUserId = session?.user?.id





    const handleAdoptRequest = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const adoptData = Object.fromEntries(formData.entries())


        const { data: jwtToken } = await authClient.token();
        const token = jwtToken?.token

        if (!token) {
            toast.error("authentication faild. Enrollment not add.")
            return
        }


        const updateData = {
            ...adoptData,
            userId: user?.id,
            petImage: imageURL,
            status: "pending",
            petId: _id,
        }


        try {
            const res = await fetch(`http://localhost:8000/petrequest/${_id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updateData)
            })

            const data = await res.json();

            console.log(data);

            if (res.status === 400) {
                toast.error(` ${petName} ${data.message}`)
                return
            }
            toast.success("Request send successfully")
            setIsSubmited(true)
        }
        catch {
            toast.error("This is problem")
        }

    }



    return (
        <div>

            {
                status == "adopted" ?
                    <div className='mt-10'>
                        <div className='flex flex-col gap-3 items-center rounded-2xl px-5 py-8 border border-gray-300 shadow-lg'>
                            <FaCheckCircle className="size-15 text-green-500" />
                            <h1 className='text-lg font-bold'>{petName} hasbeen adopted</h1>
                            <p className='text-gray-500 text-center'>This pet has found their forever home. Browse other available pets below.</p>
                            <Link href={`/all-pets`} className=''><Button className={'border-gray-300'} variant='outline' size='lg'>Browse Available Pets</Button></Link>
                        </div>

                    </div>
                    :
                    userId == loggedUserId ?
                        <div>
                            <div className='flex flex-col gap-3 items-center rounded-2xl px-5 py-8 border border-gray-300 shadow-lg'>
                                <BsExclamationTriangle className="size-15 text-green-500" />
                                <h1 className='text-lg font-bold'>This is your listing</h1>
                                <p className='text-gray-500 text-center'>You cannot request adoption for your own pet.</p>
                                <Link href={`/editpet/${_id}`} className=''><Button className={'border-gray-300'} variant='outline' size='lg'>Eidt Your Pet</Button></Link>
                            </div>
                        </div>
                        :
                        isSubmited ? <RequestSendCard petName={petName} /> :
                            <div className="grow flex flex-col gap-10 items-center justify-center">
                                <div className="w-full max-w-md">
                                    <div className="bg-white p-5 rounded-[1rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                                        <div className=" space-y-2 relative">
                                            <p className="text-xl font-semibold">Request to adopt {petName}</p>
                                            <p>Fill out this form and the owner will review your request.</p>
                                        </div>

                                        <form
                                            onSubmit={handleAdoptRequest}
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
                                                    name="petName"
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
                                                    name="user"
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



                                            <DatePicker isRequired className="w-full text-sm font-bold text-slate-700 ml-1" name="pickupdate">
                                                <Label className='text-black after:content-none'>Date</Label>
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

                                            <div className="flex flex-col gap-2">
                                                <TextField
                                                    validate={(value) => {
                                                        if (value.length < 10) {
                                                            return "must be at least 10 characters";
                                                        }
                                                        return null;
                                                    }}
                                                    className={''}
                                                    isRequired
                                                    name='description'>
                                                    <Label htmlFor="textarea-rows-3" className='text-black after:content-none'>Message to Owner</Label>
                                                    <TextArea


                                                        aria-label="Short feedback"
                                                        id="textarea-rows-3"
                                                        placeholder={`Tell the owner why you'd be a great match for ${petName}`}
                                                        rows={3}
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

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


                            </div >
            }
        </div >
    );
};

export default AdoptionCard;