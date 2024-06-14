
import ReviewCard from "./ReviewCard";

const optionsData = [
    {
        name: "Jon Doe",
        date: "1 Jan, 2023",
        review: "Great service, fast delivery.",
    },
    {
        name: "John Smith",
        date: "1 Jan, 2023",
        review: "Very helpful staff, quick response.",
    },
]

export default function Reviews() {
    return (
      <div className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">
          <h1 className=" text-2xl font-bold text-start">Customer Reviews</h1>
        <div className="text-left gap-4 md:gap-8">
          {optionsData.map((option, index) => (
            <ReviewCard key={index} name={option.name} date={option.date} review={option.review}  />
          ))}
        </div>
      </div>
    );
  }