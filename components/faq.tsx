"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type FaqItem = {
    value: string;
    title: string;
    content: string;
};

const faqItems: FaqItem[] = [
    {
        value: "item-1",
        title: "Are there age restrictions for attendees?",
        content: "No age restrictions; all are welcome to attend.",
    },
    {
        value: "item-2",
        title: "How can I become a Volunteer or Exhibitor?",
        content:
            "Send an email to hello@LagosGamesWeek.com for more information on how to get involved.",
    },
    {
        value: "item-3",
        title: "Are there sponsorship opportunities for B2B brands?",
        content:
            "Yes, we offer tailored sponsorship opportunities for B2B brands. Fill the form above to get in touch with us.",
    },
    {
        value: "item-4",
        title: "How do I stay updated on event announcements and schedule changes?",
        content:
            "Follow our official social media channels for real-time updates and contact hello@LagosGamesWeek.com for more updates.",
    },
    {
        value: "item-5",
        title: "What networking opportunities are available for B2B collaboration?",
        content:
            "Exclusive B2B networking sessions are scheduled. Visit the 'Events' section for details.",
    },
];

export default function Faq() {
    const [openItem, setOpenItem] = useState<string>("item-1");

    const toggleItem = (value: string) => {
        setOpenItem(openItem === value ? "" : value);
    };

    return (
<div className={`${hostGrotesk.className} w-full text-white`}>
            {faqItems.map((item) => {
                const isOpen = openItem === item.value;

                return (
                    <div key={item.value} className="border-b border-white/10 py-4">

                        {/* Trigger */}
                        <button
                            onClick={() => toggleItem(item.value)}
                            className="w-full text-left text-lg md:text-2xl flex justify-between items-center"
                        >
                            {item.title}

                            <span className="text-white/50">
                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </span>
                        </button>

                        {/* Content */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"
                                }`}
                        >
                            <p className="text-white/70 text-sm md:text-base">
                                {item.content}
                            </p>
                        </div>

                    </div>
                );
            })}

        </div>
    );
}