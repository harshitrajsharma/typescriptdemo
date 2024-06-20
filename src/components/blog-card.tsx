

export default function BlogCard({ title, tag, des, banner }: any) {
    return (
        <div>

            <div className=" flex gap-2">

                <div className=" w-full md:w-[70%] flex flex-col gap-2">
                    <p className=" text-gray-400">{tag}</p>
                    <h1 className=" text-xl md:text-3xl">{title}</h1>
                    <p className="text-gray-400 line-clamp-2 md:line-clamp-4">{des}</p>
                    <div className=" flex justify-start mt-6">
                        <button className="px-4 py-2 bg-[#21384a] rounded-full">Read More</button>
                    </div>
                </div>

                <div className=" md:w-[30%]">
                    <img src={banner} alt="banner" className=" h-full w-full object-cover rounded-lg" />
                </div>

            </div>


        </div>
    )
}