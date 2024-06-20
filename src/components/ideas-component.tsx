import IdeaCard from "./IdeaCard"

const ideas = [
    {
        category: "Script",
        title: "Code Editor",
        des: "A simple code editor that helps you write, compile and run code in different languages.",
    },
    {
        category: "Template",
        title: "To-Do List App",
        des: "A to-do list app that lets you create, edit, and delete tasks. It also has a feature to categorize tasks.",
    },
    {
        category: "Plugin",
        title: "Chat App",
        des: "A chat app that allows users to send messages, images, and videos. It also has a feature to create groups and share location.",
    },
    {
        category: "E-book",
        title: "Recipe Book",
        des: "A recipe book app that helps you find, save, and share recipes. It also has a feature to create shopping lists.",
    },
]



export default function IdeasComponent() {
    return(
        <div className=" flex flex-col gap-12">
            <h1 className=" text-xl md:text-3xl lg:text-4xl">Trending Ideas</h1>

            {
                ideas.map((idea, index) => {
                    return <IdeaCard key={index} category={idea.category} title={idea.title} des={idea.des} />
                })
            }

        </div>
    )
}