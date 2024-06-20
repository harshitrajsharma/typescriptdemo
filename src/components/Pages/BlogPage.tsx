import BlogsComponent from "../blogs-component";

function BlogInfo({ title, time }: any) {
    return (
        <div className=" flex gap-2">
            <div>
                <h1 className=" line-clamp-1">{title}</h1>
                <p className=" text-base text-gray-400">{time}</p>
            </div>
            <button className=" px-4 py-2 bg-[#21384a] text-xs rounded-xl">Read more</button>
        </div>
    )
}

const data = [
    {
        title: "How to Build a Real-time Chat App in 2023",
        time: "31 March, 2023"
    },
    {
        title: "How to Build a Real-time Chat App in 2023",
        time: "31 March, 2023"
    },
    {
        title: "How to Build a Real-time Chat App in 2023",
        time: "31 March, 2023"
    },
    {
        title: "How to Build a Real-time Chat App in 2023",
        time: "31 March, 2023"
    },
]


export default function BlogPage() {


    return (
        <div className=" bg-[#121921] text-white">
            <div className=" w-full p-8 container md:w-[85%]  flex mx-auto gap-8 px-10 py-8 md:py-12">

                <div className=" md:w-[75%]">
                    <BlogsComponent />
                </div>

                <div className=" md:w-[25%] hidden md:flex flex-col gap-6">

                    <input type="text" name="searchBlog" id="searchBlog" placeholder="Search Blog" className=" p-4 bg-[#21384a] rounded-2xl" />

                    <h1 className=" font-bold">Recent Posts</h1>

                    {
                        data.map((blog, index) => {
                            return <BlogInfo key={index} title={blog.title} time={blog.time} />
                        })
                    }

                    <div className=" flex flex-col gap-4">
                        <h1 className=" font-bold">Popular Topics</h1>
                        <ul className=" flex flex-wrap gap-2">
                            <li className="px-2 py-1 bg-[#21384a] rounded-full">Engineering</li>
                            <li className="px-2 py-1 bg-[#21384a] rounded-full">Product Design</li>
                            <li className="px-2 py-1 bg-[#21384a] rounded-full">Data Science</li>
                            <li className="px-2 py-1 bg-[#21384a] rounded-full">Marketing</li>
                            <li className="px-2 py-1 bg-[#21384a] rounded-full">Sales</li>
                        </ul>
                    </div>

                </div>




            </div>
        </div>
    )
}