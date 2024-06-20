import BlogCard from "./blog-card";


const blogs = [
    {
        tag: "Engineering",
        title: "How to Build a Real-time Chat App in 2023",
        des: "Real-time chat apps are a popular choice for many businesses. They allow you to communicate with your customers or team members in real time, providing an interactive and engaging experience. In this post, we'll take a look at how you can build a real-time chat app in 2023, exploring the tools and technologies that you can use to create a seamless and scalable solution.",
        banner: "./b1.png",
    },
    {
        tag: "Engineering",
        title: "How to Build a Real-time Chat App in 2023",
        des: "Real-time chat apps are a popular choice for many businesses. They allow you to communicate with your customers or team members in real time, providing an interactive and engaging experience. In this post, we'll take a look at how you can build a real-time chat app in 2023, exploring the tools and technologies that you can use to create a seamless and scalable solution.",
        banner: "./b2.png",
    },
    {
        tag: "Engineering",
        title: "How to Build a Real-time Chat App in 2023",
        des: "Real-time chat apps are a popular choice for many businesses. They allow you to communicate with your customers or team members in real time, providing an interactive and engaging experience. In this post, we'll take a look at how you can build a real-time chat app in 2023, exploring the tools and technologies that you can use to create a seamless and scalable solution.",
        banner: "./b3.png",
    },
]

export default function BlogsComponent() {
    return(
        <div className=" flex flex-col gap-12">
            <h1 className=" text-xl md:text-3xl lg:text-4xl">Codestam Blogs</h1>

            {
                blogs.map((blog, index) => {
                    return <BlogCard key={index} tag={blog.tag} title={blog.title} des={blog.des} banner={blog.banner} />
                })
            }

        </div>
    )
}