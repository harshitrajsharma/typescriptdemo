import ProductCard from "./product-card-component";


export default function Products() {
    return(
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-8 px-10 py-8 md:py-12">
            <h1 className=" text-xl md:text-2xl lg:text-4xl">Add a Product</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <ProductCard title="Add product details" image="./p1.png" />
                <ProductCard title="Upload images" image="./p2.png" />
                <ProductCard title="Set your price" image="./p3.png" />
            </div>
        </div>
    )
}