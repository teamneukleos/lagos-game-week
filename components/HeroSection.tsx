import AnimatedLink from "@/components/ui/AnimatedLink";

const headlineSponsors = [
  {
    name: "Sponsor",
    image: "/sponsors/sponsor1.png",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[180px] md:py-[180px] gap-16 grid lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <div className="uppercase text-center md:text-left font-display text-4xl md:text-6xl font-bold text-balance">
              <h2 className="text-[#FF64C9]">
                African talent Global markets
              </h2>

              <p className="uppercase">
                Play without borders
              </p>
            </div>

            <div className="my-6 text-base md:text-lg">
              <div className="grid grid-cols-[auto_1fr] gap-8 max-w-md mx-auto md:mx-0">
                <p>Date</p>
                <p>18 - 19 June 2026</p>

                <p>Venue</p>
                <p>The National Theatre<br />
                   (Wole Soyinka Centre for Culture and Creative Arts),<br />
                    Iganmu, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <AnimatedLink
                href="mailto:hello@lagosgamesweek.com"
                className="!bg-[#8A18AD] text-white hover:bg-[#8A18AD]/20 group-hover:bg-[#8A18AD]/20"
              >
                Become a sponsor
              </AnimatedLink>
            </div>
          </div>

          {/* Right Content */}
          <div className="self-center">
            <div className="border-2 border-[#FF64C9] rounded-3xl overflow-clip">

              <iframe
                width="100%"
                className="aspect-video"
                src="https://www.youtube.com/embed/9qrg8ak0apM"
                title="LAGOS GAMES WEEK 2025 – OFFICIAL WRAP-UP | AFRICA’S BIGGEST VIDEO GAMES FESTIVAL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              />

            </div>

            <div className="mt-11 flex items-center justify-center gap-10">
              <h3 className="text-xl">
                Headline<br />Sponsor
              </h3>

              {headlineSponsors.map((sp) => (
                <img
                  key={sp.name}
                  src={sp.image}
                  alt={sp.name}
                  width={151}
                  height={100}
                  className="object-contain aspect-square"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}