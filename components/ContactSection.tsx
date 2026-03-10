import AnimatedLink from "@/components/ui/AnimatedLink";

const CONTACT_LINK = "#";

export default function ContactSection() {
  return (
    <section
      className="bg-black text-white h-[100vh] bg-[url('/images/kucheza-event.png')] bg-cover bg-center relative z-20"
    >
      <div id="contact-us" className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        
        <div className="flex items-center justify-center md:justify-end">

          <div className="w-full md:w-1/2 text-center md:text-left">

            <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
              For Enquiries, Book a meeting with Lagos Games Week
            </h2>

            <AnimatedLink
              href={CONTACT_LINK}
              className="!bg-[#FFAF4D] !text-black hover:bg-[#FFAF4D]/80 group-hover:bg-[#FFAF4D]/80"
            >
              Contact Us
            </AnimatedLink>

          </div>

        </div>

      </div>
    </section>
  );
}