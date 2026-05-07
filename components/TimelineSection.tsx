"use client";

import { useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type ScheduleItem = {
  time: string;
  title: string;
  speakers?: string;
};

type Day = {
  title: string;
  date: string;
  venue: string;
  theme: string;
  img: string;
  schedule: ScheduleItem[];
};

type YearData = {
  speakers: any[];
  days: Day[];
};

const speakers2026 = [
  {
    name: "Hugo Obi",
    role: "Founder",
    org: "Maliyo Games",
    img: "/speakers/hugo-obi.png",
  },
  {
    name: "Bukola Akingbade",
    role: "Founder",
    org: "Kucheza Gaming",
    img: "/speakers/bukola-akingbade.png",
  },
  {
    name: "Xavier Marot",
    role: "Chief Production Officer",
    org: "Focus Entertainment",
    img: "/speakers/xavier-marot.png",
  },
  {
    name: "Thiago De Freitas",
    role: "Group CEO",
    org: "OV Entertainment",
    img: "/speakers/thiago-de-freitas.png",
  },
  {
    name: "H.M. Hannatu Musawa ",
    role: "Honourable Minister",
    org: "Art, Culture, Tourism and Creative Economy",
    img: "/speakers/hannatu-musawa.png",
  },
  {
    name: "Matthew Kreutter",
    role: "Director, Learning and Engagement",
    org: "Games for Change",
    img: "/speakers/matthew-kreutter.png",
  },
  {
    name: "Amy Duncan",
    role: "Programmes director",
    org: "Games for Change Africa",
    img: "/speakers/amy-duncan.png",
  },
  {
    name: "Justin Bourque",
    role: "Learning programs lead",
    org: "",
    img: "/speakers/justin-bourque.png",
  },
  {
    name: "Christophe Pecot",
    role: "Cultural Attaché",
    org: "French Embassy in Nigeria",
    img: "/speakers/christophe-pecot.png",
  },
];

const speakers2025: any[] = [
  {
    name: "Hugo Obi",
    role: "Founder",
    org: "Maliyo Games",
    img: "/speakers/hugo-obi.png",
  },
  {
    name: "Teddy Kossoko",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/teddy-kossoko.png",
  },
  {
    name: "Evans Kiragu",
    role: "CEO and Founder",
    org: "Mekan Games",
    img: "/speakers/evans-kiragu.png",
  },
  {
    name: "Soukayna Ennaji",
    role: "Bussiness Dev. Manager",
    org: "Virtuos Games",
    img: "/speakers/soukayna-ennaji.png",
  },
  {
    name: "Temi Afolabi",
    role: "Xbox Global Expansion",
    org: "(Africa & Middle East)",
    img: "/speakers/temi-afolabi.png",
  },
  {
    name: "Bukola Akingbade",
    role: "Founder",
    org: "Kucheza Gaming",
    img: "/speakers/bukola-akingbade.png",
  },
  {
    name: "Chris Diafouka",
    role: "Gaming Marketing Specialist",
    org: "Red Bull",
    img: "/speakers/chris-diafouka.png",
  },
  {
    name: "Mickael Newton",
    role: "Social Impact Manager",
    org: "Ubisoft",
    img: "/speakers/mickael-newton.png",
  },
  {
    name: "Marianne Ournac",
    role: "Technical Cooperation Officer",
    org: "French Embassy in Nigeria",
    img: "/speakers/marianne-ournac.png",
  },
];

const speakers2024: any[] = [
  {
    name: "David Olamide",
    role: "Co-Founder",
    org: "Dimension11",
    img: "/speakers/david-olamide.png",
  },
  {
    name: "Cordel Robbin-Coker",
    role: "Co-Founder and CEO",
    org: " Carry1st",
    img: "/speakers/cordel-robbin-coke.png",
  },
  {
    name: "Tolu Olowofoye",
    role: "Founder",
    org: "Kugali",
    img: "/speakers/tolu-olowofoye.png",
  },
  {
    name: "Oscar Michael",
    role: "Founder",
    org: "Africacomicade",
    img: "/speakers/oscar-michael.png",
  },
  {
    name: "Hugo Obi",
    role: "Founder",
    org: "Maliyo games",
    img: "/speakers/hugo-obi.png",
  },
  {
    name: "Bukola Akingbade",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/bukola-akingbade.png",
  },
];

const years: Record<string, YearData> = {
  "2026": {
    speakers: speakers2026,
    days: [
      {
        title: "Day 1",
        date: "18th June 2026 Thursday",
        venue: "Xbox, Glover Road, Ikoyi",
        theme: "BUILD COMMUNITY",
        img: "/images/day-2026.png",
        schedule: [
          { time: "-", title: "-", speakers: "-" },
        ],
      },
      {
        title: "Day 2",
        date: "19th June 2026 Friday",
        venue: "National Theatre, Lagos",
        theme: "PLAY WITHOUT BORDERS",
        img: "/images/day-2026-2.png",
        schedule: [
          { time: "08:30:00", title: "Arrivals + Registration", speakers: "Getting settled in venue" },
          { time: "09:15:00", title: "Setting the Scene + ice breaker", speakers: "Setting the Scene + ice breaker" },
          { time: "09:20:00", title: "Message from our Sponsor", speakers: "Opening Address: French Embassy in Nigeria" },
          { time: "09:30:00", title: "Welcome Address", speakers: "Welcome to Lagos Games Week by FMACTCE" },
          { time: "09:40:00", title: "Keynote Address", speakers: "Finding El Dorado as an industry" },
          { time: "10:15:00", title: "Next Gen Summit Panel session", speakers: "Career pathway panel discussion" },
          { time: "10:45:00", title: "Talks", speakers: "How Games Can Transform a Nation: The Kokku Story" },
          { time: "11:05:00", title: "Q&A - 10 mins", speakers: "Q&A - 10 mins" },
          { time: "11:20:00", title: "Panel Session", speakers: "Finding El Dorado" },
          { time: "12:00:00", title: "Talks", speakers: "The Hidden Opportunity: How XD Can Build Africa's Multi-Million-Dollar Game Studios" },
          { time: "12:30:00", title: "Q&A - 10 mins", speakers: "Q&A - 10 mins" },
          { time: "12:45:00", title: "Break", speakers: "Break" },
          { time: "13:30:00", title: "Panel Session", speakers: "Level Up: How Creators Can Turn Passion into Profit" },
          { time: "14:10:00", title: "Talks", speakers: "The Hidden Economy of Play: What Verve Has Learned About Nigeria's Gaming Consumers" },
          { time: "14:25:00", title: "Fireside chats", speakers: "From Stage to Screen to Studio: The Power of Diverse Experiences" },
          { time: "14:55:00", title: "Panel session", speakers: "TBC" },
          { time: "15:25:00", title: "Next Gen Summit", speakers: "Arrivals" },
          { time: "15:30:00", title: "Next Gen Summit", speakers: "Final Address and Awards" },
          { time: "15:45:00", title: "Talk and conferencing ends", speakers: "Talk and conferencing ends" },
          { time: "17:00:00", title: "Exhibition Area Closes", speakers: "Exhibition Area Closes" },
        ],
      },
    ],
  },
  "2025": {
    speakers: speakers2025,
    days: [
      {
        title: "Day 1",
        date: "19th June 2025 Thursday",
        venue: "Microsoft Office, Lagos",
        theme: "BUILD COMMUNITY",
        img: "/images/day-2025.png",
        schedule: [
          { time: "09:30:00", title: "Welcome Address", speakers: "Bukola Akingbade, Lagos Games Week" },
          { time: "10:30:00", title: "ID@Xbox", speakers: "Temi Afolabi, Xbox" },
          { time: "11:45:00", title: "Panel Session: Pathways to Progress: Building a Games Ecosystem That Fits Our Context", speakers: "Soukayna Ennaji (Virtuos Games), Teddy Kossoko (Gara Store), Temi Afolabi (Xbox), Marianne Ournac (French Embassy)" },
          { time: "12:30", title: "Games for Change", speakers: "Echoes Game Jam winners Africa Comicade & GamesConnect Africa" },
          { time: "13:45:00", title: "Creating games merging African and European creators, the Awalé Game Jam wrap up", speakers: "Mickael Newton, Ubisoft" },
          { time: "14:35:00", title: "Pitch Stage Finals sponsored by Maliyo Games", speakers: "The Jury Hugo Obi, Temi Afolabi, Teddy Kossoko, Marianne Ournac, Soukayna Ennaji" },
        ],
      },
      {
        title: "Day 2",
        date: "20th June 2025 Friday",
        venue: "Balmoral Convention Center, Lagos",
        theme: "TALKS AND CONFERENCING",
        img: "/images/day-2025-2.png",
        schedule: [
          { time: "09:30:00", title: "Welcome Address", speakers: "Bukola Akingbade, Currator, Lagos Games Week" },
          { time: "10:30:00", title: "Message from our Sponsor", speakers: "Opening Address: French Embassy in Nigeria" },
          { time: "11:45:00", title: "Keynote Session: The State of the Nigerian/African Games Industry", speakers: "Hugo Obi, Maliyo Games" },
          { time: "12:30:00", title: "The State of the Nigerian/African Games Industry", speakers: "Hugo Obi, Teddy Kossoko, Vulane Mthembu, Temi Afolabi, Soukayna Ennaji" },
          { time: "13:45:00", title: "Social Innovation in gaming: brilliant examples from indies and major video game companies", speakers: "Mickael Newton, Ubisoft" },
          { time: "14:35:00", title: "Gaming in Africa: From Hustle to Industry", speakers: "Teddy Kossoko, Masseka / Gara Store" },
          { time: "15:35:00", title: "Marketing Authenticity in Games", speakers: "Chris Diafouka, Redbull" },
          { time: "16:00:00", title: "Lessons from a Global Games Outsourcing Partner", speakers: "Soukayna Ennaji, Virtuos Games" },
          { time: "16:30:00", title: "Esports Panel", speakers: "Game Curated session" },
          { time: "17:30:00", title: "The Creator Economy", speakers: "Don Senti (Roblox Creator)" },
        ],
      },
      {
        title: "Day 3",
        date: "21st June 2025 Saturday",
        venue: "xxx",
        theme: "ESPORT FINALS",
        img: "/images/day-2025-3.png",
        schedule: [
          { time: "Morning", title: "Gamr X", speakers: "Season 4" },
          { time: "Afternoon", title: "Gamr X", speakers: "Season 4" },
          { time: "Evening", title: "Gamr X", speakers: "Season 4" },
        ],
      },
    ],
  },
  "2024": {
    speakers: speakers2024,
    days: [
      {
        title: "Day 1",
        date: "2nd May 2024 Thursday",
        venue: "Landmark Event Center, Lagos",
        theme: "B2B NETWORKING AND COCKTAIL",
        img: "/images/day-2024.png",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          { time: "13:00", title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up" },
          { time: "15:00 - 16:30", title: "Pitch Stage Finals sponsored by Maliyo games" },
          { time: "17:00 - 18:00", title: "Pitch Stage Finals sponsored by Maliyo games" },
        ],
      },
      {
        title: "Day 2",
        date: "3rd May 2024 Friday",
        venue: "Landmark Event Center, Lagos",
        theme: "TALKS AND CONFERENCING",
        img: "/images/day-2024-2.png",
        schedule: [
          { time: "09:15:00", title: "Keynote Address: The Future of African Gaming: Challenges or Opportunities", speakers: "Hugo Obi, Founder, Maliyo Games" },
          { time: "09:30:00", title: "Panel Session: The Future of African Gaming: Challenges or Opportunities", speakers: "Hugo Obi (Maliyo Games), Tolu Olowofoyeku (Kugali Media), David Olamide (Dimension11), Oscar Michael (AfricaComicade), Moderator: Oluseye Soyede-Johnson" },
          { time: "10:00:00", title: "Keynote Speaker: Standing out in visual entertainment - The Ladder Approach", speakers: "Tolu Olowofoyeku, Co-founder, Kugali" },
          { time: "10:45:00", title: "Government Address: Commissioner for Youth and Social Development, Lagos State", speakers: "Hon. Mobolaji Ogunlende - Honorable" },
          { time: "11:15:00", title: "Keynote Speaker: Publishing: Unlocking Africa's Mobile Gaming Market", speakers: "Cordel Robbin-Coker, Co-founder & CEO, Carry1st" },
          { time: "11:45:00", title: "TikTok Session", speakers: "Oscar Michael" },
          { time: "13:05:00", title: "Panel session: GAME ON: The Rise of Mobile Gaming", speakers: "Moderated by Adebayo Onigbanjo, Founder, 10N8E, Edu Shola (Founder, Deluxe Creations), Folarin Aiyegbusi (Head of Startup Ecosystem, Google Africa), Oladele Oluwadamilola (Begho) (Esports professional player), Tosin Oyesanya (Queen of Venus) (Gaming content creator)" },
          { time: "14:20:00", title: "Origin story: why we chose to build the Legends of Orisha", speakers: "David Olamide, Co-founder, Dimension11" },
          { time: "15:00:00", title: "Panel Session: Legal Considerations & IP: Setting up a games studio to fundraise", speakers: "Banwo & Ighodalo Team, Vanessa Obi, Ada Aguocha, Ayomikun Ogunkanmi, Moderator: Oscar Michael (AfricaComicade)" },
          { time: "16:00:00", title: "Game Pitches & Showcase", speakers: "" },
          { time: "17:00:00", title: "Studio Highlights", speakers: "" },
          { time: "20:00:00", title: "Award Night: Carven" },
        ],
      },
      {
        title: "Day 3",
        date: "4th May 2024 Saturday",
        venue: "xxx",
        theme: "The XHODUS WAY - GAMR X3",
        img: "/images/day-2024-3.png",
        schedule: [
          { time: "Morning", title: "Gamr X", speakers: "Season 3" },
          { time: "Afternoon", title: "Gamr X", speakers: "Season 3" },
          { time: "Evening", title: "Gamr X", speakers: "Season 3" },
        ],
      },
    ],
  },
};

const tabColors: Record<string, string> = {
  "2026": "#FFAF4D",
  "2025": "#FF64C9",
  "2024": "#1EA7D7",
};

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState("2026");
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [AutoScroll({ stopOnInteraction: false })]
  );

  // Refs for each day card so we can scroll back to them on close
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);

  const yearData = years[activeYear];

  const handleHideSchedule = (i: number) => {
    // Scroll the card into view first, then collapse after a short delay
    dayRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setOpenDay(null), 300);
  };

  return (
    <section id="timeline-section" className="bg-white py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <h2 className="text-2xl md:text-3xl text-black font-bold mb-3">
              TIMELINE AND SCHEDULE
            </h2>
            <p className="text-sm text-black mb-4">
              Each year, we bring together the most audacious thinkers, doers
              and investors in the Video Games Ecosystem.
            </p>
            <div className="w-16 h-[3px] bg-gray-300" />
          </div>

          {/* YEAR TABS */}
          <div className="flex flex-wrap md:flex-nowrap text-black w-full h-[60px] md:h-[90px] md:w-auto mt-4 md:mt-0">
            {["2026", "2025", "2024"].map((year) => {
              const color = tabColors[year];
              return (
                <button
                  key={year}
                  onClick={() => {
                    setActiveYear(year);
                    setOpenDay(null);
                  }}
                  className="relative flex-1 md:flex-none min-w-[100px] md:min-w-[180px] px-6 md:px-16 py-3 md:py-6 text-sm md:text-lg font-semibold text-center"
                  style={{ background: color }}
                >
                  {year}
                  {activeYear === year && (
                    <div
                      className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                      style={{ background: color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SPEAKERS */}
        <div id="speakers" className="mt-16 scroll-mt-20">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {yearData.speakers.map((speaker, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_100%] lg:flex-[0_0_25%] min-w-0 px-3 text-center"
                >
                  <div className="w-full aspect-[3/3] overflow-hidden mb-3">
                    <img
                      src={speaker.img}
                      className="w-full h-full object-cover object-top md:grayscale md:hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <p className="font-semibold text-black">{speaker.name}</p>
                  <p className="text-sm text-gray-600">{speaker.role}</p>
                  <p className="text-sm text-gray-600">{speaker.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DAY CARDS */}
        <div id="schedule" className="mt-12 flex flex-col gap-6 scroll-mt-20">
          {yearData.days.map((day, i) => {
            const open = openDay === i;
            return (
              <div
                key={i}
                ref={(el) => { dayRefs.current[i] = el; }}
                className="relative group px-2 scroll-mt-20"
              >
                <div className="relative p-[10px]">

                  {/* Static Grey Border */}
                  <div className="absolute inset-0 border-[10px] border-gray-300 pointer-events-none" />

                  {/* Animated Border */}
                  <span className="absolute top-0 left-0 h-[10px] w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: tabColors[activeYear] }} />
                  <span className="absolute top-0 left-0 w-[10px] h-0 transition-all duration-300 delay-300 group-hover:h-full" style={{ backgroundColor: tabColors[activeYear] }} />
                  <span className="absolute top-0 right-0 w-[10px] h-0 transition-all duration-300 delay-300 group-hover:h-full" style={{ backgroundColor: tabColors[activeYear] }} />
                  <span className="absolute bottom-0 left-0 h-[10px] w-0 transition-all duration-300 delay-600 group-hover:w-full" style={{ backgroundColor: tabColors[activeYear] }} />

                  <div className="bg-white flex flex-col md:flex-row items-start md:items-center px-8 py-10 md:py-12 gap-8">

                    {/* Day image */}
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={day.img}
                        alt={day.theme}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">
                        <span className="font-bold text-black">{day.title}</span>{" "}
                        {day.date}
                      </p>
                      <h3 className="text-xl md:text-3xl text-black font-bold">
                        {day.theme}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 md:items-end">
                      <p className="text-sm text-gray-600">Venue: {day.venue}</p>
                      {!open && (
                        <button
                          onClick={() => setOpenDay(i)}
                          className="border px-4 py-2 text-xs text-black tracking-widest"
                        >
                          SHOW SCHEDULE
                        </button>
                      )}
                    </div>
                  </div>

                  {/* SCHEDULE */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[6000px]" : "max-h-0"}`}
                  >
                    <div className="border border-black rounded-lg mt-4 mb-4 ml-0 md:ml-[96px] mr-0 md:mr-8">
                      {day.schedule.map((item, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-1 md:grid-cols-[150px_1fr_220px] border-b border-black last:border-none"
                        >
                          <div className="px-5 py-4 md:py-6 text-xs font-semibold text-gray-600 md:border-r md:border-black">
                            {item.time}
                          </div>
                          <div className="px-5 py-4 md:py-6 text-sm text-gray-800 md:border-r md:border-black">
                            {item.title}
                          </div>
                          <div className="px-5 py-4 md:py-6 text-sm text-gray-700">
                            {item.speakers || "—"}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end pr-5 md:pr-8 pb-6 pt-4">
                      <button
                        onClick={() => open ? handleHideSchedule(i) : setOpenDay(i)}
                        className="border px-4 py-2 text-xs text-black tracking-widest"
                      >
                        {open ? "HIDE SCHEDULE" : "SHOW SCHEDULE"}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}