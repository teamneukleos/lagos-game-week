"use client";

import { useEffect, useState } from "react";

const slides = [
  "Lagos Games Week is an annual trade fair for video games",

  "Get Access to Africa's Growing dev community, expanding audience of players and young Consumer Market",

  "Trade and Collaborate: From XD and co-dev to indie game showcases, publishing, education, and policy. Connect with stakeholders along the entire value chain, enabling collaboration, deal-flow, and co-production.",

  "Shape policy, attract investment, and position Video Games as a serious economic and cultural sector with high youth employment potential",
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
    <section className="text-white sticky top-0 overflow-hidden z-[1]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('/images/kucheza-event.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-svh flex flex-col items-center justify-between py-20">

            {/* Centered Text */}
            <div className="flex-1 flex items-center justify-center w-full">

              <div className="relative w-full flex items-center justify-center">

                {slides.map((text, index) => (
                  <h2
                    key={index}
                    className={`absolute text-balance font-display text-center transition-all duration-700
                    ${
                      index === current
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }
                    ${
                      index === 2
                        ? "text-2xl md:text-3xl lg:text-4xl w-[min(100%,36ch)]"
                        : "text-3xl md:text-4xl lg:text-5xl w-[min(100%,30ch)]"
                    }`}
                  >
                    {text}
                  </h2>
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