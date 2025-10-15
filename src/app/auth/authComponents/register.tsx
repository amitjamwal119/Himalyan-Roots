"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { registerSchema, RegisterSchemaType } from "@/schemas/registerSchema";


export default function Register() {

    const form = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: RegisterSchemaType) => {
        console.log("Submitted Data:", data);

        try {
            const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL as string}/userDetails`,
                data
            );
            console.log(response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Create your account</CardTitle>
                    <CardDescription className="text-center">
                        Register Now!
                    </CardDescription>
                </CardHeader>

                <CardContent className="mb-3">
                    <Form {...form}>
                        <form
                            id="form-rhf-demo"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* Title Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Your Name"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone No.</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Your Phone No."
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Your Email"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Your Password"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button>
                                <Button type="submit">Create Account</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
                  </>
    );
}