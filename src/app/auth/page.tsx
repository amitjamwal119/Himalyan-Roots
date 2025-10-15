"use client"

import MainLayout from "../main-layout";
import Image from "next/image";
// import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { FieldDescription } from "@/components/ui/field"

import Register from "./authComponents/register";
import SignIn from "./authComponents/signIn";
import { useState } from "react";
// import Login from "./authComponents/login";

export default function Auth() {

    const [authType, setAuthType ] = useState(false);

    return (
        <>
            <MainLayout>
                <section className="auth my-3">
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-6">
                            <Card className="overflow-hidden max-w-5xl min-h-[550px] transition-all duration-300 mx-auto w-full p-0">
                                <CardContent className="grid p-0 md:grid-cols-2">

                                    <div className="flex flex-col p-3 min-h-[550px]">
                                        {/* conditionally toggle form type */}
                                    {authType?   
                                        <div className="auth-component">
                                            <SignIn />
                                            <FieldDescription className="text-center">
                                                Don&apos;t have an account? <span onClick={() => {setAuthType(!authType)}} className="cursor-pointer underline underline-offset-4">Register Now</span>
                                            </FieldDescription>
                                        </div>
                                        : 
                                        <div className="auth-component">
                                            <Register />
                                            <FieldDescription className="text-center">
                                                Already have an account? <span onClick={() => {setAuthType(!authType)}} className="cursor-pointer underline underline-offset-4">Sign in</span>
                                            </FieldDescription>
                                        </div>
                                        }
                                    </div>

                                    {/* <Login /> */}
                                    <div className="bg-muted relative hidden md:block min-h-[550px]">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Image"
                                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            {/* <FieldDescription className="px-6 text-center">
                                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                                and <a href="#">Privacy Policy</a>.
                            </FieldDescription> */}

                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}