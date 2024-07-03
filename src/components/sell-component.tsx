import Accordion from "./Accordion"
import SellingCard from "./SellingCard";
import VarietyCard from "./VarietyCard";


const optionsData = [
    {
        image: "/s1.png",
        name: "Start selling in minutes",
        content: "Get your products in front of potential customers"

    },
    {
        image: "/s2.png",
        name: "Get ides for products ",
        content: "Codestam offers a guide for new ideas for SAAS Software, e-books, automation projects, etc."

    },
    {
        image: "/s3.png",
        name: "Pricing  from experts",
        content: "Our team is here to specify a good pricing fit for your product to get best market fit."

    },
    {
        image: "/s4.png",
        name: "Get paid your way",
        content: "Choose from a variety of payment methods and get paid in your preferred way."

    },
    {
        image: "/s5.png",
        name: "Explore features to get started",
        content: "Learn how to sell on Codestam with our tutorials, webinars, and more"

    },

]

const data = [
    {
        icon: "fi-rr-document",
        title: "Sign up",
        description: "Join our marketplace and create your first product"
    },
    {
        icon: "fi-rr-document",
        title: "List your product",
        description: "Add your product details and start selling"
    },
    {
        icon: "fi-rr-document",
        title: "Start selling",
        description: "Automate your business by connecting to other apps"
    },
]


const storiesData = [
    {
        image: "/ss1.png",
        name: "Outschool",
        content: "Outschool offers live online classes for K-12 learners. They've reached millions of customers on Codestam, helping kids learn and discover new interests."

    },
    {
        image: "/ss2.png",
        name: "Anker Innovations",
        content: "Anker Innovations sells high-quality consumer electronics and accessories. They've grown their business and reached new customers on Codestam."

    },
    {
        image: "/ss3.png",
        name: "Splice",
        content: "Splice provides music production tools and software for creators. They've built a successful business on Codestam, helping musicians and producers around the world."

    },
]




const SellComponent = () => {
    return (
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-8 px-10 py-8 md:py-12" >


            <div className="flex flex-col items-center gap-8 my-24">
                <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold">Sell on Codestam</h1>
                <p>List your products on Codstam store. And reach people who want it</p>
                <button className="bg-[#1980e5] md:w-[60%] rounded-lg px-8 py-2">
                    Get Started
                </button>
            </div>


            <div className="flex flex-col items-center gap-8">
                <h1 className=" text-2xl md:text-4xl font-bold">Why sell on Codestam</h1>
                <p>Codestam is the leading global commerce platform for digital products, providing you a platform so that you don’t need to stress about marketing.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left gap-6 md:gap-8">
                    {optionsData.map((option, index) => (
                        <SellingCard key={index} image={option.image} title={option.name} content={option.content} />
                    ))}
                </div>
            </div>


            <div className="flex flex-col items-center gap-8 my-24">
                <h1 className=" text-2xl  font-bold">How it works</h1>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
                    {data.map((item, index) => (
                        <VarietyCard key={index} icon={item.icon} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>



            <div className="flex flex-col gap-8">
                <h1 className=" text-2xl md:text-4xl font-bold">Seller Success Stories</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 text-left gap-6 md:gap-8">
                    {storiesData.map((option, index) => (
                        <SellingCard key={index} image={option.image} title={option.name} content={option.content} />
                    ))}
                </div>
            </div>


            <div className="flex flex-col items-center gap-8 my-24">
                <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold">Ready to Start Selling?</h1>
                <p>Create an account to set up your shop and start selling your digital products on Codestam.</p>
                <button className="bg-[#1980e5] rounded-lg px-8 py-2">
                    Start selling on Codestam
                </button>
            </div>


            <Accordion />


            <div className=" flex flex-col items-center gap-6">
                <div className=" flex gap-4 justify-around w-full text-gray-400">
                    <button>About</button>
                    <button>Blog</button>
                    <button>Terms and Service</button>
                    <button>Privacy Policy</button>
                    <button>Help Center</button>
                </div>
                <div>
                    @2023 Codestam Store
                </div>
                <div className=" flex w-full justify-center gap-6">
                    <i className="fi fi-brands-twitter"></i>
                    <i className="fi fi-brands-facebook"></i>
                    <i className="fi fi-brands-instagram"></i>
                    <i className="fi fi-brands-youtube"></i>
                </div>

            </div>



        </div>
    )
}

export default SellComponent;