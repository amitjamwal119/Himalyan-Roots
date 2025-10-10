"use client";

import { GalleryItem } from "@/types/Gallary";
import Image from "next/image";
import GallaryModal from "./GallaryModal";

// import { DialogTrigger } from "@/components/ui/dialog"

interface GalleryCardProps {
  gallaryData: GalleryItem;
}

export default function GalleryCard({ gallaryData }: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={gallaryData.image}
          alt={gallaryData.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center text-white">
        <h3 className="text-xl font-semibold mb-2 tracking-wide">
          {gallaryData.title}
        </h3>
        <p className="text-sm uppercase tracking-wider text-gray-200">
          {gallaryData.category}
        </p>

        {/* <GallaryModal/> */}

        <GallaryModal gallaryItemProp={gallaryData} triggerElement={
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            View Details
          </button>
        } />
      </div>
    </div>
  );
}
