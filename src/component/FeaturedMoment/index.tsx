"use client";

import Image from "next/image";
import { Button } from "../Ui/button";

const moments = [
    {
        title: "Volleyball Fun",
        image: "/images/featuredmoment/volleypic.png",
    },
    {
        title: "Bonfire Nights",
        image: "/images/featuredmoment/bonfire.png",
    },
    {
        title: "Tropical Refreshments",
        image: "/images/featuredmoment/tropical.png",
    },
    {
        title: "Morning Paddles",
        image: "/images/featuredmoment/paddles.png",
    },
];

export default function FeaturedMoments() {
    return (
        <section className="w-full mx-auto py-20 px-4 bg-[#FAFAFB]">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <h2 className="text-center text-3xl font-bold mb-12 text-[#ED7014]">
                    Featured Moments from Past Hangouts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {moments.map(({ title, image }) => (
                        <div
                            key={title}
                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="py-4 text-center">
                                <p className="text-gray-700 font-medium">{title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button asChild>
                        <a href="/gallery">View All Photos</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
