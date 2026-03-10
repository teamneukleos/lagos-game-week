"use client";

import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  id?: string;
  type?: "button" | "submit";
  className?: string;
}

export default function AnimatedButton({
  children,
  id,
  type = "button",
  className,
}: Props) {
  return (
    <button
      id={id}
      type={type}
      className="group cursor-pointer inline-flex items-center"
    >
      {/* Left Arrow */}
      <div
        className={clsx(
          "inline-flex items-center justify-center rounded-full transition-all",
          "size-10 w-0 group-hover:w-10 bg-white text-black"
        )}
      >
        <ArrowRight size={16} />
      </div>

      {/* Button Text */}
      <div
        className={clsx(
          "px-8 py-2 text-xs rounded-full bg-white text-black font-semibold",
          "hover:bg-white/80 transition-colors",
          className
        )}
      >
        {children}
      </div>

      {/* Right Arrow */}
      <div
        className={clsx(
          "inline-flex items-center justify-center rounded-full transition-all",
          "size-10 group-hover:w-0 bg-white text-black"
        )}
      >
        <ArrowRight size={16} />
      </div>
    </button>
  );
}