

const TitleDescriptionCard = ({ title, description }: any) => { 
    return(
        <div className=" flex flex-col gap-4">
            <h1 className=" text-xl md:text-2xl lg:text-4xl">{title}</h1>
            <p className=" leading-7 ">{description}</p>
        </div>
    )   
}

export default TitleDescriptionCard;