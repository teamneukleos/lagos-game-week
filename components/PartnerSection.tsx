import PartnerList from "@/components/PartnerList";

const partners = [
  { name: "Kucheza", image: "/partners/kucheza.png" },
  { name: "Gamr", image: "/partners/gamr.png" },
  { name: "Game-evo", image: "/partners/Game-evo.png" },
  { name: "10n8e", image: "/partners/10n8e.png" },
  { name: "Africa Comicade", image: "/partners/africa-comicade.png" },
  { name: "Deluxe Studios", image: "/partners/deluxe-studios.png" },
  { name: "Dimension11", image: "/partners/dimension11.png" },
  { name: "Image&time", image: "/partners/image&time.png" },
  { name: "xon10dr", image: "/partners/xon10dr.png" },
  { name: "Maliyo games", image: "/partners/maliyo-games.png" },
  { name: "Mobiele", image: "/partners/mobiele.png" },
  { name: "Neukleos", image: "/partners/neukleos.png" },
];

export default function PartnersSection() {
  return (
    <section id="" className="bg-white relative z-[1]">
      <div className="py-20">
        <div className="max-w-[1440px] mx-auto">
          <PartnerList partners={partners} />
        </div>
      </div>
    </section>
  );
}