import AvailableTitle from "../title/AvailableTitle"
import Superior from '../../assets/Superior.png';
import { Select } from "antd";
import { useState } from "react";
import AvailableSummary from "../summary/AvailableSummary";
import { lastUpdatedCheck } from "../../features/availability/checkSlice";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
// import { useCheckRoomMutation } from "../../features/availability/checkApiSlice";

// const roomsArray = (end) => {
//   return Array.from({length: end + 1},(_,index) => index);
// }

const AvailableRooms = () => {
  // const {data:rooms,isLoading,error} = useCheckRoomMutation();
  // const roomsList = roomsArray(rooms.available);
  const [selectedRoom,setSelectedRoom] = useState(0);
  const [totalSelectedValues, setTotalSelectedValues] = useState(0);
  const data = useSelector(lastUpdatedCheck);

  const rooms = [0,1,2,3,5,6];
  const rooms1 = [0,1,2,3,4,5,6,7];
  const rooms2 = [0,1,2,3,4];
  const userRoom = data.room;
  // console.log(userRoom);//3

  const startDate = dayjs(data?.checkIn);
  const endDate = dayjs(data?.checkOut);
  const totalNight = endDate.diff(startDate,"day");

  const onChange = (value) => {
    setSelectedRoom(value);
    const newTotalSelectedValues = totalSelectedValues + value;
    setTotalSelectedValues(newTotalSelectedValues);
  }

  console.log(selectedRoom,totalSelectedValues);//1

  return (
    <section className="container mx-auto mt-12">
      <AvailableTitle/>
      <div className="flex lg:flex-row flex-col mt-10 gap-7">
        <div className="flex-1">
          <div className="shadow-lg mb-10 border border-solid border-secondary-200 relative">
            <span className="absolute top-28 right-[-20px] w-48 h-24 rounded-md bg-secondary-50 border-[1px] border-secondary-200 flex justify-center items-end before:content-['Only_5_rooms_left'] before:absolute before:w-full before:h-10 before:bg-primary before:text-secondary-50 before:rounded-bl-md before:flex before:justify-center before:items-center after:absolute after:bottom-[-2rem] after:right-[-14px] after:w-[5.7rem] after:h-8 after:bg-primary after:origin-bottom after:-rotate-45 after:-z-10">
              <p className="text-gray-200 text-left absolute top-3"><span className="font-bold text-[20px]">USD 199</span>/per night</p>
            </span>
            <div className="bg-secondary-50 p-6 text-left">
              <p className="text-primary">Superior Room</p>
            </div>
            <div className="bg-secondary-200">
              <div className="p-4">
                <img src={Superior} alt="Superior Room" />
              </div>
              <div className="flex flex-col md:flex-row items-start gap-2 p-4">
                <div className="flex-1 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Room Details</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <div>
                      <p>Your price includes</p>
                      <div>
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <a href="" className="underline">See all amenities</a>
                      </div>
                    </div>
                    <div>
                      <p>benefit</p>
                      <div>
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-56 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Payment & Cancelation</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <div>
                      <p className="font-semibold">Payment</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus</p>
                    </div>
                    <div>
                      <p className="font-semibold">Cancellation</p>
                      <p>adipisicing elit. Accusamus, commodi?</p>
                    </div>
                  </div>
                </div>
                <div className="w-52 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Price for (<span>{totalNight}</span>) night</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <p className="font-bold">{`USD ${totalNight * 199}`}</p>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="w-28 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Select Room</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <Select className="w-full"
                        placeholder={rooms[0]}
                        onChange={onChange}
                        options={rooms?.map((room) => ({
                          label: room,
                          value: room,
                          disabled: selectedRoom ? room > (userRoom - selectedRoom) : (room > userRoom)
                        }))}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg mb-10 border border-solid border-secondary-200 relative">
            <span className="absolute top-28 right-[-20px] w-48 h-24 rounded-md bg-secondary-50 border-[1px] border-secondary-200 flex justify-center items-end before:content-['Only_5_rooms_left'] before:absolute before:w-full before:h-10 before:bg-primary before:text-secondary-50 before:rounded-bl-md before:flex before:justify-center before:items-center after:absolute after:bottom-[-2rem] after:right-[-14px] after:w-[5.7rem] after:h-8 after:bg-primary after:origin-bottom after:-rotate-45 after:-z-10">
              <p className="text-gray-200 text-left absolute top-3"><span className="font-bold text-[20px]">USD 199</span>/per night</p>
            </span>
            <div className="bg-secondary-50 p-6 text-left">
              <p className="text-primary">Single Room</p>
            </div>
            <div className="bg-secondary-200">
              <div className="p-4">
                <img src={Superior} alt="Superior Room" />
              </div>
              <div className="flex flex-col md:flex-row items-start gap-2 p-4">
                <div className="flex-1 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Room Details</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <div>
                      <p>Your price includes</p>
                      <div>
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <a href="" className="underline">See all amenities</a>
                      </div>
                    </div>
                    <div>
                      <p>benefit</p>
                      <div>
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-56 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Payment & Cancelation</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <div>
                      <p className="font-semibold">Payment</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus</p>
                    </div>
                    <div>
                      <p className="font-semibold">Cancellation</p>
                      <p>adipisicing elit. Accusamus, commodi?</p>
                    </div>
                  </div>
                </div>
                <div className="w-52 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Price for (<span>{totalNight}</span>) night</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <p className="font-bold">{`USD ${totalNight * 199}`}</p>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="w-28 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Select Room</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <Select className="w-full"
                        placeholder={rooms1[0]}
                        onChange={onChange}
                        options={rooms1?.map((room) => ({
                          label: room,
                          value: room,
                          disabled: selectedRoom ? room > (userRoom - selectedRoom) : (room > userRoom)
                        }))}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg mb-10 border border-solid border-secondary-200 relative">
            <span className="absolute top-28 right-[-20px] w-48 h-24 rounded-md bg-secondary-50 border-[1px] border-secondary-200 flex justify-center items-end before:content-['Only_5_rooms_left'] before:absolute before:w-full before:h-10 before:bg-primary before:text-secondary-50 before:rounded-bl-md before:flex before:justify-center before:items-center after:absolute after:bottom-[-2rem] after:right-[-14px] after:w-[5.7rem] after:h-8 after:bg-primary after:origin-bottom after:-rotate-45 after:-z-10">
              <p className="text-gray-200 text-left absolute top-3"><span className="font-bold text-[20px]">USD 199</span>/per night</p>
            </span>
            <div className="bg-secondary-50 p-6 text-left">
              <p className="text-primary">Family Room</p>
            </div>
            <div className="bg-secondary-200">
              <div className="p-4">
                <img src={Superior} alt="Superior Room" />
              </div>
              <div className="flex flex-col md:flex-row items-start gap-2 p-4">
                <div className="flex-1 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Room Details</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <div>
                      <p>Your price includes</p>
                      <div>
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                        <a href="" className="underline">See all amenities</a>
                      </div>
                    </div>
                    <div>
                      <p>benefit</p>
                      <div>
                        <p><span className="font-semibold">Room size</span>: 26.7-30.7 m2</p>                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-56 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Payment & Cancelation</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <div>
                      <p className="font-semibold">Payment</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus</p>
                    </div>
                    <div>
                      <p className="font-semibold">Cancellation</p>
                      <p>adipisicing elit. Accusamus, commodi?</p>
                    </div>
                  </div>
                </div>
                <div className="w-52 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Price for (<span>{totalNight}</span>) night</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <p className="font-bold">{`USD ${totalNight * 199}`}</p>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="w-28 text-left flex flex-col gap-2">
                  <div className="bg-primary p-3">
                    <p className="text-secondary-50">Select Room</p>
                  </div>
                  <div className="bg-secondary-50 p-3 h-72">
                    <Select className="w-full"
                        placeholder={rooms2[0]}
                        onChange={onChange}
                        options={rooms2?.map((room) => ({
                          label: room,
                          value: room,
                          disabled: selectedRoom ? room > (userRoom - selectedRoom) : (room > userRoom)
                        }))}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            <AvailableSummary room={totalSelectedValues} />
        </div>
      </div>
    </section>
  )
}

export default AvailableRooms