import Image from "next/image";


export default function SellingCard(props:any) {
    return (
        <div className="flex flex-col gap-4 rounded-3xl ">
            <div className="flex justify-center">
                <Image alt={props.content} width={250} height={250} className="w-full " src={props.image} />
            </div>
            <div className=" flex flex-col gap-1 ">
                <h3 className="text-xl font-bold py-2 ">{props.title}</h3>
                <p className=" text-gray-300 ">{props.content}</p>
                
            </div>
        </div>
    )
}
