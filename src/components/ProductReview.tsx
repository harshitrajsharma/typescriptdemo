
import ProductReviewCard from "./ProductReviewCard";

const optionsData = [
    {
        name: "Jon Doe",
        date: "1 Jan, 2023",
        review: "Great service, fast delivery.",
        like_count: 3,
    },
    {
        name: "John Smith",
        date: "1 Jan, 2023",
        review: "Very helpful staff, quick response.",
        like_count: 6,
    },
    {
        name: "Samantha",
        date: "1 Jan, 2023",
        review: "Form fitting in a flattering way. Fabric has a great feel. It is a bit sheer, so choose undergarments carefully. This can be a warm fall layer or a simple summer top",
        like_count: 9,
    },
]

export default function ProductReview() {
    return (
        <div className="text-left gap-4 md:gap-8">
          {optionsData.map((option, index) => (
            <ProductReviewCard key={index} name={option.name} date={option.date} review={option.review} like_count={option.like_count}  />
          ))}
        </div>
    );
  }