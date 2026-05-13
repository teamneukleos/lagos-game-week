"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    bg: "/images/slide-bg-4.webp",
  }
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section id="about" className="text-white sticky top-0 overflow-hidden z-[1] h-svh">

      {/* Background slides */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={slides[current].bg + current}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].bg})` }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay — hidden on slide 5 (index 4) */}
      {current !== 4 && (
        <div className="absolute inset-0 bg-black/60 -z-10" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex flex-col items-center justify-between py-20">

            {/* TEXT SLIDER */}
            <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
              <div className="relative w-full flex items-center justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4"
                  >
                    <h2
                      className={`text-balance text-center
                        ${current === 2
                          ? "text-lg md:text-2xl lg:text-[40px] w-[min(100%,36ch)]"
                          : "text-lg md:text-2xl lg:text-[40px] w-[min(100%,30ch)]"
                        }`}
                    >
                      {slides[current].text}
                    </h2>
                  </motion.div>
                </AnimatePresence>
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
                  <svg className="w-6 h-[6px] md:w-10 md:h-2" viewBox="0 0 40 8">
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