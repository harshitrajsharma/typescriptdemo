const ReviewCard = (props: any) => {
    return (
        <div className=" px-4 py-4 rounded-lg flex flex-col justify-start items-start gap-3 text-white">
            <h1 className='flex gap-2  items-center text-xl font-bold '>{props.name}</h1>
            <p className='flex gap-2  items-center text-sm '>{props.date}</p>
            <div className=" text-blue-700">
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
            </div>
            <p className='flex gap-2  items-center text-md '>{props.review}</p>
        </div>
    )
}

export default ReviewCard