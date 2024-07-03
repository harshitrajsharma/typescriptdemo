import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CommentCard = ({ author_name, profile_img, comment, timestamp, like_count, dislike_count }: any) => {

    return (
        <div className="flex gap-2">
            <div className=" w-[25%] md:w-[15%] lg:w-[5%]  rounded-full " >
                <Image src={profile_img} alt="profile" className=" w-full rounded-full" />
            </div>

            <div className=" flex flex-col gap-3">
                <div className=" flex gap-2">
                    <p className=" font-bold">{author_name}</p>
                    <p className=" text-gray-400">{timestamp}</p>
                </div>
                <div>
                    <p>{comment}</p>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <p className="flex gap-2 justify-center items-center"><AiOutlineLike className=" scale-125" />{like_count} Likes</p>
                    <p className="flex gap-2 justify-center items-center"><AiOutlineDislike className=" scale-125" />{dislike_count} Dislikes</p>
                </div>
            </div>

        </div>
    )

}

export default CommentCard;