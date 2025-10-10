"use client";

import React from "react";
// import { motion } from "framer-motion";
// import { UtensilsCrossed } from "lucide-react";

const servicesData = [
  {
    icon: (
      // Mountain Icon for Breathtaking Views
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8 2 2v6H3z" />
      </svg>
    ),
    title: "Breathtaking Views",
    description:
      "Wake up to panoramic Himalayan landscapes and serene surroundings.",
  },
  {
    icon: (
      // Home Icon for Luxury Cottages
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
      </svg>
    ),
    title: "Luxury Cottages",
    description:
      "Stay in cozy, fully furnished cottages with modern amenities and rustic charm.",
  },
  {
    icon: (
      // Utensils Icon for Fine Dining
      <svg xmlns="http://www.w3.org/2000/svg" 
         className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" 
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M12 6a6 6 0 00-6 6h12a6 6 0 00-6-6zM4 18h16M9 21h6" />
    </svg>
    ),
    title: "Fine Dining",
    description:
      "Relish gourmet meals crafted with local ingredients, served with warmth and elegance.",
  },
];

const Services = () => {
  return (
    <section className="services py-16 bg-white text-gray-900">
      <div className="container mx-auto">
              <div className="services-outer max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-(family-name:--head-font) mb-6">
          Discover <span className="text-[#ffbe3d]">Himalyan Roots Resort</span>
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-(family-name:--subnlinks)">
          Nestled in the heart of the Himalayas, our resort offers a perfect blend of comfort, nature, and adventure.
        </p>

        {/* Highlights Grid */}
        <div className=" services inner grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-gray-100 hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2 font-(family-name:--subnlinks)">{service.title}</h3>
              <p className="text-gray-600 text-base md:text-lg ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
       {/* <div className="flex justify-center items-center h-64 bg-gray-50">
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 5,
          color: "#e63946", // changes icon color
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg cursor-pointer"
      >
        <UtensilsCrossed size={48} className="mb-4 text-gray-800" />
        <h3 className="text-xl font-semibold">Fine Dining</h3>
        <p className="text-gray-600 text-sm">
          Relish gourmet meals with stunning mountain views in our fine dining restaurants.
        </p>
      </motion.div>
    </div> */}
      </div>

    </section>
  );
};

export default Services;
