import RequirementsCard from "./requirements-card";
import TitleDescriptionCard from "./title-description-card";


const Reqdata = [
    {
        title1: "Seller account",
        des1: "Your seller account must be in good standing. To create a seller account, sign up on the Codestam website.",
        title2: "Product images",
        des2: "Product images must be clear, relevant, and accurately represent the product. We recommend using high-quality images."
    },
    {
        title1: "Product description",
        des1: "Product descriptions must be clear, accurate, and engaging. We recommend including key details about the product and its benefits.",
        title2: "Product pricing",
        des2: "Product pricing must be competitive and relevant to the product. We recommend setting a fair price based on the product's value and the market."
    },
    {
        title1: "Support email",
        des1: "You must provide a support email address for customer inquiries. We recommend using a professional email address.",
        title2: "Redemption instructions",
        des2: "You must provide clear and accurate redemption instructions for digital products (e.g., license keys, download links)."
    },
]


const TipsData = [
    {
        title1: "Clear images",
        des1: "Use high-quality images that clearly represent your product.",
        title2: "Engaging descriptions",
        des2: "Write clear, accurate, and engaging descriptions that highlight the product's benefits."
    },
    {
        title1: "Competitive pricing",
        des1: "Set competitive prices that reflect the product's value and the market.",
        title2: "Responsive customer service",
        des2: "Provide responsive and helpful customer service to address any inquiries or issues."
    },
]

const SellPageDetails = () => {
    return (
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-8 px-10 py-8 md:py-12" >
            <TitleDescriptionCard title="Get Verified" description="To prevent fraud and ensure a quality experience for customers, we review your product before it's published. This usually takes 1-2 business days. We'll send you an email once your product is live." />

            <TitleDescriptionCard title="Start Making Money" description="You get paid each time a customer buys your product. We'll send you an email when you make a sale. You can track your earnings in your seller dashboard." />

            <h1 className=" text-xl md:text-2xl lg:text-4xl mt-8">Key Requirements</h1>
            {
                Reqdata.map((data, index) => {
                    return <RequirementsCard key={index} title1={data.title1} des1={data.des1} title2={data.title2} des2={data.des2} />
                })

            }


            <h1 className=" text-xl md:text-2xl lg:text-4xl mt-8">Tips for Success</h1>
            {
                TipsData.map((data, index) => {
                    return <RequirementsCard key={index} title1={data.title1} des1={data.des1} title2={data.title2} des2={data.des2} />
                })

            }


            <div className="flex justify-center">
                <button className="bg-[#1980e5] md:w-[60%] rounded-lg px-8 py-2">
                    Go to seller dashboard
                </button>
            </div>

        </div>
    )
}

export default SellPageDetails;