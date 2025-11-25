"use client";

import {
  UserGroupIcon,
  CameraIcon,
  SunIcon,
  GlobeAltIcon,
  HeartIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    title: "Build Friendships",
    description:
      "Connect with like-minded individuals and create a circle of friends who share your passion for beach life and positive energy.",
    icon: UserGroupIcon,
  },
  {
    title: "Unforgettable Moments",
    description:
      "Experience breathtaking sunsets, refreshing dips in the ocean, and exciting beach activities that become cherished memories.",
    icon: SunIcon,
  },
  {
    title: "Explore New Beaches",
    description:
      "Discover hidden gems and popular shores as we venture to different beautiful beach locations, each with its own charm.",
    icon: GlobeAltIcon,
  },
  {
    title: "Embrace the Outdoors",
    description:
      "Rejuvenate your spirit by spending quality time in nature, soaking up the sun, and feeling the sand between your toes.",
    icon: HeartIcon,
  },
  {
    title: "Capture Memories",
    description:
      "Every event is filled with photo opportunities to document the fun, laughter, and friendships made.",
    icon: CameraIcon,
  },
  {
    title: "Inclusive Community",
    description:
      "We welcome everyone to join our vibrant and diverse community, fostering an atmosphere of respect and shared enjoyment.",
    icon: PhotoIcon,
  },
];

export default function WhyJoinTheFun() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-center text-3xl font-bold mb-12 text-[#ED7014]">
          Why Join the Fun?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-sm border text-center hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 text-[#ED7014]" />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-[#ED7014]">
                {title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}