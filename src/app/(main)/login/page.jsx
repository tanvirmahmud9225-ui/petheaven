"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, InputGroup, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";
import { TfiEmail, TfiLock } from "react-icons/tfi";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (data) {
            alert("Successfully Logged In")
        }
        if (error) {
            alert(error.message)
        }
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }




    return (
        <div className="max-w-7xl w-[95vw] md:h-[60vh] lg:h-[70vh] flex flex-col justify-center bg-gray-200 mt-20 mb-30 mx-auto rounded-2xl overflow-hidden">
            <h1 className='md:text-4xl text-2xl font-bold text-center my-5'>Please Log In</h1>
            <div className="py-5 flex justify-center">
                <Form className="flex md:max-w-90 flex-col gap-4" onSubmit={onSubmit}>

                    {/* email */}
                    <TextField
                        className="relative"
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <TfiEmail className="absolute top-4 left-4 text-xl text-gray-600" />
                        <Input className="pl-11 py-3 text-lg" name="email" placeholder="Email or Phone Number" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField className="w-full relative" name="password">
                        <TfiLock className="absolute top-4 left-4 text-xl text-gray-600" />
                        <InputGroup className={'flex justify-between pr-4'}>
                            <InputGroup.Input
                                className="w-full max-w-[280px] pl-11 py-3 text-lg"
                                type={isVisible ? "text" : "password"}
                                name="password"
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




                    <div className="flex flex-col mt-2 gap-2">
                        <Button className="w-full py-5 text-lg" type="submit">
                            <MdCheck className="size-5" />
                            Login
                        </Button>
                        <p className="flex justify-center items-center text-gray-700 font-semibold">Dont’t Have An Account ? <Link className="block ml-2 bold text-xl" href={'/register'}> Register</Link></p>
                        <p className="text-center font-bold text-xl">Or</p>
                        <Button onClick={handleGoogleSignIn} variant="danger-soft" className="py-5.5 w-full hover:bg-gray-300 flex gap-3 items-center ml-2 bold  text-lg text-black">
                            <FaGoogle /> <span>Continue With Google</span></Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;