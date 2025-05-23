"use client"
import React from "react"
import Image from "next/image"
const vehicleImages = [
  "/LocationTrack/car.webp",
  "/LocationTrack/truck.jpg",
  "/LocationTrack/bus.jpg",
  "/LocationTrack/bike.jpg",
  "/LocationTrack/tractor.jpg",
  "/LocationTrack/activa.jpg",
  // Dummy vehicle images
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80", // jeep
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // truck
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80", // bike
]

export default function VehicleMarquee() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden relative">
      {/* Enhanced heading with better typography and animation */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
            Track Any Vehicle
          </span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
          Our advanced tracking system works with almost every vehicle on the road
        </p>
      </div>

      {/* Marquee container with relative positioning */}
      <div className="relative w-full overflow-hidden">
        {/* Left blur gradient */}
        <div className="absolute left-0 top-0 w-64 h-full z-10 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>

        {/* Right blur gradient */}
        <div className="absolute right-0 top-0 w-64 h-full z-10 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none"></div>

        {/* Marquee animation */}
        <div
          className="marquee flex items-center gap-8 w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300"
          style={{ animationDuration: "28s", animationTimingFunction: "linear", animationIterationCount: "infinite" }}
        >
          {vehicleImages.concat(vehicleImages).map((img, idx) => (
            <div key={img + idx} className="flex flex-col items-center group">
              <div className="relative">
                <Image
                  src={img || "/placeholder.svg"}
                  alt="Vehicle"
                  width={192}
                  height={128}
                  className={`w-36 h-24 md:w-48 md:h-32 rounded-2xl border-4 border-white shadow-xl group-hover:scale-110 group-hover:shadow-yellow-400 transition-all duration-300 bg-white
                    ${img.includes('bike') || img.includes('activa') ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                />
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300 -z-10"></div>
              </div>

              {/* Optional vehicle type label */}
              <span className="mt-3 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {idx % 10 === 0
                  ? "Car"
                  : idx % 10 === 1
                    ? "Truck"
                    : idx % 10 === 2
                      ? "Bus"
                      : idx % 10 === 3
                        ? "Bike"
                        : idx % 10 === 4
                          ? "Tractor"
                          : idx % 10 === 5
                            ? "Scooter"
                            : idx % 10 === 6
                              ? "Jeep"
                              : idx % 10 === 7
                                ? "Sports Car"
                                : idx % 10 === 8
                                  ? "Heavy Truck"
                                  : "Motorcycle"}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 left-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-1/3 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Call to action button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-orange-300/50 transition-all duration-300 transform hover:-translate-y-1">
          Start Tracking Now
        </button>
      </div>

      <style jsx>{`
        .marquee {
          animation-name: marqueeScroll;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
