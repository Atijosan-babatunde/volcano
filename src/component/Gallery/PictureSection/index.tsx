"use client"

import Image from "next/image"

interface GalleryItem {
  id: number
  src: string
  alt: string
  caption: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/beach-family-building-sandcastle.jpg",
    alt: "Family building sandcastle",
    caption: "Summer at the beach",
  },
  {
    id: 2,
    src: "/woman-in-hat-smiling-at-beach-sunset.jpg",
    alt: "Woman with beach hat",
    caption: "Golden hour vibes",
  },
  {
    id: 3,
    src: "/beach-volleyball-players-sunset.jpg",
    alt: "Sunset beach activity",
    caption: "Evening games",
  },
  {
    id: 4,
    src: "/ocean-waves-beach-landscape.jpg",
    alt: "Ocean waves",
    caption: "Peaceful waters",
  },
  {
    id: 5,
    src: "/couple-at-sunset-beach-romantic.jpg",
    alt: "Romantic beach moment",
    caption: "Sunset romance",
  },
  {
    id: 6,
    src: "/friends-laughing-at-beach-night-bonfire.jpg",
    alt: "Friends having fun",
    caption: "Late night laughs",
  },
  {
    id: 7,
    src: "/new.jpg",
    alt: "Group of friends",
    caption: "Squad goals",
  },
  {
    id: 8,
    src: "/happyfriends.jpg",
    alt: "Water adventure",
    caption: "Ocean adventures",
  },
  {
    id: 9,
    src: "/friends.jpg",
    alt: "Beach party",
    caption: "Celebration time",
  },
]

export default function Gallery() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-video bg-muted">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0  from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm md:text-base font-medium p-4 w-full">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
