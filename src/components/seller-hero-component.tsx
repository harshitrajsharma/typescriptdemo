import VarietyCard from "./VarietyCard"
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
        title: "Add+",
    },
]

const Specdata = [
    {
        title1: "Dimensions",
        des1: "Use high-quality images that clearly represent your product.",
        title2: "Values",
        des2: "Write clear, accurate, and engaging descriptions that highlight the product's benefits."
    },
    {
        title1: "Battery Life",
        des1: "Use high-quality images that clearly represent your product.",
        title2: "Values",
        des2: "Write clear, accurate, and engaging descriptions that highlight the product's benefits."
    },
    {
        title1: "Processor",
        des1: "Use high-quality images that clearly represent your product.",
        title2: "Values",
        des2: "Write clear, accurate, and engaging descriptions that highlight the product's benefits."
    },
    {
        title1: "Key",
        des1: "Use high-quality images that clearly represent your product.",
        title2: "Values",
        des2: "Write clear, accurate, and engaging descriptions that highlight the product's benefits."
    },
]

function ProductCard({ image }: any) {
    return (
        <div>
            <img src={image} alt="product" className=" rounded-xl" />
        </div>
    )
}

export default function SellerHero() {
    return (
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-8 px-10 py-8 md:py-12" >
            <h1 className=" text-xl md:text-3xl lg:text-4xl">Welcome Codestam,</h1>

            <div className=" hidden md:flex justify-around py-6 border-b-2" >
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Dashboard
                </button>
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Add Products
                </button>
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Products
                </button>
                <button className=" hover:bg-gray-400 rounded-lg px-4 py-2">
                    Payout
                </button>
            </div>


            <div className=" bg-center max-h-[650px] rounded-xl flex justify-center">

                <img src="./video.png" alt="banner" className=" w-full rounded-xl " />

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
                <h1 className=" text-2xl font-bold">Terms and conditions</h1>
                <p>
                    Free shipping and free returns. 2-year limited warranty. 24/7 customer support. Pay in 4 payments of $99.75. Price includes tax. Subject to terms and conditions.(This is a editable section to be edited by the seller)
                </p>
                <div className="flex gap-6 justify-end">
                    <button className=" px-4 py-2  rounded-xl">
                        Save as Draft
                    </button>
                    <button className=" px-4 py-2 bg-[#1980e5] rounded-xl">
                        Publish
                    </button>
                </div>
            </div>



        </div>
    )
}