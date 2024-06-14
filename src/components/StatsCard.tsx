const StatsCard = (props: any) => {
    return (
        <div className=" px-4 py-4 rounded-lg flex flex-col justify-start items-start gap-3 text-white border-[#192633] border-2 ">
            <h1 className='flex gap-2  items-center text-sm '>{props.stats}</h1>
            <p className='flex gap-2  items-center text-xl font-bold '>{props.numbers}</p>
            <p className='flex gap-2  items-center text-green-400 text-sm '>{props.percentage}</p>
        </div>
    )
}

export default StatsCard