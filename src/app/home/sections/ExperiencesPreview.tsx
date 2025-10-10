"use client";

import React from "react";

const experiencesData = [
    {
        icon: (
            // Trekking / Mountain Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16l4-6 5 5 6-8 4 6v4H3z" />
            </svg>

        ),
        title: "Trekking Adventures",
        description: "Explore scenic trails and immerse yourself in the Himalayan landscape.",
    },
    {
        icon: (
            // Bonfire Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C10 6 8 10 12 14c2-3 4-6 2-10z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v8" />
            </svg>

        ),
        title: "Bonfires & Relaxation",
        description: "Enjoy cozy evenings by the fire under the starlit sky with family and friends.",
    },
    {
        icon: (
            // Yoga Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2s4 4 8 6-4 4-4 10-4-4-8-6 4-4 4-10z" />
            </svg>
        ),
        title: "Yoga & Wellness",
        description: "Rejuvenate your mind and body with guided yoga and wellness sessions.",
    },
    {
        icon: (
            // Sightseeing / Camera Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ffbe3d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h2l1-2h10l1 2h2a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" />
                <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth={2} />
            </svg>

        ),
        title: "Sightseeing & Photography",
        description: "Capture the breathtaking views and explore local attractions around Manali.",
    },
];

const ExperiencesPreview = () => {
    return (
        <section className="py-16 bg-white text-gray-900">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-(family-name:--head-font)">
                    Experiences <span className="text-[#ffbe3d]">You’ll Love</span>
                </h2>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-(family-name:--subnlinks)">
                    Make your stay unforgettable with a variety of curated activities and adventures at our resort.
                </p>

                <div className="grid md:grid-cols-4 gap-10">
                    {experiencesData.map((exp, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-md bg-gray-100 hover:shadow-xl transition"
                        >
                            {exp.icon}
                            <h3 className="text-2xl font-semibold mb-2 font-(family-name:--subnlinks)">{exp.title}</h3>
                            <p className="text-gray-600 text-base md:text-lg font-(family-name:--body-txt)">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    
        </section>
    );
};

export default ExperiencesPreview;
