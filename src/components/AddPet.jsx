'use client'
import { authClient } from '@/lib/auth-client';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Form } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const AddPet = ({ token }) => {
    const router = useRouter();

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


        const createData = {
            ...petData,
            status: "avaibale",
            createdAt: newDate,
            userId: userId,
        }


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(createData)
        })
        const data = await res.json()


        if (data.acknowledged) {
            toast.success("the pet is successfully add your listing")
            router.push('/dashboard/myLisiting')
        }

        return data;
    }




    return (
        <div>
            <Form
                onSubmit={onSubmit}
                className="p-5 w-full space-y-8 shadow-lg border border-gray-300 rounded-xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                        <TextField name="petName" isRequired>
                            <Label className='after:content-none'>Petname</Label>
                            <Input placeholder="Max" className="rounded-2xl  border border-gray-300" />
                            <FieldError />
                        </TextField>
                    </div>


                    {/* Species */}
                    <div>
                        <Select
                            name="species"
                            isRequired
                            className="w-full"
                            placeholder="Select species"
                        >
                            <Label className='after:content-none'>Species</Label>
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
                        >
                            <Label className='after:content-none'>Gender</Label>
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




                    {/* Vaccination Status */}
                    <div>
                        <Select
                            name="vaccinationStatus"
                            isRequired
                            className="w-full"
                            placeholder="Select status"
                        >
                            <Label className='after:content-none'>Vaccination Status</Label>
                            <Select.Trigger className="rounded-2xl  border border-gray-300">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                                        Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="No Vaccinated" textValue="No Vaccinated">
                                        No Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated">
                                        Partially Vaccinated
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
                        >
                            <Label className='after:content-none'>Health Status</Label>
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
                    <TextField name="breed" isRequired>
                        <Label className='after:content-none'>Breed</Label>
                        <Input placeholder="Parcian" className="rounded-2xl border border-gray-300" />
                        <FieldError />
                    </TextField>


                    {/* Age */}
                    <TextField name="age" isRequired>
                        <Label className='after:content-none'>Age (years)</Label>
                        <Input type='number' placeholder="3" className="rounded-2xl border border-gray-300" />
                        <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField name="location" isRequired>
                        <Label className='after:content-none'>Location</Label>
                        <Input placeholder="Dhaka, Mirpur" className="rounded-2xl border border-gray-300" />
                        <FieldError />
                    </TextField>




                    {/* Fee */}
                    <TextField name="adoptionFee" type="number" isRequired>
                        <Label className='after:content-none'>Adoption Fee)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl border border-gray-300"
                            defaultValue={'0'}
                        />
                        <FieldError />
                    </TextField>



                    {/* Owner Email */}
                    <div className="md:col-span-2">
                        <TextField name="ownerEmail" isRequired>
                            <Label className='after:content-none'>Owner Email</Label>
                            <Input
                                type="email"
                                readOnly={true}
                                value={userEmail || ""}
                                className="rounded-2xl border border-gray-300 cursor-not-allowed"
                            />
                            <FieldError />
                        </TextField>
                    </div>



                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageURL" isRequired>
                            <Label className='after:content-none'>Pet Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl border border-gray-300"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
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

export default AddPet;