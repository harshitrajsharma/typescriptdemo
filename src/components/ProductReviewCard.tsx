const ProductReviewCard = (props: any) => {
    return (
        <div className=" px-4 py-4 rounded-lg flex flex-col justify-start items-start gap-3 text-white">
            <h1 className='flex gap-2  items-center text-xl font-bold '>{props.name}</h1>
            <p className='flex gap-2  items-center text-sm text-gray-400 '>{props.date}</p>
            <div className=" text-white">
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
                <i className="fi fi-ss-star"></i>
            </div>
            <p className='flex gap-2  items-center text-base '>{props.review}</p>
            <div className="flex gap-6 text-gray-400">
                <button className="flex gap-3"><i className="fi fi-rs-social-network"></i>{props.like_count}</button>
                <button className="flex gap-3"><i className="fi fi-rs-hand"></i></button>
            </div>
        </div>
    )
}

export default ProductReviewCard