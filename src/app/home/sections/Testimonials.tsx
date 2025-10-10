"use client";

import Image from "next/image";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
//  Navigation,

const testimonials = [
    {
        id: 1,
        name: "Rohit Sharma",
        designation: "Travel Blogger",
        review:
            "An unforgettable experience! The resort, the views, and the activities were all amazing. Highly recommend!",
        image: "https://images.unsplash.com/photo-1603415526960-f9e1a16f9c17?auto=format&fit=crop&w=200&q=80",
    },
    {
        id: 2,
        name: "Avni Mehta",
        designation: "Software Engineer",
        review:
            "Loved the serene environment and excellent hospitality. Perfect place for a weekend getaway.",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    },
    {
        id: 3,
        name: "Vikram Singh",
        designation: "Photographer",
        review:
            "Beautiful resort with stunning views of Manali. Great for trekking and photography enthusiasts.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?auto=format&fit=crop&w=200&q=80",
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials py-16 bg-gray-50 text-gray-900">

            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl  text-center font-bold mb-6 font-(family-name:--head-font)">
                    What Our <span className="text-[#ffbe3d]">Guests Say</span>
                </h2>
                <p className="text-gray-600 text-2xl font-(family-name:--subnlinks) mb-12 max-w-3xl mx-auto text-center">
                    Hear from our happy guests who experienced unforgettable moments at our resort.
                </p>

                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    // navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Pagination]}
                    //  Navigation,
                    className="mySwiper"
                >
                    <div className="max-w-6xl mx-auto px-6 text-center">

                        <div className="">
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="p-6 shadow-md bg-white hover:shadow-xl transition flex flex-col items-center">
                                        <div className="relative w-24 h-24 mb-4">

                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover rounded-full"
                                            />
                                        </div>

                                        <p className="text-gray-600 text-base md:text-lg italic">{testimonial.review}</p>
                                        <h3 className="text-xl font-(family-name:--subnlinks) font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500 font-(family-name:--body-txt) mb-4">{testimonial.designation}</p>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </div>
                    </div>

                </Swiper>
            </div>

        </section>
    );
}
