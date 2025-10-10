
import { Room } from "@/types/Room";
import RoomDetails from "../components/RoomDetails";
import { notFound } from "next/navigation";

// interface RoomDetailsPageProps {
//   params: {
//     slug: string;              
//   };
// }
// RoomDetailsPageProps
export default async function RoomDetailsPage({ params }: { params: { slug: string } }) {

  const slug = params.slug; // just use it directly

  const encodedSlug = encodeURIComponent(slug);                              //to remove extra space if there any



  //http://localhost:3000/rooms    ${process.env.ROOM_API_URL}
  const res = await fetch(`${process.env.API_URL}/rooms?slug=${encodedSlug}`, {
    cache: "no-store",                                // to always get fresh data
  });


// Redux Logic








  if (!res.ok) {
    throw new Error(`Failed to fetch room: ${res.status}`);
  }

  const roomDataArr: Room[] = await res.json();                                       // fetched only room metching slug inside array [{}] so we have only one room in array which means array has only one index roomData[0]
  const room = roomDataArr[0];                                               //To get index value of that perticular room from array which we have fetched

  if (!room) {
    notFound(); // Next.js will show the 404 page
  }

  return (
    <>
      <RoomDetails room={room} />;
    </>
  );
}