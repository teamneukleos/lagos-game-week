"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const sponsors = [
  { name: "Ustu Games", image: "/partners/ustu-games.png" },
  { name: "Monument Valley", image: "/partners/monument-valley.png" },
  { name: "Goethe Institut", image: "/partners/goethe-institut.png" },
  { name: "Digital school house", image: "/partners/digital-schoolhouse.png" },
  { name: "Game Evo", image: "/partners/Game-evo.png" },
  { name: "X-box", image: "/partners/x-box.png" },
  { name: "Institut Francais", image: "/partners/institut-francais.png" },
  { name: "Maliyo games", image: "/partners/maliyo-games.png" },
];

export default function Partners2025() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [AutoScroll({ stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-white pb-0 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SPONSOR SLIDER */}
        <div className="relative pt-20 pb-12">
          <div className="flex items-center gap-6 md:gap-10">

            {/* Title */}
            <h3 className="text-2xl md:text-3xl text-black font-semibold whitespace-nowrap leading-tight">
              2025 <br /> Partners
            </h3>

            {/* Slider Wrapper */}
            <div className="relative flex-1 min-w-0">

              {/* LEFT BUTTON */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              >
                <svg
                  className="w-[28px] h-[100px] md:w-[41px] md:h-[165px]"
                  viewBox="0 0 41 165"
                >
                  <rect width="41" height="165" fill="#FFAF4D" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="18"
                    fontWeight="bold"
                  >
                    ‹
                  </text>
                </svg>
              </button>

              {/* EMBLA */}
              <div className="overflow-hidden px-8 md:px-14" ref={emblaRef}>
                <div className="flex items-center">

                  {sponsors.map((sp) => (
                    <div
                      key={sp.name}
                      className="flex-[0_0_100%] sm:flex-[0_0_33%] lg:flex-[0_0_20%] flex items-center justify-center px-3 md:px-6"
                    >
                      <img
                        src={sp.image}
                        alt={sp.name}
                        className="h-12 md:h-28 object-contain max-w-full"
                      />
                    </div>
                  ))}

                </div>
              </div>

              {/* RIGHT BUTTON */}
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              >
                <svg
                  className="w-[28px] h-[100px] md:w-[41px] md:h-[165px]"
                  viewBox="0 0 41 165"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="40"
                    height="164"
                    fill="white"
                    stroke="#D9D9D9"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="black"
                    fontSize="18"
                    fontWeight="bold"
                  >
                    ›
                  </text>
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="relative z-10 mt-12 translate-y-6">
          <div className="grid md:grid-cols-3 gap-4 max-w-[1050px] mx-auto">

            <div className="py-14 px-7 rounded-[12px] text-black bg-[#FFAF4D]">
              <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-2">
                600,000+
              </h3>
              <p className="text-sm">
                Tech and creative graduates annually in Nigeria
              </p>
            </div>

            <div className="py-14 px-7 rounded-[12px] text-black bg-[#FF64C9]">
              <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-2">
                15% YOY
              </h3>
              <p className="text-sm">
                Game development workforce growth
              </p>
            </div>

            <div className="py-14 px-7 rounded-[12px] text-black bg-[#1EA7D7]">
              <h3 className="text-2xl md:text-2xl uppercase lg:text-4xl font-bold mb-2">
                100 M+
              </h3>
              <p className="text-sm">
                Mobile internet users in Nigeria
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}