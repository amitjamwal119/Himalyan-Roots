"use client";

import { Room } from "@/types/Room";
import "swiper/css";
import Image from "next/image";
import MainLayout from "@/app/main-layout";
import Link from "next/link";


interface RoomDetailsProps {
    room: Room;
}

export default function RoomDetails({ room }: RoomDetailsProps) {
    return (
        <>
            <MainLayout>
                <section className="room-details">
                    <div className="container mx-auto">
                        <Link href="/rooms" className="text-blue-600 hover:underline">← Back to Rooms</Link>
                        <article className="p-4 max-w-3xl mx-auto">
                            <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
                            {room.images && room.images.length > 0 && (
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {room.images.map((src, i) => (
                                        <div key={i} className="aspect-video rounded overflow-hidden">
                                            <Image
                                                src={src}
                                                alt={`${room.name} ${i + 1}`}
                                                width={800}
                                                height={600}
                                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p className="mb-2">{room.
                                shortDescription
                                || "No description available."}</p>
                            {room.pricePerNight
                                && <p className="font-semibold">Price: ₹{room.pricePerNight}</p>}

                            {room.amenities && (
                                <>
                                    <h3 className="mt-4 font-semibold">Amenities</h3>
                                    <ul className="list-disc ml-5">
                                        {room.amenities.map((amenity, i) => (
                                            <li key={i}>{amenity}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <div className="mt-6">
                                <Link
                                    href="/rooms"
                                    className="inline-block font-(family-name:--subnlinks) px-6 py-3 bg-[#ffbe3d] text-[#3d1f17] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>
            </MainLayout>

        </>
    )
}
