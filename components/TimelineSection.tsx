"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type ScheduleItem = {
  time: string;
  title: string;
};

type Day = {
  title: string;
  date: string;
  venue: string;
  theme: string;
  schedule: ScheduleItem[];
};

type YearData = {
  speakers: any[];
  days: Day[];
};

const speakers2026 = [
  {
    name: "Marianne Ournac",
    role: "Technical Cooperation Officer",
    org: "French Embassy, Nigeria",
    img: "/speakers/marienne-ournac.png",
  },
  {
    name: "Soukayna Ennaji",
    role: "Business Dev. Manager",
    org: "Virtuos Games",
    img: "/speakers/soukayna-ennaji.png",
  },
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
];

const speakers2025: any[] = [
  {
    name: "Hugo Obi",
    role: "Technical Cooperation Officer",
    org: "French Embassy, Nigeria",
    img: "/speakers/hugo-obi.png",
  },
  {
    name: "Teddy Kossoko",
    role: "Business Dev. Manager",
    org: "Virtuos Games",
    img: "/speakers/teddy-kossoko.png",
  },
  {
    name: "Evans Kiragu",
    role: "Founder",
    org: "Maliyo Games",
    img: "/speakers/evans-kiragu.png",
  },
  {
    name: "Soukayna Ennaji",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/soukayna-ennaji.png",
  },
  {
    name: "Temi Afolabi",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/temi-afolabi.png",
  },
  {
    name: "Bukola Akingbade",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/bukola-akingbade.png",
  },
  {
    name: "Chris Diafouka",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/chris-diafouka.png",
  },
  {
    name: "Mickael Newton",
    role: "Founder",
    org: "Masseka and Gara Store",
    img: "/speakers/mickael-newton.png",
  },
];

const speakers2024: any[] = [
  {
    name: "Marianne Ournac",
    role: "Technical Cooperation Officer",
    org: "French Embassy, Nigeria",
    img: "/speakers/marienne-ournac.png",
  },
  {
    name: "Soukayna Ennaji",
    role: "Business Dev. Manager",
    org: "Virtuos Games",
    img: "/speakers/soukayna-ennaji.png",
  },
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
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
      {
        title: "Day 2",
        date: "19th June 2026 Friday",
        venue: "National Theatre, Lagos",
        theme: "PLAY WITHOUT BORDERS",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
      {
        title: "Day 3",
        date: "20th June 2026 Saturday",
        venue: "xxx",
        theme: "ESPORT FINALS",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
    ],
  },
  "2025": {
    speakers: speakers2025,
    days: [
      {
        title: "Day 1",
        date: "18th June 2025 Thursday",
        venue: "Xbox, Glover Road, Ikoyi",
        theme: "BUILD COMMUNITY",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
      {
        title: "Day 2",
        date: "19th June 2025 Friday",
        venue: "National Theatre, Lagos",
        theme: "PLAY WITHOUT BORDERS",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
      {
        title: "Day 3",
        date: "20th June 2025 Saturday",
        venue: "xxx",
        theme: "ESPORT FINALS",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
    ],
  },
  "2024": {
    speakers: speakers2024,
    days: [
      {
        title: "Day 1",
        date: "18th June 2024 Thursday",
        venue: "Xbox, Glover Road, Ikoyi",
        theme: "BUILD COMMUNITY",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
      {
        title: "Day 2",
        date: "19th June 2024 Friday",
        venue: "National Theatre, Lagos",
        theme: "PLAY WITHOUT BORDERS",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
        ],
      },
      {
        title: "Day 3",
        date: "20th June 2024 Saturday",
        venue: "xxx",
        theme: "ESPORT FINALS",
        schedule: [
          { time: "08:00 - 10:00", title: "Welcome Address" },
          { time: "10:30 - 12:30", title: "Panel Session: Building Ecosystem" },
          {
            time: "13:00",
            title: "Creating games merging African and Europeans creators, the Awalé Game Jam wrap up",
          },
          {
            time: "15:00 - 16:30",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
          {
            time: "17:00 - 18:00",
            title: "Pitch Stage Finals sponsored by Maliyo games",
          },
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

  const yearData = years[activeYear];

  return (
    <section className="bg-white py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4">

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
                  className="relative flex-1 md:flex-none min-w-[100px] md:min-w-[180px] px-6 md:px-16 py-3 md:py-6 text-sm md:text-lg font-light text-center"
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
        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {yearData.speakers.map((speaker, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3 text-center"
                >
                  <div className="w-full h-[200px] md:h-[290px] overflow-hidden mb-3">
                    <img
                      src={speaker.img}
                      className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition duration-300"
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
        <div className="mt-12 flex flex-col gap-6">
          {yearData.days.map((day, i) => {
            const open = openDay === i;
            return (
              <div key={i} className="relative group p-[10px]">

                {/* Static Grey Border */}
                <div className="absolute inset-0 border-[10px] border-gray-300 pointer-events-none" />

                {/* Animated Border */}
                <span className="absolute top-0 left-0 h-[10px] w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: tabColors[activeYear] }} />
                <span className="absolute top-0 left-0 w-[10px] h-0 transition-all duration-300 delay-300 group-hover:h-full" style={{ backgroundColor: tabColors[activeYear] }} />
                <span className="absolute top-0 right-0 w-[10px] h-0 transition-all duration-300 delay-300 group-hover:h-full" style={{ backgroundColor: tabColors[activeYear] }} />
                <span className="absolute bottom-0 left-0 h-[10px] w-0 transition-all duration-300 delay-600 group-hover:w-full" style={{ backgroundColor: tabColors[activeYear] }} />

                <div className="bg-white flex flex-col md:flex-row items-start md:items-center px-8 py-10 md:py-12 gap-8">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 rounded-full" />

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
                  className={`overflow-hidden transition-all duration-500 ${
                    open ? "max-h-[900px] md:max-h-[700px]" : "max-h-0"
                  }`}
                >
                  <div className="border border-black rounded-lg mt-4 mb-4 ml-0 md:ml-[96px] mr-0 md:mr-8">
                    {day.schedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col md:flex-row gap-3 md:gap-6 px-5 py-6 border-b border-black last:border-none"
                      >
                        <div className="text-xs font-semibold text-gray-600 md:min-w-[120px]">
                          {item.time}
                        </div>
                        <div className="text-sm text-gray-800">{item.title}</div>
                      </div>
                    ))}
                    <div className="flex justify-end pr-5 md:pr-8 pb-6 pt-4">
                      <button
                        onClick={() => setOpenDay(open ? null : i)}
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