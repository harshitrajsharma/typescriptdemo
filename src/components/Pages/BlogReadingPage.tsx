import BlogContent from "../blog-content";




// This data will come from the database

const author_name = "Mira Maruti"
const blog_title = "What is a microservice? A comprehensive guide"

const blog_des = "Microservices are a way of designing software applications as suites of independently deployable services. Each service runs in its own process and communicates with other services through a well-defined interface using a lightweight mechanism, typically an HTTP-based application programming interface (API)."

const blog_date = "Oct 10, 2023"


const BlogReadingPage = () => {

    return (
        <div className="bg-[#121921] text-white" >
            <BlogContent author_name={author_name} blog_title={blog_title}  blog_des={blog_des}  blog_date={blog_date} />
        </div>
    )
}

export default BlogReadingPage;