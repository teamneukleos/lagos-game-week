"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
  href?: string;
  target?: string;
  className?: string;
}

export default function AnimatedLink({
  children,
  href = "#",
  target = "_self",
  className,
}: Props) {
  return (
    <a href={href} target={target} className="group inline-flex">
      {/* Left Arrow */}
      <div
        className={`inline-flex items-center justify-center rounded-full transition-all !size-10 !w-0 group-hover:!w-10 ${className}`}
      >
        <ArrowRight size={16} />
      </div>

      {/* Text */}
      <div
        className={`bg-white text-black hover:bg-white/80 group-hover:bg-white/80 text-xs px-8 inline-flex items-center justify-center rounded-full font-medium transition-colors ${className}`}
      >
        {children}
      </div>

      {/* Right Arrow */}
      <div
        className={`inline-flex items-center justify-center rounded-full transition-all !size-10 group-hover:!w-0 ${className}`}
      >
        <ArrowRight size={16} />
      </div>
    </a>
  );
}