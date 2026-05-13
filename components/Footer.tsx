import Image from "next/image";

const EVENT_START_DATE = new Date("2026-06-18");
const EVENT_END_DATE = new Date("2026-06-19");

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/lagos_gamesweek" },
  { label: "Instagram", href: "https://www.instagram.com/lagos_gamesweek/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lagos-games-week/" },
  { label: "Facebook", href: "https://www.facebook.com/lagosgamesweek" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const formattedMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(EVENT_END_DATE);

  return (
    <footer className="w-full px-4 py-4 bg-black text-white">

      <div className="max-w-7xl mx-auto py-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr] gap-8 md:gap-16 lg:gap-[116px] py-4 px-4 text-sm">

          {/* Logo + Gif */}
          <div className="flex items-start gap-6">

            <div className="shrink-0">
              <a href="/" aria-label="logo">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={120}
                  height={85}
                  className="h-[50px] w-auto"
                />
              </a>
            </div>

            <div className="-mt-6 md:-mt-20 md:shrink-0">
              <Image
                src="/lgw-footer-optimize.gif"
                alt="Lagos Games Week"
                width={243}
                height={100}
                className="w-[180px] md:w-[243px]"
              />
            </div>

          </div>

          {/* Event Info */}
          <div>
            <dl>
              <dt className="mb-2 font-semibold">Date</dt>

              <dd className="mb-6">
                {EVENT_START_DATE.getDate()} - {EVENT_END_DATE.getDate()}{" "}
                {formattedMonthYear}
              </dd>

              <dt className="mb-2 font-semibold">Venue</dt>

              <dd className="mb-6">
                The National Theatre <br />
                (Wole Soyinka Centre for Culture and <br />
                 Creative Arts),<br />
                  Iganmu, Lagos, Nigeria
              </dd>
            </dl>
          </div>

          {/* Social Links */}
          <div>
            <div className="font-bold">Follow</div>

            <div className="flex items-center gap-4 mt-2">

              <ul className="space-y-1">

                {SOCIAL_LINKS.map((sl) => (
                  <li key={sl.label}>
                    <a
                      href={sl.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="capitalize hover:text-white/70 transition"
                    >
                      {sl.label}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/10">

        <span className="text-gray-400 text-sm block py-4 text-center">
          {year} Copyright Lagos Games Week. All Rights Reserved
        </span>

      </div>

    </footer>
  );
}