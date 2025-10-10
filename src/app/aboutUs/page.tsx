import Image from "next/image";
import MainLayout from "../main-layout";

export default function About() {
    const whyUs = [
        {
            title: "Eco-Friendly Stay",
            desc: "Our resort follows sustainable practices using solar energy and locally sourced materials.",
        },
        {
            title: "Scenic Views",
            desc: "Wake up to breathtaking views of the Himalayan peaks and lush green valleys.",
        },
        {
            title: "Organic Cuisine",
            desc: "Enjoy freshly prepared meals made from organic produce grown in our own gardens.",
        },
        {
            title: "Adventure & Serenity",
            desc: "Experience a perfect blend of adventure activities and peaceful relaxation.",
        },
    ]

    const teams = [
        {
            name: "Rohan Sharma",
            role: "Resort Manager",
            img: "https://images.unsplash.com/photo-1603415526960-f7e0328f7e8b?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Kavita Thakur",
            role: "Head Chef",
            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Ankit Verma",
            role: "Adventure Guide",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
        },
    ]
    
    return (
        <MainLayout>
            <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    {/* ---------- Heading Section ---------- */}
                    <h1 className="text-4xl font-bold text-green-800 mb-6">About Himalayan Roots</h1>
                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
                        Nestled in the serene Himalayan foothills, Himalayan Roots Resort is your perfect
                        escape from city life. We combine natural beauty, modern comfort, and authentic
                        local experiences to create a truly unforgettable stay.
                    </p>

                    {/* ---------- Hero Image ---------- */}
                    <div className="relative w-full h-72 sm:h-96 mb-12">
                        <Image
                            src="https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1200&q=80"
                            alt="Himalayan Resort View"
                            fill
                            className="object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* ---------- Mission & Vision ---------- */}
                    <div className="grid sm:grid-cols-2 gap-10 text-left mb-20">
                        <div>
                            <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h2>
                            <p className="text-gray-600">
                                To provide a peaceful, sustainable, and rejuvenating retreat where guests can
                                reconnect with nature, enjoy organic cuisine, and experience true Himalayan
                                hospitality.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h2>
                            <p className="text-gray-600">
                                To be recognized as a leading eco-resort in Himachal Pradesh, blending
                                traditional charm with modern comfort while promoting environmental
                                responsibility and local culture.
                            </p>
                        </div>
                    </div>

                    {/* ---------- Why Choose Us ---------- */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-semibold text-green-800 mb-8">Why Choose Us</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                            {whyUs.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                                >
                                    <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- Meet Our Team ---------- */}
                    <div>
                        <h2 className="text-3xl font-semibold text-green-800 mb-8">Meet Our Team</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {teams.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transition-all duration-200"
                                >
                                    <div className="relative w-32 h-32 mb-4">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
                                    <p className="text-gray-500 text-sm">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>

    );
}
