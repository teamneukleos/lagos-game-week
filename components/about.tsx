"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    text: <>Lagos Games Week is an annual trade fair for video games</>,
    bg: "/images/slide-bg-1.webp",
  },
  {
    text: (
      <>
        Get Access to Africa's Growing dev community,
        expanding audience of players and young
        Consumer Market
      </>
    ),
    bg: "/images/slide-bg-2.webp",
  },
  {
    text: (
      <>
        Trade and Collaborate: From XD and co-dev to indie
        game showcases, publishing, education, and policy.
        Connect with stakeholders along the entire value chain,
        enabling collaboration, deal-flow, and co-production.
      </>
    ),
    bg: "/images/slide-bg-3.webp",
  },
  {
    text: (
      <>
        Shape policy, attract investment, and position
        Video Games as a serious economic and cultural
        sector with high youth employment potential
      </>
    ),
    bg: "/images/slide-bg-3.webp",
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setPrev(current);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [current]);

  const handleClick = (index: number) => {
    if (index === current) return;

    setDirection(index > current ? 1 : -1);
    setPrev(current);
    setCurrent(index);
  };

  return (
    <section id="about" className="text-white sticky top-0 overflow-hidden z-[1]">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105 brightness-75"
        style={{ backgroundImage: `url(${slides[current].bg})` }}
      />
      <div className="absolute inset-0 bg-black/40 md:bg-black/40" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-svh flex flex-col items-center justify-between py-20">

            {/* TEXT SLIDER */}
            <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
              <div className="relative w-full flex items-center justify-center">

                {slides.map((slide, index) => {
                  let position = "translate-x-full opacity-0";

                  if (index === current) {
                    position = "translate-x-0 opacity-100";
                  } else if (index === prev) {
                    position =
                      direction === 1
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0";
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute flex flex-col items-center gap-4 transition-all duration-700 ease-in-out ${position}`}
                    >
                      <h2
                        className={`text-balance text-center
                          ${index === 2
                            ? "text-lg md:text-2xl lg:text-[40px] w-[min(100%,36ch)]"
                            : "text-lg md:text-2xl lg:text-[40px] w-[min(100%,30ch)]"
                          }`}
                      >
                        {slide.text}
                      </h2>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* INDICATORS */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className="rounded-full transition-all duration-500"
                >
                  <svg
                    className="w-6 h-[6px] md:w-10 md:h-2"
                    viewBox="0 0 40 8"
                  >
                    <rect
                      width="40"
                      height="8"
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