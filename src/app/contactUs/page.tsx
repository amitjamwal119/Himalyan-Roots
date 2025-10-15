"use client";

import { useForm } from "react-hook-form";
// import { useState } from "react";
import MainLayout from "../main-layout";
import { contactSchema, ContactSchemaType } from "@/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

export default function Contact() {

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<ContactSchemaType>({ resolver: zodResolver(contactSchema), });

    const onSubmit = async (data: object) => {
        console.log("Submitted Data:", data);
        // console.log(typeof(data));
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL as string}/userQueries`, data);
            console.log(response.data);

        } catch (error) {
            console.log("error is:", error);
        }
    }

    return (
        <MainLayout>
            <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* ---------- Left Side: Info Section ---------- */}
                    <div>
                        <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
                        <p className="text-gray-600 mb-6">
                            Have questions or want to make a reservation? We’d love to hear from you.
                            Reach out through the form or contact us using the details below.
                        </p>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                📍 <strong>Address:</strong> Himalayan Roots Resort, Mandi, Himachal Pradesh
                            </p>
                            <p>
                                📞 <strong>Phone:</strong> +91 98765 43210
                            </p>
                            <p>
                                ✉️ <strong>Email:</strong> contact@himalayanroots.com
                            </p>
                        </div>

                        <div className="mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.9982664447186!2d76.92076817500455!3d31.708627774144927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b47db1efab2f1%3A0x6b1bb8a0d299c687!2sMandi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1697038978590!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                allowFullScreen
                                loading="lazy"
                                className="rounded-xl shadow-md"
                            ></iframe>
                        </div>
                    </div>

                    {/* ---------- Right Side: Contact Form ---------- */}
                    <div>
                        <h2 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                            {/* onSubmit={handleSubmit} */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}

                                    className={errors.name ? 'text-xl p-2 border rounded border-red-700 w-full px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none' : 'w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none'}
                                />
                                {errors.name && <p className="text-red-700">{errors.name.message}</p>}

                                {/* value={formData.name}
                                    onChange={handleChange} */}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"

                                    {...register("email")}

                                    className={errors.email ? 'text-xl p-2 border rounded border-red-700 w-full px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none' : 'w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none'}
                                />
                                {errors.email && <p className="text-red-700">{errors.email.message}</p>}

                                {/*  value={formData.email}
                                    onChange={handleChange} */}
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"

                                    {...register("subject")}

                                    className={errors.subject ? 'text-xl p-2 border rounded border-red-700 w-full px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none' : 'w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none'}
                                />
                                {errors.subject && <p className="text-red-700">{errors.subject.message}</p>}

                                {/* value={formData.subject}
                                    onChange={handleChange} */}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    {...register("message")}
                                    rows={5}


                                    className={errors.message ? 'text-xl p-2 border rounded border-red-700 w-full px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none' : 'w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none'}
                                ></textarea>
                                {errors.message && <p className="text-red-700">{errors.message.message}</p>}

                                {/* value={formData.message}
                                    onChange={handleChange} */}
                            </div>

                            <button
                                type="submit" disabled={isSubmitting}
                                className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-all duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>

    );
}
