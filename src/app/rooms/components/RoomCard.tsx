"use client";

import { Room } from "@/types/Room";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface RoomCardProps {
    room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
    return (       
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
            {/* Swiper Image Slider */}
            <div className="image-slide-box">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {room.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={room.name}
                                width={400}
                                height={224}
                                className="w-full h-56 object-cover rounded-lg"
                                priority
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Room Info */}
            <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-3">{room.shortDescription}</p>
                <Link href={`/rooms/${room.slug}`} className="text-[#546434] font-semibold hover:underline">
                    View Details →
                </Link>
            </div>
        </div>
    );
}
