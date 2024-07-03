import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingComponentProps {
    averageRating: number;
    reviewCount: number;
    ratingDistribution: { [key: number]: number };
}

const RatingComponent: FC<RatingComponentProps> = ({ averageRating, reviewCount, ratingDistribution }) => {
    return (
        <div className=" p-4 rounded-lg text-white w-full flex flex-col md:flex-row gap-6 ">

            <div className="flex flex-col items-center mb-2">

                <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>

                <div className="flex items-center ml-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={`w-6 h-6 ${i < Math.round(averageRating) ? 'text-white' : 'text-gray-700'}`}
                        />
                    ))}
                </div>
                <div className="text-gray-400 mb-4">{reviewCount} reviews</div>

            </div>


            <div className=' w-full'>
                {Object.entries(ratingDistribution).map(([rating, percentage]) => (

                    <div key={rating} className="flex items-center mb-1">
                        <div className="w-6 text-right">{rating}</div>

                        <div className="flex h-4 mx-2 w-full bg-gray-800 rounded-lg">
                            <div className="bg-white h-full w-full rounded-lg" style={{ width: `${percentage}%` }}></div>
                        </div>

                        <div className="w-10 text-right">{percentage}%</div>

                    </div>

                ))}
            </div>

        </div>
    );
};

export default RatingComponent;
