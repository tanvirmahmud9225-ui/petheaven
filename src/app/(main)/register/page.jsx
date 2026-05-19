"use client";
import { authClient } from "@/lib/auth-client";
// import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";
import { TfiEmail, TfiLock } from "react-icons/tfi";

const RegisterPage = () => {

    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);


        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.image,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message)
        }
        if (data) {
            alert("Successfull Sing Up")
            router.push('/')
        }
    }




    return (
        <div className="max-w-7xl w-[95vw] md:h-[60vh] lg:h-[70vh] flex flex-col justify-center bg-gray-200 mt-20 mb-30 mx-auto rounded-2xl overflow-hidden">
            <h1 className='text-4xl font-bold text-center my-5'>Please Sign Up</h1>
            <div className="py-5 flex justify-center">
                <Form className="flex md:w-150 sm:w-120 w-90  flex-col gap-4" onSubmit={onSubmit}>
                    {/* name */}
                    <TextField
                        className="relative"
                        type="text"
                        isRequired

                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-lg text-gray-800 mb-1 after:content-none">Full Name</Label>
                        <BiUser className="absolute top-13 left-4 text-xl text-gray-600" />
                        <Input className={` pl-13 py-3 text-lg`} name="name" placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        className="relative"
                        isRequired

                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-lg text-gray-800 mb-1 after:content-none">Email Address</Label>
                        <TfiEmail className="absolute top-13 left-4 text-xl text-gray-600" />
                        <Input className="pl-13 py-3 text-lg" name="email" placeholder="Email or Phone Number" />
                        <FieldError />
                    </TextField>


                    <TextField
                        className="relative"
                        isRequired

                        type="text"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-lg text-gray-800 mb-1 after:content-none">Photo URL</Label>
                        <HiOutlinePhoto className="absolute top-13 left-4 text-xl text-gray-600" />
                        <Input name="image" className="pl-13 py-3 text-lg" placeholder="Photo URL" />
                        <FieldError />
                    </TextField>




                    {/* Password */}
                    <TextField className="w-full relative" name="password">
                        <Label className="text-lg text-gray-800 mb-1 after:content-none">Password</Label>
                        <TfiLock className="absolute top-13 left-4 text-xl text-gray-600" />
                        <InputGroup className={'flex justify-between pr-4'}>
                            <InputGroup.Input
                                className="w-full max-w-[280px] pl-13 py-3 text-lg"
                                type={isVisible ? "text" : "password"}
                                placeholder="Password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <BsEye className="size-5" /> : <BsEyeSlash className="size-5" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>




                    <div className="flex flex-wrap justify-center mt-2 gap-2">
                        <Button className="w-50 py-5 text-lg" type="submit">
                            <MdCheck className="size-5" />
                            Register Account
                        </Button>
                        <Button className="w-50 py-5 text-lg border border-gray-300" type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;