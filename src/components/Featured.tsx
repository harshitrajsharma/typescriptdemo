
import FeaturedCard from "./FeaturedCard";

const optionsData = [
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

export default function Featured() {
  return (
    <div className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">
        <h1 className=" text-2xl font-bold text-start">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left gap-4 md:gap-8">
        {optionsData.map((option, index) => (
          <FeaturedCard key={index} image={option.image} name={option.name} price={option.price} />
        ))}
      </div>
    </div>
  );
}
