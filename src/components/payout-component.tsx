import VarietyCard from "./VarietyCard";
import RequirementsCard from "./requirements-card";


const data = [
    {
        title1: "Pending Balance",
        des1: "$3,000.00",
        title2: "Total Available",
        des2: "$3,000.00"
    },
]

export default function PayoutComponents() {
    return (
        <div className="container flex flex-col md:w-[85%] mx-auto px-10 py-8 md:py-12 gap-8">

            <h1 className=" text-xl md:text-3xl lg:text-4xl text-start">Welcome Codestam,</h1>

            <div className=" hidden md:flex justify-around py-6 border-b-2" >
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


            <h1 className=" text-xl md:text-3xl lg:text-4xl text-start">Payout Request</h1>

            <div className="flex flex-col gap-6 text-start">
                <h1 className=" text-2xl font-bold">Specifications</h1>

                {
                    data.map((data, index) => {
                        return <RequirementsCard key={index} title1={data.title1} des1={data.des1} title2={data.title2} des2={data.des2} />
                    })

                }

                <div className=" flex justify-end">
                     <button className=" px-4 py-2 bg-[#1980e5] rounded-xl">
                        Request Payout
                    </button>
                </div>

            </div>

            <div className="flex flex-col gap-6" >
            <h1 className=" text-xl font-bold">Payout History</h1>
                
                <div className=" w-full flex justify-between">
                    <div>
                        <p className=" text-xl font-bold">Payout #1</p>
                        <p className=" text-base text-gray-400">Jun 1, 2023</p>
                    </div>
                    <p className=" text-xl font-bold">
                        $2,000.00
                    </p>
                </div>

                <div className=" w-full flex justify-between">
                    <div>
                        <p className=" text-xl font-bold">Payout #1</p>
                        <p className=" text-base text-gray-400">Jun 1, 2023</p>
                    </div>
                    <p className=" text-xl font-bold">
                        $2,000.00
                    </p>
                </div>
                
                <div className=" w-full flex justify-between">
                    <div>
                        <p className=" text-xl font-bold">Payout #1</p>
                        <p className=" text-base text-gray-400">Jun 1, 2023</p>
                    </div>
                    <p className=" text-xl font-bold">
                        $2,000.00
                    </p>
                </div>


            </div>




        </div>
    )
}