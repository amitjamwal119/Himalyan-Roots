"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    alt: "Resort view from hill",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509228627153-2b3c7683e7e1?auto=format&fit=crop&w=800&q=80",
    alt: "Mountain cottages",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1576671087939-1f7aa5e907c4?auto=format&fit=crop&w=800&q=80",
    alt: "Bonfire at night",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582719478171-1f52be88f7a8?auto=format&fit=crop&w=800&q=80",
    alt: "Yoga session outdoor",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529443119126-cf84bcb5f851?auto=format&fit=crop&w=800&q=80",
    alt: "Hiking trail",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    alt: "Resort pool view",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
        <div className="container mx-auto">
            <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-(family-name:--head-font)">
          Moments at Our <span className="text-[#ffbe3d]">Resort</span>
        </h2>
        <p className="text-2xl font-(family-name:--subnlinks) text-gray-600 max-w-3xl mx-auto mb-12">
          Explore some of the unforgettable moments and views guests enjoy at our resort.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div key={img.id} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* View All Photos Button */}
        <div className="mt-10">
          <Link
            href="/gallery"
            className="inline-block font-(family-name:--subnlinks) px-6 py-3 bg-[#ffbe3d] text-[#3d1f17] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            View All Photos
          </Link>
        </div>
      </div>
        </div>
      
    </section>
  );
}
