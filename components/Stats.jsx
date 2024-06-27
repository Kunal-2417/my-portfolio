"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Interships experience",
    },
    {
        num: 233,
        text: "Code commits on GitHub",
    },
    // {
    //     num: 100,
    //     text: "Happy clients",
    // },
];

const Stats = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => (
                        <div
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
                            key={index}
                        >
                            <CountUp
                                // start={0}
                                end={stat.num}
                                duration={2.75}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className="leading-snug text-white/80">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
