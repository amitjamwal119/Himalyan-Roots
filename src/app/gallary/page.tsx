"use client"

import { useEffect, useState } from "react";
import MainLayout from "../main-layout";
// import { GalleryItem } from "@/types/Gallary";
// import axios from "axios";
import GallaryCard from "./components/GallaryCard";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux-Toolkit/store/store";
import { getGallary } from "@/Redux-Toolkit/slices/gallary/gallarySlice";
// import GallaryModal from "./components/GallaryModal";


export default function Gallary() {

    // const [gallary, setGallary] = useState<GalleryItem[]>([]);

    const [selectedCategory, setSelectedCategory] = useState("All");

    // useEffect(() => {
    //     const getGallary = async () => {
    //         try {
    //             const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL as string}/gallary`);
    //             setGallary(res.data);
    //             // console.log("resss",res.data);    
    //         }
    //         catch (err) {
    //             console.error("Error fetching gallary data:", err);
    //         }
    //     }
    //     getGallary();
    // }, [])

    // Redux Logic
    const dispatch = useDispatch<AppDispatch>();

    const { gallary, loading, error } = useSelector(
        (state: RootState) => state.gallary
    );

    // Fetch Rooms
    useEffect(() => {
        dispatch(getGallary());
    }, [dispatch]);



    const categoriesBtns = ["All", "Rooms", "Nature", "Dining", "Activities"];
    const filteredCategory = selectedCategory === "All" ? gallary : gallary.filter((item) => item.category === selectedCategory);

    // console.log("filtereddddd", filteredCategory);
    // if selectedCategory = all is true then render whole gallery items and if not then filter and check gallary item = selectedCategory if any of those condition matches then category result will be stored in filteredCategory variable

    if (loading)
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-lg">
                    <div className="flex flex-col items-center gap-4">
                        <Button disabled size="sm">
                            <Spinner />
                            Loading Rooms Please wait...
                        </Button>
                    </div>
                </div>
            </MainLayout>
        );

    if (error)
        return (
            <MainLayout>
                <p> erorrrrrr{error}</p>
            </MainLayout>
        );


    return (
        <>
            <MainLayout>
                <section className="gallary">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Resort Gallery</h2>

                        {/* Filter buttons */}
                        <div className="flex justify-center flex-wrap gap-4 mb-10">
                            {categoriesBtns.map((category, idx) => (
                                <button key={idx} onClick={() => setSelectedCategory(category)} className={`category-btn px-5 py-2 rounded-full border transition-all duration-200 ${selectedCategory === category ? "bg-[#ffbe3d] text-white border-yellow-700" : "border-gray-300 hover:bg-green-100"}`}>{category}</button>
                            ))}
                        </div>

                        {/* filtered gallary grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                filteredCategory.map((gallaryData) => (
                                    <div key={gallaryData.id}>
                                        <GallaryCard gallaryData={gallaryData} />
                                        {/* <GallaryModal gallaryItemProp={gallaryData} triggerElement={
                                            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                                View Details
                                            </button>
                                        } /> */}
                                    </div>

                                ))
                            }
                            <div />
                        </div>
                    </div>
                </section>
            </MainLayout >
        </>
    );
}