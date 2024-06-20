import IdeasComponent from "../ideas-component";


const buttons = [
    "Software", "Saas Products", "Ebooks", "Chrome Extensions", "APIs", "Games"
]


export default function IdeasPage() {


    return (
        <div className=" bg-[#121921] text-white">
            <div className=" w-full p-8 container md:w-[85%]  flex mx-auto gap-8 px-10 py-8 md:py-12">

                <div className=" md:w-[25%] hidden md:flex flex-col gap-6">
                    <h1 className=" text-lg">Trending Ideas</h1>

                    <div className=" h-full flex flex-col justify-between">

                        <div className="flex flex-col justify-start  gap-6">
                            {
                                buttons.map((button, index) => {
                                    return <button key={index} className=" w-full px-4 py-2 text-start hover:bg-[#21384a] rounded-lg">{button}</button>
                                })
                            }
                        </div>

                        <div className="flex flex-col gap-4 text-center">
                            <p>List your ideas and get paid</p>
                            <button className=" px-4 py-2 bg-[#178cf2] hover:bg-[#2f7abb] rounded-lg text-center">Have an Idea?</button>
                        </div>
                    </div>



                </div>

                <div className=" md:w-[75%]">
                    <IdeasComponent />
                </div>


            </div>
        </div>
    )
}