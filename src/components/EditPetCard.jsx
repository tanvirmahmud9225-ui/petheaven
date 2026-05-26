'use client'
import { authClient } from '@/lib/auth-client';
import { getPetById } from '@/lib/data';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Form } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


import React from 'react';
import { toast } from 'react-toastify';

const EditPetCard = ({ singlePet }) => {

    const { petName, _id, species, breed, age, location, gender, imageURL, updatedAt, statusownerEmail, description, adoptionFee, adoptionFeelocation, vaccinationStatus, healthStatus, status } = singlePet;

    const router = useRouter()
    const { data: session, isPending, error, } = authClient.useSession()
    const userEmail = session?.user?.email

    const userId = session?.user?.id
    const date = new Date();

    const newDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });


    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const petData = Object.fromEntries(formData.entries())



        const { data: jwtToken } = await authClient.token();
        const token = jwtToken?.token



        if (!token) {
            toast.error(error.message)
            return
        }



        const updateData = {
            ...petData,
        }



        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/editpet/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
        })
        const data = await res.json()

        if (!data.modifiedCount > 0) {
            toast.error("Not Changed Yet")
            return
        }
        if (data.modifiedCount > 0) {
            toast.success(`${petName} succefully edited`)
            router.push('/dashboard/myLisiting')
            router.refresh()
        }

        return data;
    }


    return (
        <div className=''>
            <Form
                onSubmit={onSubmit}
                className="p-5 w-full space-y-8 shadow-lg border border-gray-300 rounded-xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                        <TextField defaultValue={petName} name="petName">
                            <Label className='after:content-none text-black'>Petname</Label>
                            <Input className="rounded-2xl  border border-gray-300" />
                            <FieldError />
                        </TextField>
                    </div>


                    {/* Species */}
                    <div>
                        <Select
                            defaultValue={species}
                            name="species"
                            isRequired
                            className="w-full"
                        >
                            <Label className='after:content-none text-black'>Species</Label>
                            <Select.Trigger className="rounded-2xl  border border-gray-300">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Dog" textValue="Dog">
                                        Dog
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Cat" textValue="Cat">
                                        Cat
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Rabbit" textValue="Rabbit">
                                        Rabbit
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Bird" textValue="Bird">
                                        Bird
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Guinea Pig" textValue="Guinea Pig">
                                        Guinea Pig
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Hamster" textValue="Hamster">
                                        Hamster
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Fish" textValue="Fish">
                                        Fish
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>





                    {/* Gender */}
                    <div>
                        <Select
                            name="gender"
                            isRequired
                            className="w-full"
                            placeholder="Select gender"
                            defaultValue={gender}
                        >
                            <Label className='after:content-none text-black'>Gender</Label>
                            <Select.Trigger className="rounded-2xl  border border-gray-300">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Mail" textValue="Mail">
                                        Mail
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Female" textValue="Female">
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Unknown" textValue="Unknown">
                                        Unknown
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>







                    {/* Health Status */}
                    <div>
                        <Select
                            name="healthStatus"
                            isRequired
                            className="w-full"
                            placeholder="Select health status"
                            defaultValue={healthStatus}
                        >
                            <Label className='after:content-none text-black'>Health Status</Label>
                            <Select.Trigger className="rounded-2xl  border border-gray-300">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Good" textValue="Good">
                                        Good
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Excellent" textValue="Excellent">
                                        Excellent
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Fair" textValue="Fair">
                                        Fair
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Nedd Attention" textValue="Nedd Attention">
                                        Nedd Attention
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Under Treatment" textValue="Under Treatment">
                                        Under Treatment
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Breed */}
                    <TextField defaultValue={breed} name="breed" isRequired>
                        <Label className='after:content-none text-black'>Breed</Label>
                        <Input placeholder="Parcian" className="rounded-2xl border border-gray-300" />
                        <FieldError />
                    </TextField>


                    {/* Age */}
                    <TextField defaultValue={age} name="age" isRequired>
                        <Label className='after:content-none text-black'>Age (years)</Label>
                        <Input type='number' placeholder="3" className="rounded-2xl border border-gray-300" />
                        <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField defaultValue={location} name="location" isRequired>
                        <Label className='after:content-none text-black'>Location</Label>
                        <Input placeholder="Dhaka, Mirpur" className="rounded-2xl border border-gray-300" />
                        <FieldError />
                    </TextField>




                    {/* Fee */}
                    <TextField defaultValue={adoptionFee} name="adoptionFee" type="number" isRequired>
                        <Label className='after:content-none text-black'>Adoption Fee)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl border border-gray-300"
                            defaultValue={'0'}
                        />
                        <FieldError />
                    </TextField>



                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField defaultValue={imageURL} name="imageURL text-black" isRequired>
                            <Label className='after:content-none'>Pet Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://cdn.pixabay.com/photo/2023/10/18/10/32/parrot-8323694_1280.jpg"
                                className="rounded-2xl border border-gray-300"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField defaultValue={description} name="description text-black" isRequired>
                            <Label className='after:content-none'>Description</Label>
                            <TextArea
                                placeholder="Please describe your pet’s name, age, breed, gender, personality, health condition, vaccination status, food habits, behavior with people or pets, adoption reason, preferred owner type, location, and contact details."
                                className="rounded-3xl border border-gray-300"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <div className='flex gap-5'>
                    <Link href={'/dashboard/myLisiting'} className='flex justify-center w-full'><Button className={'rounded-3xl w-full'} variant='outline'>Cancle</Button></Link>
                    <Button
                        type="submit"
                        variant="outline"
                        isLoading={''}
                        className=" rounded-3xl w-full bg-cyan-500 text-white border border-gray-300 "
                    >
                        Save Changes
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default EditPetCard;