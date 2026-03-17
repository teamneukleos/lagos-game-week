"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* SPONSOR SLIDER */}
        <div className="relative pt-20 pb-12">
          <div className="flex items-center gap-6 md:gap-10">

            {/* Title */}
            <h3 className="text-2xl md:text-3xl text-black font-semibold whitespace-nowrap leading-tight">
              2025 <br /> Partners
            </h3>

            {/* Slider Wrapper */}
            <div className="relative flex-1 min-w-0">

              

              {/* EMBLA */}
              <div className="overflow-hidden " ref={emblaRef}>
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

              

            </div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="relative z-10 mt-12 translate-y-6">
          <div className={`${hostGrotesk.className} grid md:grid-cols-3 gap-4 max-w-[1050px] mx-auto`}>
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
                100M+
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