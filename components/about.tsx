"use client";

import { useEffect, useState } from "react";
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const slides = [
  {
    text: (
      <>
        We exist to provide a pathway for
the growth and development of the 
African video games ecosystem 
for the global marketplace 
      </>
    ),
    bg: "/images/slide-bg-1.webp",
  },
  {
    heading: "Conference",
    text: (
      <>
       Insightful talks and Panel sessions with 
       leading voices in video games, culture, 
       storytelling, trade and investment
      </>
    ),
    bg: "/images/slide-bg-2.webp",
  },
  {
    heading: "Exhibition",
    text: (
      <>
        A vibrant showcase of games, tech, art, 
        and innovation from across Africa and 
        the global markets. Featuring global 
        game showcases, Indie Games, 
        Showcase, VR experiences, playtesting 
        and game activations
      </>
    ),
    bg: "/images/slide-bg-3.webp",
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="text-white sticky top-0 overflow-hidden z-[1]">

      {/* Background Image */}
      <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 z-0"
         style={{
         backgroundImage: `url(${slides[current].bg})`,
         }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-svh flex flex-col items-center justify-between py-20">

            {/* Centered Text */}
            <div className="flex-1 flex items-center justify-center w-full">

              <div className="relative w-full flex items-center justify-center">

                 {slides.map((slide, index) => (
  <div
    key={index}
    className={`absolute flex flex-col items-center gap-4 transition-all duration-700
    ${
      index === current
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-3 pointer-events-none"
    }`}
  >

    {slide.heading && (
<h3 className="font-display text-xl md:text-2xl lg:text-[48px] font-semibold text-center">        {slide.heading}
      </h3>
    )}

   <h2
  className={`${hostGrotesk.className} text-balance text-center 
      ${
        index === 2
          ? "text-lg md:text-2xl lg:text-[40px] w-[min(100%,36ch)]"
          : "text-lg md:text-2xl lg:text-[40px] w-[min(100%,30ch)]"
      }`}
    >
      {slide.text}
    </h2>

  </div>
))}

              </div>

            </div>

            {/* Indicators */}
            <div className="flex items-center gap-2 md:gap-3">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="rounded-sm transition-all duration-500"
                >
                  <svg
                    className="w-8 h-2 md:w-[72px] md:h-4"
                    viewBox="0 0 72 16"
                  >
                    <rect
                      width="72"
                      height="16"
                      fill={current === index ? "#D9D9D9" : "#313131"}
                    />
                  </svg>
                </button>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}