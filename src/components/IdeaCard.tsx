



const IdeaCard = ({ category, title, des }: any) => {

    return (
        <div className=" flex flex-col gap-4">
            <p className=" text-gray-400">{category}</p>
            <h1 className=" text-xl font-bold">{title}</h1>
            <p className=" text-gray-400">{des}</p>
            <div className=" flex justify-start mt-6">
                <button className="px-4 py-2 bg-[#21384a] rounded-full">View</button>
            </div>
        </div>
    )


}

export default IdeaCard;