
import StatsCard from "./StatsCard";

const optionsData = [
    {
        stats: "1000+ sellers",
        numbers: "1000",
        percentage: "+5%",
    },
    {
        stats: "10,000+ products",
        numbers: "10000",
        percentage: "+10%",
    },
    {
        stats: "200,000+ buyers",
        numbers: "200000",
        percentage: "+15%",
    },
]

export default function Stats() {
    return (
      <div className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">
          <h1 className=" text-2xl font-bold text-start">Stats</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 text-left gap-4 md:gap-8">
          {optionsData.map((option, index) => (
            <StatsCard key={index} stats={option.stats} numbers={option.numbers} percentage={option.percentage}  />
          ))}
        </div>
      </div>
    );
  }