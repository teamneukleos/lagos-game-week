"use client";

import Image from "next/image";
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
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [AutoScroll({ stopOnInteraction: false })]
  );

  return (
    <section className="bg-white relative z-[1]">
      <div className="py-20">
        <div className="max-w-[1440px] mx-auto">

          <div className="relative">

            {/* LEFT LABEL (same style as PartnerList) */}
            <div className="absolute left-0 top-0 bottom-0 z-[1]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white h-full flex items-center px-8">
                <h3 className="text-2xl md:text-4xl text-black font-semibold text-center">
                  2025 <br /> Partners
                </h3>
              </div>
            </div>

            {/* CAROUSEL */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4 md:-ml-32">

                {sponsors.map((sp, i) => (
                  <div
                    key={i}
                    className="
                      pl-4 md:pl-32
                      flex-[0_0_100%]
                      min-[225px]:flex-[0_0_33%]
                      md:flex-[0_0_33%]
                      lg:flex-[0_0_25%]
                      xl:flex-[0_0_20%]
                      cursor-grab
                    "
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src={sp.image}
                        alt={sp.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* STATS (unchanged) */}
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
      </div>
    </section>
  );
}