import ExploreCard from "./ExploreCard";

const optionsData = [
  { 
    image: "/card1.png", name: "CodeStam Store", content: "A store to buy and sell software with source code and ownership, for your enterprise, business, security, or fun." 
  
  },
  { 
    image: "/card2.png", name: "Sell on Codestam", content: "List your digital product for free on codetam store and reach our 10000+ customers."

   },
  { 
    image: "/card3.png", name: "Rapid API", content: "The worlds largest API marketplace to discover, test, and connect to thousands of APIs."

   },
];

export default function Explore() {
  return (
    <div className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-left gap-8 md:gap-16">
        {optionsData.map((option, index) => (
          <ExploreCard key={index} image={option.image} name={option.name} content={option.content} />
        ))}
      </div>
    </div>
  );
}
