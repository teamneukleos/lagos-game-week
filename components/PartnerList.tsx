"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type Partner = {
  name: string;
  image: string;
};

export default function PartnerList({ partners }: { partners: Partner[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [AutoScroll({ stopOnInteraction: false })]
  );

  return (
    <div className="relative">

      {/* Left Label */}
      <div className="absolute left-0 top-0 bottom-0 z-[1]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white h-full flex items-center px-8">
          <h3 className="text-2xl md:text-4xl text-black text-center">Industry <br />Partners</h3>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-32">

          {partners.map((partner, i) => (
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
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}