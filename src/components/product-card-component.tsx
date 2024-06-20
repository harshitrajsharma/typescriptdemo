

const ProductCard = ({title, image}:any) => {
    return(
        <div className=" flex flex-col gap-4">
            <div className=" rounded aspect-square ">
                <img src={image} alt="product" className=" rounded-xl w-full" />
            </div>
            <p className=" text-base md:text-2xl ">{title}</p>
        </div>
    )
}

export default ProductCard;