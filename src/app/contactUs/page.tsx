"use client";

// import { useState } from "react";
import MainLayout from "../main-layout";

export default function Contact() {
    // Temporary local state (we’ll replace this with React Hook Form or backend integration later)
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Form Submitted:", formData);
    // };

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
                        <form className="space-y-5">
                            {/* onSubmit={handleSubmit} */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                />
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
                                    name="email"
                                   
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                />
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
                                    name="subject"
                                   
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                />
                                 {/* value={formData.subject}
                                    onChange={handleChange} */}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none"
                                ></textarea>
                                {/* value={formData.message}
                                    onChange={handleChange} */}
                            </div>

                            <button
                                type="submit"
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
