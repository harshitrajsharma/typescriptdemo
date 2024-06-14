import React from 'react'

const VarietyCard = (props: any) => {
    return (
        <div className=' p-4 border-2 border-gray-800 hover:border-gray-900 rounded-xl bg-[#1c2126] hover:bg-[#23313f] flex flex-col gap-4 hover:scale-[1.05]'>
            <div className=' h-6 w-6 '>
            <i className={`fi ${props.icon} text-white w-full object-contain`}></i>
            </div>
            <h1 className='flex gap-2  items-center text-sm font-bold'>{props.title}</h1>
            <p className=' text-gray-300 text-xs'>
                {props.description}
            </p>
        </div>
    )
}

export default VarietyCard