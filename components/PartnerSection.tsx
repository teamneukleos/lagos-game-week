import PartnerList from "@/components/PartnerList";

const partners = [
  { name: "Xbox", image: "/partners/x-box.png" },
  { name: "Maliyo games", image: "/partners/maliyo-games.png" },
  { name: "Game-evo", image: "/partners/Game-evo.png" },
  { name: "Monument Valley", image: "/partners/monument-valley.png" },
  { name: "Ustu games", image: "/partners/ustu-games.png" },
  { name: "Goethe Institut", image: "/partners/goethe-institut.png" },
  { name: "Institut Francais", image: "/partners/institut-francais.png" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-white relative z-[1]">
      <div className="py-20">
        <div className="max-w-[1440px] mx-auto">
          <PartnerList partners={partners} />
        </div>
      </div>
    </section>
  );
}