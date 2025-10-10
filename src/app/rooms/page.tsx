"use client";
// import axios from "axios";
import { useEffect } from "react";      //, useState
import MainLayout from "../main-layout";
// import { Room } from "@/types/Room";
import RoomCard from "./components/RoomCard";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";


import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux-Toolkit/store/store";
import { getRooms } from "@/Redux-Toolkit/slices/rooms/roomSlice";

export default function Rooms() {
    // const [rooms, getRooms] = useState<Room[]>([]);

    // useEffect(() => {
    //     const fetchRooms = async () => {
    //         try {
    //             const res = await axios.get<Room[]>(`${process.env.NEXT_PUBLIC_API_URL as string}/rooms`);
    //             getRooms(res.data);
    //             console.log("rooms", res.data);
    //         } catch (err) {
    //             console.error("Error is:", err);
    //         }
    //     };
    //     fetchRooms();
    // }, []);

    // Redux logic

    //Get dispatch function
    const dispatch = useDispatch<AppDispatch>();

    //Get data from Redux store
    const { rooms, loading, error } = useSelector(
        (state: RootState) => state.rooms
    );

    // Fetch Rooms
    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch]);

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
        <MainLayout>
            <section className="rooms py-10">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-semibold text-center mb-8">Our Rooms</h1>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {rooms.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
