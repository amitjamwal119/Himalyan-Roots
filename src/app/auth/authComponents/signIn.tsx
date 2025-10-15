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

// import { signInSchema, RegisterSchemaType } from "@/schemas/registerSchema";
import { signInSchema, signInSchemaType } from "@/schemas/loginSchema";


export default function SignIn() {

    const form = useForm<signInSchemaType>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: signInSchemaType) => {
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
                    <CardTitle className="text-center text-2xl font-bold">Sign In to your account</CardTitle>
                    <CardDescription className="text-center">
                        Welcome Back!
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
                                <Button type="submit">Sign In</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
                  </>
    );
}