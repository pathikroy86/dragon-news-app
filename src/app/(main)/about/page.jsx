import React from 'react';

export const metadata = {
    title: "About Dragon News",
    description: "Learn about Dragon News and our commitment to clear, responsible journalism.",
};

const editorialValues = [
    {
        title: "Independent reporting",
        description: "We focus on verified stories, balanced context, and reporting that keeps readers ahead of the conversation.",
    },
    {
        title: "Reader-first coverage",
        description: "Our newsroom organizes national, world, sports, culture, and technology updates so every story is easy to scan and trust.",
    },
    {
        title: "Fast, useful updates",
        description: "Breaking stories are surfaced quickly while deeper articles explain what changed, why it matters, and what may come next.",
    },
];

const newsroomStats = [
    { value: "24/7", label: "News monitoring" },
    { value: "6+", label: "Editorial sections" },
    { value: "100%", label: "Reader focused" },
];

const AboutPage = () => {
    return (
        <main className="w-11/12 md:w-10/12 mx-auto pb-16">
            <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
                <div className="bg-[#f6f6f6] px-6 py-10 md:px-10 md:py-14">
                    <p className="text-[#D72050] font-semibold uppercase tracking-wider text-sm">About Dragon News</p>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#403F3F] leading-tight">
                        Journalism that helps readers see the full story.
                    </h1>
                    <p className="mt-5 text-[#706F6F] text-lg leading-8 max-w-3xl">
                        Dragon News is a modern digital news portal built for readers who want timely headlines without losing the context behind them. We bring together daily updates, category-based coverage, and clear article summaries in one focused reading experience.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="badge badge-lg bg-[#D72050] text-white border-0">Trusted updates</span>
                        <span className="badge badge-lg bg-white text-[#403F3F] border-[#E7E7E7]">Clear categories</span>
                        <span className="badge badge-lg bg-white text-[#403F3F] border-[#E7E7E7]">Daily coverage</span>
                    </div>
                </div>

                <aside className="bg-[#403F3F] text-white px-6 py-10 md:px-8 flex flex-col justify-between">
                    <div>
                        <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold">Our promise</p>
                        <h2 className="mt-4 text-3xl font-bold leading-snug">Fearless reporting. Fair perspective.</h2>
                    </div>
                    <p className="mt-10 text-gray-200 leading-7">
                        We value accuracy, useful context, and a calm reading experience that lets the facts lead.
                    </p>
                </aside>
            </section>

            <section className="grid gap-4 sm:grid-cols-3 mt-8">
                {newsroomStats.map((stat) => (
                    <div key={stat.label} className="bg-base-200 px-6 py-7 text-center">
                        <p className="text-4xl font-bold text-[#D72050]">{stat.value}</p>
                        <p className="mt-2 text-[#706F6F] font-medium">{stat.label}</p>
                    </div>
                ))}
            </section>

            <section className="mt-12">
                <div className="max-w-3xl">
                    <p className="text-[#D72050] font-semibold uppercase tracking-wider text-sm">What guides us</p>
                    <h2 className="mt-3 text-3xl font-bold text-[#403F3F]">Built around clarity, speed, and accountability.</h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3 mt-7">
                    {editorialValues.map((value) => (
                        <article key={value.title} className="border border-[#E7E7E7] bg-white p-6">
                            <h3 className="text-xl font-bold text-[#403F3F]">{value.title}</h3>
                            <p className="mt-3 text-[#706F6F] leading-7">{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-12 bg-base-200 px-6 py-8 md:px-10 md:py-10">
                <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                    <h2 className="text-3xl font-bold text-[#403F3F]">Why this app exists</h2>
                    <p className="text-[#706F6F] leading-8 text-lg">
                        Dragon News was designed as a clean news destination where readers can move from breaking headlines to detailed reporting with minimal friction. The experience keeps navigation simple, articles readable, and categories close at hand.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
