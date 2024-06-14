import Image from "next/image";


export default function ExploreCard(props:any) {
    return (
        <div className="2 rounded-3xl bg-[#1c2126] ">
            <div className="flex justify-center">
                <Image alt={props.content} width={250} height={250} className="w-full " src={props.image} />
            </div>
            <div className=" flex flex-col gap-4 p-4 ">
                <h3 className="text-2xl font-bold py-2 px-2">{props.name}</h3>
                <p className=" text-gray-300 px-2">{props.content}</p>
                
            </div>
            <div className=" w-full p-4">
            <button className=" bg-[#293338] hover:bg-[#4e575d] w-full px-4 py-2 rounded-lg">
                    Explore All
                </button>
            </div>
        </div>
    )
}
