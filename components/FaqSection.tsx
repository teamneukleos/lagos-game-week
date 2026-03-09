import Faq from "@/components/faq";
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function FaqSection() {
  return (
    <section className="bg-black text-white py-10 lg:py-20 relative z-10">
      <div className={`${hostGrotesk.className} max-w-7xl mx-auto px-4 py-10 md:py-16`} id="faq">

        <div className="md:grid md:grid-cols-2 md:gap-10">

          <h2 className="text-3xl md:text-5xl mb-10 font-semibold lg:ml-5">
            Got questions?
          </h2>

          <div>
            <Faq />
          </div>

        </div>

      </div>
    </section>
  );
}