import Image from "next/image";


export default function FeaturedCard(props: any) {
    return (
        <div className="2 rounded-3xl bg-[#1c2126] ">
            <div className="flex justify-center">
                <Image alt={props.content} width={176} height={176} className="w-full object-cover " src={props.image} />
            </div>
            <div className=" flex flex-col gap-4 p-4 ">
                <h3 className="text-xl py-2">{props.name}</h3>
                <p className=" text-gray-300">{props.price}</p>

            </div>
        </div>
    )
}
