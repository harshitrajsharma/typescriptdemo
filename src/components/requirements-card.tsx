

const RequirementsCard = ({ title1, des1, title2, des2 }: any) => {
    return(
        <div className=" border-t-2 border-white py-6 flex flex-col  md:flex-row gap-4 md:gap-16">

            <div className=" md:w-[50%]">
                <h3 className=" text-gray-400">{title1}</h3>
                <p>{des1}</p>
            </div>

            <div className=" md:w-[50%]">
                <h3 className=" text-gray-400">{title2}</h3>
                <p>{des2}</p>
            </div>

        </div>
    )
}

export default RequirementsCard;