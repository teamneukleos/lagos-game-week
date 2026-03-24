"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import AnimatedLink from "@/components/ui/AnimatedLink";



const cards = [
  {
    bg: "#FFAF4D",
    img: "/images/spot-1.png",
    alt: "Pitch Stage",
    title: "Pitch Stage",
    desc: "Structured live presentation to pitch games to a panel of experts.",
    cta: "Register",
    href: "https://forms.gle/xg1zRJtczEDHVcak7",
  },
  {
    bg: "#FF64C9",
    img: "/images/spot-2.png",
    alt: "Indie Game Showcase",
    title: "Indie Game Showcase",
    desc: "Shortlisted studios and communities can showcase their games at no cost",
    cta: "Register your studio",
    href: " https://forms.gle/XvgH3gPPaiaFsMf28",
  },
  {
    bg: "#00ABF0",
    img: "/images/spot-3.png",
    alt: "Volunteers",
    title: "Volunteers and Exhibitors",
    desc: "Interested in being a volunteer or an exhibitor at Lagos Games Week?",
    cta: "Contact Us",
    href: "https://forms.gle/GoQyuXWJWPPPm8eCA",
  },
  {
    bg: "#E799FF",
    img: "/images/spot-4.png",
    alt: "Game Jam",
    title: "Game Jam",
    desc: "A hands-on game development challenge designed for learning, collaboration, and creativity.",
    cta: "Contact Us",
    href: "https://forms.gle/xg1zRJtczEDHVcak7",
  },
  {
    bg: "#D5D1D1",
    img: "/images/spot-5.png",
    alt: "Next Gen Summit",
    title: "Next Gen Summit",
    desc: "A platform designed to inspire and equip the next generation of game and tech creators.",
    cta: "Find out More",
    href: "/Next-Gen.pdf",
  },
];

export default function SecureSpotSection() {
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const autoScroll = AutoScroll({
    stopOnInteraction: false,
    speed: 1,
    playOnInit: isMobile, // ✅ auto play ONLY on mobile
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoScroll]
  );

  return (
    <section className="relative bg-white z-20">
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">

        <h2 className="w-[min(100%,15ch)] font-display text-black text-4xl md:text-5xl font-medium mb-12">
          Secure Your Spot Sign Up
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 px-4 md:px-6">
            {cards.map((card, i) => (
              <div
                key={i}
                onMouseEnter={() =>
                  !isMobile && emblaApi?.plugins()?.autoScroll?.play()
                }
                onMouseLeave={() =>
                  !isMobile && emblaApi?.plugins()?.autoScroll?.stop()
                }
                className="flex-[0_0_260px] sm:flex-[0_0_300px] md:flex-[0_0_340px] lg:flex-[0_0_380px] min-w-0"
              >
                <div
                  className="rounded-xl p-4 h-full"
                  style={{ backgroundColor: card.bg }}
                >
                  <img
                    src={card.img}
                    width={368}
                    height={368}
                    className="rounded-sm mb-5 w-full object-cover"
                    alt={card.alt}
                  />
                  <h3 className="text-sm md:text-base mb-px text-black font-semibold font-display">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm mb-6 text-black">
                    {card.desc}
                  </p>
                  <AnimatedLink
                    href={card.href}
                    className="!bg-black text-white hover:bg-black/80 group-hover:bg-black/80"
                    target="_blank"
                  >
                    {card.cta}
                  </AnimatedLink>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}