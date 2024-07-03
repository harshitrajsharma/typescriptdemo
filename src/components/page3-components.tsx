import Image from "next/image"
import ProductReview from "./ProductReview"
import VarietyCard from "./VarietyCard"
import RatingComponent from "./rating-component"
import RequirementsCard from "./requirements-card"


const product = [
    {
        image: "/sp1.png"
    },
    {
        image: "/sp2.png"
    },
    {
        image: "/sp3.png"
    },
    {
        image: "/sp4.png"
    },
]

const data = [
    {
        icon: "fi-rr-bulb",
        title: "Next Gen AI",
    },
    {
        icon: "fi-rr-globe",
        title: "Global Connectivity",
    },
    {
        icon: "fi-rr-settings",
        title: "Seamless Integration",
    },
    {
        icon: "fi-rr-chart-histogram",
        title: "Advance Analytics",
    },
    {
        icon: "fi-rr-laptop",
        title: "Universal Compatibility",
    },
    {
        icon: "fi-rr-phone-call",
        title: "Crystal Clear Audio",
    },
]

const Specdata = [
    {
        title1: "Dimensions",
        des1: "",
        title2: "Values",
        des2: ""
    },
    {
        title1: "Battery Life",
        des1: "",
        title2: "Values",
        des2: ""
    },
    {
        title1: "Processor",
        des1: "",
        title2: "Values",
        des2: ""
    },
    {
        title1: "Key",
        des1: "",
        title2: "Values",
        des2: ""
    },
]

function ProductCard({ image }: any) {
    return (
        <div>
            <Image src={image} alt="product" className=" rounded-xl" />
        </div>
    )
}

export default function Page3Hero() {

    const averageRating = 4.2;
    const reviewCount = 80;
    const ratingDistribution = {
        5: 57,
        4: 25,
        3: 10,
        2: 5,
        1: 3,
    };



    return (
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-8 px-10 py-8 md:py-12" >


            <div className=" bg-center max-h-[650px] rounded-xl flex justify-center">

                <Image src="./video.png" alt="banner" className=" w-full rounded-xl " />

            </div>

            <div className=" flex gap-6" >
                {
                    product.map((item, index) => (
                        <ProductCard key={index} image={item.image} />
                    ))
                }
            </div>


            <div className=" flex flex-col gap-6" >
                <p>Name of the product</p>
                <div className=" flex justify-between">
                    <p className=" text-xl font-bold">$399(editable)</p>
                    <div className="flex gap-6">
                        <button className=" px-4 py-2 bg-[#293038] rounded-xl">Get in Touch</button>
                        <button className=" px-4 py-2 bg-[#1980e5] rounded-xl">Buy Now</button>
                    </div>
                </div>

            </div>


            <div className="flex flex-col gap-6">
                <h1 className=" text-2xl font-bold">Key Features</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6'>
                    {data.map((item, index) => (
                        <VarietyCard key={index} icon={item.icon} title={item.title} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className=" text-2xl font-bold">Specifications</h1>

                {
                    Specdata.map((data, index) => {
                        return <RequirementsCard key={index} title1={data.title1} des1={data.des1} title2={data.title2} des2={data.des2} />
                    })

                }

                <div>
                    <button className=" px-4 py-2 bg-[#1980e5] rounded-xl">
                        Add +
                    </button>
                </div>

            </div>


            <div className=" flex flex-col gap-6">
                <h1 className=" text-2xl font-bold">Customer Review</h1>
                <div className=" md:w-[60%]" >
                    <RatingComponent
                        averageRating={averageRating}
                        reviewCount={reviewCount}
                        ratingDistribution={ratingDistribution}
                    />
                </div>
                <ProductReview/>

            </div>


            <div className=" flex flex-col gap-6">
                <h1 className=" text-xl font-bold">Terms and conditions</h1>
                <p>
                    Free shipping and free returns. 2-year limited warranty. 24/7 customer support. Pay in 4 payments of $99.75. Price includes tax. Subject to terms and conditions.(This is a editable section to be edited by the seller)
                </p>
            </div>



        </div>
    )
}