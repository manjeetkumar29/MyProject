const posts = [
    {
        title: "Comet C/2023 E3 comes close to Earth",
        desc: "In early February, the comet C/2023 E3 will travel within about 26.4 million miles of our planet—the closest it's been to Earth since Homo sapiens began settling in Europe and Asia from Africa, according to KTLA’s Eric Henrikson and Cameron Kiszla.",
        img: "/i/1.1.webp",
        date: "Feb 02 2023",
        href: "javascript:void(0)"
    },
    {
        title: "Venus-Jupiter conjunction",
        desc: "In astronomy, a conjunction occurs when a planet appears close to a moon, another planet or a star. Conjunctions occur fairly frequently and have “no profound astronomical significance, but they are nice to view,” according to NASA.",
        img: "/i/2.1.webp",
        date: " April 6 2023",
        href: "javascript:void(0)"
    },
    {
        title: "Lyrid meteor shower",
        desc: "Meteor showers occur when the Earth passes through debris left behind from comets and asteroids, which is why they occur at around the same time each year. The Lyrids originate from the comet Thatcher, which orbits the sun about every 415 years. This is one of the oldest recorded showers, with observations dating back to 687 B.C.E., writes Daisy Dobrijevic for Space.com.",
        img: "/i/3.1.webp",
        date: "April 15 to 29 2023",
        href: "javascript:void(0)"
    },
    {
        title: "Perseid meteor shower",
        desc: "The Perseid meteor shower is one of the best of the year. Bright, frequent meteors with long tails will light up the sky at rates of about 50 to 100 per hour. The shower happens as Earth passes through debris left behind by the comet Swift-Tuttle, and it peaks as the Earth moves through the densest portion. Last year’s Perseids coincided with the full moon, making some shooting stars difficult to see. But this year, the shower will reach its spectacular peak two days before the new moon on August 11 and 12.",
        img: "/i/4.1.webp",
        date: "July 14 to September 1 2023",
        href: "javascript:void(0)"
    },
    {
        title: "Orionids",
        desc: "The Orionids are not typically as strong as the Perseids or the Geminids, but they are still worth watching. From a dark location, viewers can see about 10 to 20 meteors per hour at the shower's peak, which falls around the morning of October 22, per EarthSky's Deborah Byrd.",
        img: "/i/5.1.webp",
        date: "September 26 to November 2023",
        href: "javascript:void(0)"
    },
    {
        title: "Annular solar eclipse",
        desc: "In mid-October, an annular solar eclipse will be visible from the southwestern U.S. Solar eclipses occur when the moon passes between the Earth and the sun. But because the moon won’t entirely cover the sun this year, a dazzling glowing circle, or a “ring of fire,” will be visible from certain locations. Such an annular solar eclipse can last for up to 12 minutes and 30 seconds, per Space.com’s Dobrijevic and Joe Rao, though this year, the maximum duration is about five minutes in the U.S.",
        img: "/i/6.1.webp",
        date: "October 14 2023",
        href: "javascript:void(0)"
    },
]

export default function Card2() {
    return (
        <section className="py-32">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
                    <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                    <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                            Subscribe
                        </button>
                    </form>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}