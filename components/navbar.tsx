"use client";

import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";

const routes = [
  { label: "About Us", url: "/#about" },
  { label: "Speakers", url: "/#speakers" },
  { label: "Schedule", url: "/#schedule" },
  { label: "Event details", url: "/#event-details" },
  { label: "Partners", url: "/#partners" },
  { label: "FAQs", url: "/#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" aria-label="logo" className="lg:-ml-5">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={60}
              className="max-h-[40px] sm:max-h-[60px] w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="text-white flex items-center">
              {routes.map((route) => (
                <li key={route.label}>
                  <a
                    href={route.url}
                    className="px-6 py-4 text-sm transition-colors"
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ticket Button */}
          <div className="group inline-flex scale-90 sm:scale-100">
            <AnimatedButton
              id="eventbrite-widget-modal-trigger-1343945108999--top"
            >
              Get your tickets
            </AnimatedButton>
          </div>

        </div>
      </div>
    </header>
  );
}