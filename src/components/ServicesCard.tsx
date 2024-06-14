const ServicesCard = (props: any) => {
    return (
        <div className=" px-4 py-4 rounded-lg flex justify-start items-center gap-2 text-white bg-[#192633] ">
            <div className=' h-6 w-6 '>
                <i className={`fi ${props.icon} w-full object-contain`}></i>
            </div>
            <h1 className='flex gap-2  items-center text-sm '>{props.title}</h1>
        </div>
    )
}

export default ServicesCard