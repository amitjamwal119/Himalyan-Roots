import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹4,500 / night",
    description: "Cozy room with mountain view, modern interiors, and balcony access.",
    image: "/images/room1.jpg", // replace with your image later
  },
  {
    id: 2,
    name: "Luxury Suite",
    price: "₹7,200 / night",
    description: "Spacious suite with private living area, balcony, and premium amenities.",
    image: "/images/room2.jpg",
  },
  {
    id: 3,
    name: "Family Cottage",
    price: "₹9,800 / night",
    description: "Perfect for families, offering 2 bedrooms, living space, and garden views.",
    image: "/images/room3.jpg",
  },
];

export default function RoomsPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 font-(family-name:--head-font)">
          Featured <span className="text-[#ffbe3d]">Rooms</span>
        </h2>        <p className="text-2xl text-gray-600 font-(family-name:--subnlinks) max-w-3xl mx-auto mb-12">
          Discover our most popular accommodations, crafted for comfort and luxury.
        </p>


        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-56 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 font-(family-name:--subnlinks)">{room.name}</h3>
                <p className="text-gray-500 md:text-lg mb-3">{room.description}</p>
                <p className="text-[#546434] md:text-lg font-bold mb-4">{room.price}</p>
                <Link
                  href="/rooms"
                  className="border border-[#3d1f17] text-sm text-[#3d1f17] px-4 py-2 rounded-lg hover:bg-[#ffbe3d] hover:text-[#3d1f17] hover:border-[#ffbe3d] transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/rooms"
            className="inline-block px-6 py-3 bg-[#ffbe3d] text-[#3d1f17] hover:bg-[#3d1f17] hover:text-[#ffbe3d] font-semibold rounded-lg shadow-lg transition">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
