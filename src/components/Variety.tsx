import VarietyCard from "./VarietyCard"

const data = [
    {
        icon: "fi-rr-document",
        title: "Document",
        description: "Write a book, create a guide"
    },
    {
        icon: "fi-rr-laptop-mobile",
        title: "Mobile App",
        description: "Design a mobile app, build a website"
    },
    {
        icon: "fi-tr-music-file",
        title: "Music",
        description: "Compose a song, record an album"
    },
    {
        icon: "fi-rr-film",
        title: "Video",
        description: "SProduce a movie, shoot a short film"
    },
    {
        icon: "fi-rr-graphic-style",
        title: "Graphic",
        description: "Draw an illustration, make a comic"
    },
    {
        icon: "fi-rr-square-code",
        title: "Code",
        description: "Develop a software, program a tool"
    },
    {
        icon: "fi-tr-gamepad",
        title: "Game",
        description: "Build a game, design a level"
    },
    {
        icon: "fi-rs-shield-check",
        title: "Safety",
        description: "Provide a security service, offer a warranty"
    },
    {
        icon: "fi-rr-calendar-day",
        title: "Event",
        description: "Organize an event, plan a conference"
    },
    {
        icon: "fi-br-stats",
        title: "Statistics",
        description: "Analyze data, visualize trends"
    },
]

const Variety = () => {
    return (
        <div className='container md:w-[85%]  flex flex-col justify-center mx-auto gap-8 px-10 py-8 md:py-12'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8'>
                {data.map((item, index) => (
                    <VarietyCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>  
        </div>
    )
}

export default Variety