
import FeaturedCard from "./FeaturedCard";
import ProductCard from "./ProductCard";

const optionsData = [
    {
        image: "/f1.png", name: "A beautiful landing page template", button: "Update"
    },
    {
        image: "/f2.png", name: "A beautiful landing page template", button: "Update"

    },
    {
        image: "/f3.png", name: "A beautiful landing page template", button: "Update"

    },
    {
        image: "/f4.png", name: "A beautiful landing page template", button: "Update"

    },
    {
        image: "/f5.png", name: "A beautiful landing page template", button: "Update"

    },
];


const pendingData = [
    {
        image: "/f1.png", name: "A beautiful landing page template", price: "$120"
    },
    {
        image: "/f2.png", name: "A beautiful landing page template", price: "$120"

    },
    {
        image: "/f3.png", name: "A beautiful landing page template", price: "$120"

    },
    {
        image: "/f4.png", name: "A beautiful landing page template", price: "$120"

    },
    {
        image: "/f5.png", name: "A beautiful landing page template", price: "$120"

    },
];



const changesData = [
    {
        image: "/f1.png", name: "A beautiful landing page template", button: "View"
    },
    {
        image: "/f2.png", name: "A beautiful landing page template", button: "View"

    },
    {
        image: "/f3.png", name: "A beautiful landing page template", button: "View"

    },
    {
        image: "/f4.png", name: "A beautiful landing page template", button: "View"

    },
    {
        image: "/f5.png", name: "A beautiful landing page template", button: "View"

    },
];

export default function ProductComponents() {
    return (
        <div className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">

            <h1 className=" text-xl md:text-3xl lg:text-4xl text-start">Welcome Codestam,</h1>

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


            <div className="flex flex-col gap-6">
                <h1 className=" text-2xl font-bold text-start">Approved</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left gap-4 md:gap-8">
                    {optionsData.map((option, index) => (
                        <ProductCard key={index} image={option.image} name={option.name} button={option.button} />
                    ))}
                </div>
            </div>



            <div className="flex flex-col gap-6">
                <h1 className=" text-2xl font-bold text-start">Pending</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left gap-4 md:gap-8">
                    {pendingData.map((option, index) => (
                        <FeaturedCard key={index} image={option.image} name={option.name} price={option.price} />
                    ))}
                </div>
            </div>



            <div className="flex flex-col gap-6">
                <h1 className=" text-2xl font-bold text-start">Change Requested</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left gap-4 md:gap-8">
                    {changesData.map((option, index) => (
                        <ProductCard key={index} image={option.image} name={option.name} button={option.button} />
                    ))}
                </div>
            </div>



        </div>
    );
}
