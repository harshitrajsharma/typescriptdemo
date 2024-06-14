

export default function Hero() {
    return (
        <div className="container h-[600px] md:h-[420px] lg:h-[550px] xl:h-[700px] w-[85%] flex justify-center mx-auto md:px-10 py-8">
            <div className=" bg-center h-[100%] w-full bg-no-repeat bg-cover rounded-xl flex flex-col gap-14 justify-center md:justify-end p-8 md:p-12 lg:p-16 xl:p-20" style={{ backgroundImage: 'url(./bg.png)' }}>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold">Buy. Sell. Digital Products</h1>
                    <p className="text-white md:text-base md:tracking-normal lg:text-lg lg:tracking-normal xl:tracking-wider">For enterprises, businesses, security, or fun.</p>
                    <div className="flex justify-start">
                    <button className="bg-[#1980e5] rounded-lg px-4 py-2">
                        Explore Now
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}