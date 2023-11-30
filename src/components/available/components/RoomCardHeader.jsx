import React from 'react'

const RoomCardHeader = ({price,available,name}) => {
  return (
    <>
        <span className="absolute top-28 md:right-[-20px] right-[-19px] lg:w-48 md:w-35 w-30 rounded-md bg-secondary-50 border border-secondary-200 flex flex-col justify-center z-[1]">
            <p className="text-gray-200 p-2"><span className="font-bold lg:text-[20px] md:text-[18px] text-[16px]">USD {price}</span>/per night</p>
            <p className="text-secondary-100 font-gsans bg-red p-1 rounded-bl ribbon"> Only <span className="font-serif lg:text-xl text-lg font-bold">{available}</span> rooms left </p>
        </span>
        <div className="bg-secondary-50 p-4 text-left">
            <p className="font-serif text-gray-200 text-lg">{name}</p>
        </div>
    </>
  )
}

export default RoomCardHeader