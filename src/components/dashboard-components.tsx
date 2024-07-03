import Image from "next/image";
import StatsCard from "./StatsCard";


const optionsData = [
    {
        stats: "Sales",
        numbers: "$3,000",
        percentage: "30d",
    },
    {
        stats: "Traffic",
        numbers: "12,000",
        percentage: "30d",
    },
]


export default function DashboardComponents() {



    return (
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-4 px-10 py-8 md:py-12" >

            <h1 className=" text-xl md:text-3xl lg:text-4xl">Welcome Codestam,</h1>

            <div className=" hidden md:flex justify-around py-2 border-b-2" >
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Dashboard
                </button>
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Add Products
                </button>
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Products
                </button>
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Payout
                </button>
            </div>


            <div className=" flex flex-col gap-6">
                <h1 className=" text-2xl font-bold text-start">Overview</h1>
                <div className="grid grid-cols-2 text-left gap-4 md:gap-8">
                    {optionsData.map((option, index) => (
                        <StatsCard key={index} stats={option.stats} numbers={option.numbers} percentage={option.percentage} />
                    ))}
                </div>
            </div>

            <div className=" flex flex-col md:flex-row gap-4 w-full">
                <div className=" md:w-[50%]">
                    <Image className=" w-full h-full" src="/graph1.png" alt="stats" />
                </div>
                <div className=" md:w-[50%]">
                    <Image className=" w-full h-full" src="/graph2.png" alt="stats" />
                </div>
            </div>

            <div className=" flex flex-col items-center gap-6 mt-16">
                <div className=" flex gap-4 justify-around w-full text-gray-400">
                    <button>About</button>
                    <button>Blog</button>
                    <button>Terms and Service</button>
                    <button>Privacy Policy</button>
                    <button>Help Center</button>
                </div>
                <div>
                    @2023 Codestam Store
                </div>
                <div className=" flex w-full justify-center gap-6">
                    <i className="fi fi-brands-twitter"></i>
                    <i className="fi fi-brands-facebook"></i>
                    <i className="fi fi-brands-instagram"></i>
                    <i className="fi fi-brands-youtube"></i>
                </div>

            </div>


        </div>
    )
}