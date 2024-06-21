

import Image from "next/image";


export default function ProductCard(props: any) {
    return (
        <div className=" rounded-3xl  ">

            <div className="flex justify-center">
                <Image alt={props.content} width={176} height={176} className="w-full object-cover " src={props.image} />
            </div>
            <div className=" flex flex-col gap-4 py-4 ">
                <h3 className="text-xl py-2">{props.name}</h3>
                <button className=" text-gray-300 w-full bg-[#293038] hover:bg-[#354657] rounded-xl py-2">{props.button}</button>

            </div>
        </div>
    )
}
