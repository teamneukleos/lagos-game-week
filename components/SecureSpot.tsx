import AnimatedLink from "@/components/ui/AnimatedLink";

const PITCH_STAGE_LINK = "#";
const INDIE_SHOWCASE_LINK = "#";
const VOLUNTEER_LINK = "#";

export default function SecureSpotSection() {
    return (
        <section className="relative bg-white z-20">
            <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">

                <h2 className="w-[min(100%,15ch)] font-display text-black text-4xl md:text-5xl font-medium mb-12">
                    Secure Your Spot Sign Up
                </h2>

                <ul className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">

                    {/* CARD 1 */}
                    <li className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px] snap-start">
                        <div className="bg-[#FFAF4D] rounded-xl p-4 h-full">

                            <img
                                src="/images/spot-1.png"
                                width={368}
                                height={368}
                                className="rounded-sm mb-5 w-full object-cover"
                                alt="Pitch Stage"
                            />

                            <h3 className="text-sm md:text-base mb-px text-black font-semibold font-display">
                                Pitch Stage
                            </h3>

                            <p className="text-base md:text-lg mb-6 text-black">
                                Structured live presentation to pitch games to a panel of experts.
                            </p>

                            <AnimatedLink
                                href={PITCH_STAGE_LINK}
                                className="!bg-black text-white hover:bg-black/80 group-hover:bg-black/80"
                                target="_blank"
                            >
                                Register
                            </AnimatedLink>

                        </div>
                    </li>

                    {/* CARD 2 */}
                    <li className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px] snap-start">
                        <div className="bg-[#FF64C9] rounded-xl p-4 h-full">

                            <img
                                src="/images/spot-2.png"
                                width={368}
                                height={368}
                                className="rounded-sm mb-5 w-full object-cover"
                                alt="Indie Game Showcase"
                            />

                            <h3 className="text-sm md:text-base mb-px text-black font-semibold font-display">
                                Indie Game Showcase
                            </h3>

                            <p className="text-base md:text-lg mb-6 text-black">
                                Shortlisted studios and communities can showcase their games at no cost
                            </p>

                            <AnimatedLink
                                href={INDIE_SHOWCASE_LINK}
                                className="!bg-black text-white hover:bg-black/80 group-hover:bg-black/80"
                                target="_blank"
                            >
                                Register your studio
                            </AnimatedLink>

                        </div>
                    </li>

                    {/* CARD 3 */}
                    <li className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px] snap-start">
                        <div className="bg-[#00ABF0] rounded-xl p-4 h-full">

                            <img
                                src="/images/spot-3.png"
                                width={368}
                                height={368}
                                className="rounded-sm mb-5 w-full object-cover"
                                alt="Volunteers"
                            />

                            <h3 className="text-sm md:text-base mb-px text-black font-semibold  font-display">
                                Volunteers and Exhibitors
                            </h3>

                            <p className="text-base md:text-lg mb-6 text-black">
                                Interested in being a volunteer or an exhibitor at Lagos Games Week?
                            </p>

                            <AnimatedLink
                                href={VOLUNTEER_LINK}
                                className="!bg-black text-white hover:bg-black/80 group-hover:bg-black/80"
                                target="_blank"
                            >
                                Contact Us
                            </AnimatedLink>

                        </div>
                    </li>

                    {/* CARD 4 */}
                    <li className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px] snap-start">
                        <div className="bg-[#E799FF] rounded-xl p-4 h-full">

                            <img
                                src="/images/spot-4.png"
                                width={368}
                                height={368}
                                className="rounded-sm mb-5 w-full object-cover"
                                alt="Game Jam"
                            />

                            <h3 className="text-sm md:text-base mb-px text-black font-semibold  font-display">
                                Game Jam
                            </h3>

                            <p className="text-base md:text-base mb-6 text-black">
                                A hands-on game development challenge designed for learning,
                                collaboration, and creativity.
                            </p>

                            <AnimatedLink
                                href={VOLUNTEER_LINK}
                                className="!bg-black text-white hover:bg-black/80 group-hover:bg-black/80"
                                target="_blank"
                            >
                                Contact Us
                            </AnimatedLink>

                        </div>
                    </li>

                    {/* CARD 5 */}
                    <li className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px] snap-start">
                        <div className="bg-[#D5D1D1] rounded-xl p-4 h-full">

                            <img
                                src="/images/spot-5.png"
                                width={368}
                                height={368}
                                className="rounded-sm mb-5 w-full object-cover"
                                alt="Next Gen Submit"
                            />

                            <h3 className="text-sm md:text-base mb-px text-black font-semibold  font-display">
                                Next Gen Submit
                            </h3>

                            <p className="text-base md:text-lg mb-6 text-black">
                                A platform designed to inspire and equip the next generation of
                                game and tech creators.
                            </p>

                            <AnimatedLink
                                href={INDIE_SHOWCASE_LINK}
                                className="!bg-black text-white hover:bg-black/80 group-hover:bg-black/80"
                                target="_blank"
                            >
                                Contact Us
                            </AnimatedLink>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}