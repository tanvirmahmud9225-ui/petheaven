"use client";
import { authClient } from "@/lib/auth-client";
// import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsCheckCircleFill, BsEye, BsEyeSlash, BsXCircleFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";
import { TfiEmail, TfiLock } from "react-icons/tfi";

const RegisterPage = () => {

    // const [isVisible, setIsVisiVle] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());



        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.image,
            callbackURL: "/",
        });

        if (data) {
            router.push('/')
        }
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }





    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

    const rules = [
        { label: "At least 6 characters", ok: password.length >= 6 },
        { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
        { label: "One lowercase letter", ok: /[a-z]/.test(password) },
    ];

    const allRulesPass = rules.every(r => r.ok);
    const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;


    return (
        <div className="max-w-7xl w-[95vw] md:h-[90vh] lg:h-full flex flex-col justify-center bg-gray-200 mt-20 mb-30 mx-auto rounded-2xl overflow-hidden">
            <div>
                <h1 className='text-4xl font-bold text-center my-5'>Create your account</h1>
                <p className="text-center">Start your adoption journey today</p>
                <div className="flex flex-col items-center mt-2 gap-2">
                    <Button onClick={handleGoogleSignIn} variant="danger-soft" className="py-5.5 max-w-100 px-10  hover:bg-gray-300 flex gap-3 items-center ml-2 bold  text-lg text-black">
                        <FaGoogle /> <span>Continue With Google</span></Button>
                </div>
                <p className="text-center mt-8">or register with email </p>
            </div>
            <div className="py-5 flex justify-center">
                <Form className="flex md:w-150 sm:w-120 w-90  flex-col gap-4" onSubmit={onSubmit}>
                    {/* name */}
                    <TextField
                        className="relative "
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
                        <Input className={` pl-13 py-3 text-lg border border-gray-300`} name="name" placeholder="Enter Your Name" />
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
                    {/* <TextField className="w-full relative" name="password">
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
                    </TextField> */}


                    {/* ───── Password Field ───── */}
                    <TextField className="w-full relative" name="password">
                        <Label className="text-lg text-gray-800 mb-1 after:content-none">Password</Label>
                        <TfiLock className="absolute top-13 left-4 text-xl text-gray-600" />
                        <InputGroup className={'flex justify-between pr-4'}>
                            <InputGroup.Input
                                className="w-full max-w-[280px] pl-13 py-3 text-lg"
                                type={isVisible ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                        {/* Password rules — শুধু লেখা শুরু করলে দেখাবে */}
                        {password.length > 0 && (
                            <ul className="mt-2 space-y-1">
                                {rules.map((rule, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        {rule.ok
                                            ? <BsCheckCircleFill className="text-green-500 size-4" />
                                            : <BsXCircleFill className="text-red-400 size-4" />
                                        }
                                        <span className={rule.ok ? "text-green-600" : "text-red-400"}>
                                            {rule.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </TextField>

                    {/* ───── Confirm Password Field ───── */}
                    <TextField className="w-full relative" name="confirmPassword">
                        <Label className="text-lg text-gray-800 mb-1 after:content-none">Confirm Password</Label>
                        <TfiLock className="absolute top-13 left-4 text-xl text-gray-600" />
                        <InputGroup className={'flex justify-between pr-4'}>
                            <InputGroup.Input
                                className="w-full max-w-[280px] pl-13 py-3 text-lg"
                                type={isVisibleConfirm ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisibleConfirm ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisibleConfirm(!isVisibleConfirm)}
                                >
                                    {isVisibleConfirm ? <BsEye className="size-5" /> : <BsEyeSlash className="size-5" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>

                        {/* Match message — শুধু লেখা শুরু করলে দেখাবে */}
                        {confirmPassword.length > 0 && (
                            <p className={`mt-2 text-sm flex items-center gap-2 ${passwordsMatch ? "text-green-600" : "text-red-400"}`}>
                                {passwordsMatch
                                    ? <><BsCheckCircleFill className="size-4" /> Passwords match</>
                                    : <><BsXCircleFill className="size-4" /> Passwords do not match</>
                                }
                            </p>
                        )}
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