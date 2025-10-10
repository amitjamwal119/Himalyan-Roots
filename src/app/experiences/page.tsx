"use client"

import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../main-layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { AppDispatch, RootState } from "@/Redux-Toolkit/store/store";
import { useEffect } from "react";
import { getExperiences } from "@/Redux-Toolkit/slices/experiences/experiencesSlice";
import Image from "next/image";

export default function Experience() {

    //Get dispatch function
    const dispatch = useDispatch<AppDispatch>();

    //Get data from Redux store
    const { experience, loading, error } = useSelector(
        (state: RootState) => state.experiences
    );

    // Fetch Experiences
    useEffect(() => {
        dispatch(getExperiences());
    }, [dispatch]);
    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-lg">
                    <div className="flex flex-col items-center gap-4">
                        <Button disabled size="sm">
                            <Spinner />
                            Loading Experiences Please wait...
                        </Button>

                    </div>
                </div>
            </MainLayout>
        );
    }

    if (error) {
        return (
            <MainLayout>
                <div className="text-center text-red-500 mt-10">
                    Failed to load experiences. Please try again later.{error}
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <>
                <section className="min-h-screen bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                Our Experiences
                            </h1>
                            <p className="text-gray-600">
                                Discover inspiring travel stories and experiences from around the
                                world.
                            </p>
                        </div>

                        {/* Experiences Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {experience?.map((exp: any) => (
                                <div
                                    key={exp.id}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="h-56 overflow-hidden">
                                        <Image
                                            src={exp.image}
                                            alt={exp.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-1">
                                            {exp.title}
                                        </h2>
                                        <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {exp.description}
                                        </p>
                                        <Link
                                            href={`/experiences/${exp.slug}`}
                                            className="inline-block text-[#546434] font-semibold hover:underline"
                                        >
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </>
        </MainLayout>

    );
}