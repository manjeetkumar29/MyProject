
export default function Cards() {

    const posts = [
        {
            title: "Quadrantids Meteor Shower ",
            desc: "This is often one of the strongest meteor showers of the year, capable of showcasing up to 120 meteors per hour at its peak. The Quadrantids are active between December 27 and January 12, but the peak is usually quite narrow, lasting only a few hours. This makes the timing of the viewing crucial. In 2024, the peak is set for around 4:00 AM EST on January 4.",
            img: "/images/Quadrantids Meteor Shower.jpg",
            authorLogo: "/images/ho.jpg",
            date: "Jan 3 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Total solar eclipse ",
            desc: "This eclipse will trace a narrow path of totality across 13 states. The event will last around five minutes. This duration is almost double the length of some previous eclipses.",
            img: "/images/2_image.jpg",
            authorLogo: "/images/ho.jpg",
            date: "April 4 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Perseid Meteor Shower (August 12 — 13)",
            desc: "The Perseids is an annual astronomical event that is eagerly anticipated by stargazers in the US and around the world. It is one of the most impressive meteor showers of the year because it can produce a high rate of shooting stars that frequently leave persistent colorful trails across the sky.",
            img: "/images/image3.jpg",
            authorLogo: "/images/ho.jpg",
            date: "August 12 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Saturn at opposition (September 8)",
            desc: "Stargazers should be able to observe Saturn more clearly on this night, even with unaided eyes, by looking in the east-southeast direction after sunset. It will stand out in the sky, appearing as a bright yellowish star.",
            img: "/images/image4.jpg",
            authorLogo: "/images/ho.jpg",
            date: "September 8 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Taurids Meteor Shower (November 4-5)",
            desc: "Annual Event Of Leonid Meteor Shower Can Be Seen On 16-17th November. Leonid Meteor Shower Is Visible Towards The Constellation Leo, The Lion. During Leonid Meteor Shower, Earth Will Pass Through A Stream Of Debris Which Is Left Behind By Comet Tempel-Tuttle.",
            img: "/images/image5.jpg",
            authorLogo: "/images/ho.jpg",
            date: "November 4 2024",
            href: "javascript:void(0)"
        },
        {
            title: "about New moon (December 30)",
            desc: "On this day the Moon was in a First Quarter phase. This phase occurs roughly 7 days after the New Moon when the moon is one quarter of the way through its orbit around the earth",
            img: "/images/image6.jpg",
            authorLogo: "/images/ho.jpg",
            
            date: "December 30 2024",
            href: "javascript:void(0)"
        }
    ]
    
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                Check out some of the astronomical events happening in 2024! 
                </h1>
                <p className="mt-3 text-gray-500">
                    Blogs that are loved by the community. Updated every hour.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-white text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-black">
                                        {items.title}
                                    </h3>
                                    <p className="text-white text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
