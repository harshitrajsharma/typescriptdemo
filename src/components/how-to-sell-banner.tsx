import Image from "next/image";


export default function HowToSellBanner() {
    return (
        <div className=" w-full p-8 container md:w-[85%]  flex flex-col justify-center mx-auto gap-12 px-10 py-8 md:py-12 ">

            <div className=" bg-center max-h-[650px] rounded-xl flex justify-center">

                <Image src="./howtosell.png" alt="banner" className=" w-full " />

            </div>

            <div className="flex justify-center">
                <button className="bg-[#1980e5] md:w-[60%] rounded-lg px-8 py-2">
                    Create a Seller Account
                </button>
            </div>

        </div>
    )
}