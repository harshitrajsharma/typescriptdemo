


import { RxHamburgerMenu } from "react-icons/rx";
import { FaBold, FaImage, FaItalic } from "react-icons/fa6";
import { MdEmojiEmotions, MdGif } from "react-icons/md";
import CommentCard from "./comment-card";
import Image from "next/image";


const commentData = [
    {
        author_name: "John Doe",
        profile_img: "/pro1.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
]

const repliesData = [
    {
        author_name: "Mira Maruti",
        profile_img: "/pro2.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
    {
        author_name: "Mira Maruti",
        profile_img: "/pro3.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
    {
        author_name: "Mira Maruti",
        profile_img: "/pro4.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
    {
        author_name: "Mira Maruti",
        profile_img: "/pro5.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
    {
        author_name: "Mira Maruti",
        profile_img: "/pro6.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
    {
        author_name: "Mira Maruti",
        profile_img: "/pro7.png",
        comment: "Great article, Mira! I've been thinking about migrating to a microservices architecture for my app. Do you have any advice on how to approach it?",
        timestamp: "2 hours ago",
        like_count: 12,
        dislike_count: 2
    },
]

const user_profile = "/pro8.png"

const BlogContent = ({ author_name, blog_title, blog_des, blog_date }: any) => {
    return (
        <div className="  w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-6 px-10 py-8 md:py-12" >
            <div className=" flex flex-col gap-6">
                <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold">{blog_title}</h1>
                <p className=" text-gray-400">written by {author_name}</p>

                <div className=" w-full ">
                    <Image src="/blogBanner.png" alt="banner" className=" w-full rounded-xl aspect-video" />
                </div>
                <p className=" text-gray-300">{blog_des}</p>

            </div>

            <div className=" flex gap-2">

                <div className=" bg-[#21384a] rounded-lg p-3 w-12 h-12">
                    <RxHamburgerMenu className=" w-full h-full" />
                </div>

                <div>
                    <p>Table of Contents</p>
                    <p className=" text-sm text-gray-400">{blog_date}</p>
                </div>

            </div>

            <div className="flex flex-col gap-6">
                <h1 className=" text-xl md:text-2xl font-bold">What is a microservice?</h1>
                <p className=" text-gray-300">A microservice is a small, independent, and loosely coupled service that is part of a larger application. Microservices are designed to be self-contained and to perform a specific function or set of functions. They are typically implemented as a set of related modules that can be developed, tested, and deployed independently of each other.</p>
                <p className=" text-gray-300">
                    Microservices are often used to build complex, distributed systems that can scale and evolve more easily than monolithic applications. They are particularly well-suited to cloud-native development, where they can take advantage of the scalability, elasticity, and other benefits of cloud computing.
                </p>

                <h1 className=" text-xl md:text-2xl font-bold" >Key characteristics of microservices</h1>
                <ol className=" flex flex-col gap-4 text-gray-300">
                    <li>
                        1. Independent deployment: Microservices can be developed, tested, and deployed independently of each other. This allows for faster release cycles and more frequent updates, as well as greater flexibility and agility in managing the development process.
                    </li>

                    <li>
                        2. Resilience and fault isolation: Because microservices are isolated from each other, a failure in one service does not necessarily affect the entire system. This makes it easier to build resilient and fault-tolerant systems, as well as to diagnose and fix problems when they do occur.
                    </li>

                    <li>
                        3. Scalability: Microservices can be scaled independently of each other, allowing you to allocate resources more efficiently and respond to changes in demand more quickly. This can be especially useful for applications with varying workloads or seasonal traffic patterns.
                    </li>

                    <li>
                        4. Technology diversity: Microservices can be developed using different programming languages, frameworks, and tools. This allows you to choose the best technology for each service and to take advantage of the latest innovations without being tied to a single technology stack.
                    </li>
                </ol>

                <div className="flex justify-start">
                    <button className="bg-[#1980e5] md:w-[60%] rounded-lg px-8 py-2">
                        Read the full paragraph
                    </button>
                </div>

                <h1 className=" text-xl md:text-2xl font-bold"  >Share this post</h1>
                <div className=" relative">
                    <input type="text" name="share" id="share" placeholder="Liked it? Share it!" className=" bg-transparent border-2 p-4 rounded-xl w-full " />
                    <button className="px-4 py-2 bg-[#1980e5] absolute top-2.5 right-6 rounded-full" >Copy link</button >
                </div>
            </div>

            <div className=" flex flex-col gap-6">
                <h3 className=" text-xl font-bold">Comments</h3>

                {
                    commentData.map((comment, index) => {
                        return <CommentCard key={index} author_name={comment.author_name} profile_img={comment.profile_img} comment={comment.comment} timestamp={comment.timestamp} like_count={comment.like_count} dislike_count={comment.dislike_count} />
                    })
                }

                <div className=" pl-6 md:pl-12 flex flex-col gap-6">

                    {
                        repliesData.map((comment, index) => {
                            return <CommentCard key={index} author_name={comment.author_name} profile_img={comment.profile_img} comment={comment.comment} timestamp={comment.timestamp} like_count={comment.like_count} dislike_count={comment.dislike_count} />
                        })
                    }

                </div>

            </div>

            <div className=" w-full h-full relative">
                <textarea name="comment" id="comment" placeholder=" Write your thoughts" className="bg-[#172933] rounded-xl w-full min-h-[200px] h-auto pl-20 py-8 pb-20"></textarea>
                <div className=" w-[5%] flex rounded-full justify-center " >
                    <Image src={user_profile} alt="profile" className=" w-12 h-12 rounded-full absolute top-4 left-4" />
                </div>
                <div className="flex gap-4 scale-125 absolute bottom-8 right-8">
                <FaImage />
                <MdGif />
                <FaBold />
                <FaItalic />
                <MdEmojiEmotions />
                </div>

            </div>

        </div>
    )
}

export default BlogContent