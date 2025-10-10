"use client";

import Image from "next/image";
import Link from "next/link";

const offers = [
    {
        id: 1,
        title: "Honeymoon Getaway",
        description: "Romantic stay with candlelight dinners and mountain views, perfect for couples.",
        price: "Starting at ₹9,999 / 2 nights",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Family Adventure Package",
        description: "Fun-filled stay for the whole family with trekking, bonfire nights, and guided tours.",
        price: "Starting at ₹12,500 / 3 nights",
        image: "https://images.unsplash.com/photo-1509228627153-2b3c7683e7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Weekend Escape",
        description: "Short getaway with spa sessions, cozy rooms, and delicious dining options.",
        price: "Starting at ₹6,500 / 2 nights",
        image: "https://images.unsplash.com/photo-1576671087939-1f7aa5e907c4?auto=format&fit=crop&w=800&q=80",
    },
];

export default function SpecialOffers() {
    return (
        <section className="py-16 bg-white text-gray-900">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-(family-name:--head-font)">
                        Exclusive <span className="text-[#ffbe3d]">Special Offers</span>
                    </h2>
                    <p className="text-gray-600 text-2xl font-(family-name:--subnlinks) mb-12 max-w-3xl mx-auto">
                        Discover our special packages crafted for unforgettable experiences at our resort.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="rounded-2xl shadow-md bg-gray-50 hover:shadow-xl transition flex flex-col overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col justify-between flex-1 bg-gray-100">
                                    <div>
                                        <h3 className="text-2xl font-(family-name:--subnlinks) font-semibold mb-2">{offer.title}</h3>
                                        <p className="text-gray-600 text-base md:text-lg font-(family-name:--body-txt)">{offer.description}</p>
                                        <p className="text-emerald-500 text-base md:text-lg font-bold">{offer.price}</p>
                                    </div>
                                    

                                    <div className="mt-6">
                                        <Link
                                            href="/rooms"
                                            className="inline-block font-(family-name:--subnlinks) px-6 py-3 bg-[#ffbe3d] text-[#3d1f17] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
