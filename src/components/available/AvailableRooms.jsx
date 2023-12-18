import React, { useState } from 'react';
import AvailableTitle from "../title/AvailableTitle"
import Superior from '../../assets/Superior.png';
import { Select} from "antd";
import AvailableSummary from "./components/AvailableSummary";
import { addAllRoomTypes, addRoomToCart, addSelectedRoom } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalNights } from "../dateUtils";
import noRoomType from "../../assets/no-roomType.png";
import RoomCardHeader from "./components/RoomCardHeader";
import Allamenities from "./Allamenities";
import { searchedData } from '../../features/availability/checkSlice';

const roomsArray = (end) => {
  return Array.from({length: end + 1},(_,index) => index);
}

const data = [
    {
        "type": {
            "id": 1,
            "name": "Deluxe Single",
            "maximumCapacity": 1,
            "size": "50",
            "pricePerNight": 100,
            "description": "Our Deluxe Single Room offers a plush single bed with high-quality linens for a restful sleep. It includes a work desk, complimentary Wi-Fi, and an en-suite bathroom with premium toiletries. Additional amenities include a flat-screen TV, mini-bar, in-room safe, and 24-hour room service. Experience comfort and convenience in the heart of the city.",
            "totalRoom": 8,
            "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "amenities": [
              {
                "id": 4,
                "name": "Housekeeping",
                "icon": "bed"
              },
              {
                "id": 28,
                "name": "In-Room Jacuzzi",
                "icon": "hot_tub"
            },
              {
                "id": 7,
                "name": "Pool",
                "icon": "pool"
              },
              {
                "id": 3,
                "name": "Towels and Toiletries",
                "icon": "dry-cleaning"
            }
            ]
        },
        "available": 8
    },
    {
        "type": {
            "id": 2,
            "name": "Deluxe Double",
            "maximumCapacity": 2,
            "size": "80",
            "pricePerNight": 200,
            "description": "The Deluxe Single Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
            "totalRoom": 20,
            "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "amenities": [
                {
                    "id": 1,
                    "name": "Comfortable Beds",
                    "icon": "bed"
                },
                {
                    "id": 6,
                    "name": "Private Living Room",
                    "icon": "living"
                },
                {
                    "id": 28,
                    "name": "In-Room Jacuzzi",
                    "icon": "hot_tub"
                }
            ]
        },
        "available": 0
    },
    {
      "type": {
          "id": 3,
          "name": "Deluxe Double",
          "maximumCapacity": 2,
          "size": "80",
          "pricePerNight": 200,
          "description": "The Deluxe Single Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
          "totalRoom": 20,
          "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "amenities": [
            {
              "id": 8,
              "name": "Television",
              "icon": "tv"
            },
            {
              "id": 9,
              "name": "Breakfast",
              "icon": "brunch_dining"
            },
            {
              "id": 10,
              "name": "Min-fridge",
              "icon": "kitchen"
            }
          ]
      },
      "available": 4
  }
]

const AvailableRooms = ({searchData}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false)
  const [amenitiesData, setAmenitiesData] = useState(null);
  const userRoom = searchData?.room;
  // const [roomTypes, setRoomTypes] = useState({});
  // const [selectedRoom, setSelectedRoom] = useState({});

  const {_,roomTypes,selectedRoom} = useSelector(state => state.cart);
   
  const totalNight = calculateTotalNights(searchData?.checkIn,searchData?.checkOut);

  const handleChange = (id,roomType,quantity,pricePerNight) => {
    const updatedSelectedRoom = { ...selectedRoom, [roomType]: quantity };
    
    const updatedRoomTypes = data.reduce((acc, room) => {
      const type = room.type.name;
      const selectedQuantity = updatedSelectedRoom[type] || 0;
      acc[type] = selectedQuantity;
      return acc;
    }, {});

    dispatch(addAllRoomTypes(updatedRoomTypes));
    dispatch(addSelectedRoom(updatedSelectedRoom));

    dispatch(addRoomToCart({id,roomType,quantity,pricePerNight,roomTypes}));
  }

  const handleAllAmenities = (amenities) => {
    setAmenitiesData(amenities);
    setOpenModal(true);
  }

  const disableOptions = (roomAmount,roomType) => {
    
      const typeArr = Object.keys(roomTypes); //[ "Deluxe Single", "Deluxe Double", "Family Double" ]
      const roomArr = Object.values(roomTypes);// [2,0,0]
      const totalOtherRooms = roomArr
      .filter((_, index) => typeArr[index] !== roomType)
      .reduce((acc, quantity) => acc + quantity, 0);

      const remainingCapacity = userRoom - totalOtherRooms;

    return roomAmount > remainingCapacity;
  };

  return (
    <>
      <section className="container mx-auto mt-12">
      
      {
        data.length === 0 ? (
          <div className='mt-40 mb-24 flex flex-col justify-center items-center'> 
            <img src={noRoomType} alt="error image" className='w-[250px] h-[200px]'/>
            <h1 className='font-serif text-gray-100 text-2xl mb-2'>Unavailable</h1>
            <p className='text-secondary-500'>There is no room available for the selected dates.You can try
changing the dates, the number of guests or room(s).</p>
          </div>
        ):(
          <>
            <AvailableTitle/>
      <div className="flex lg:flex-row flex-col mt-10 gap-7 lg:mb-0 mb-10">
        <div className="flex-1">          
          {
            data?.map((room) => {
              // const isSelectedRoom = selectRooms?.find(item => item.roomType === room.type.name);
              // console.log(isSelectedRoom);
              // selectedRoom=> { "Deluxe Double": 2, "Deluxe Single": 1 }
              // const selectedRooms = Object.entries(selectedRoom)?.find(key => key[0] === room.type.name);
              // console.log(selectedRooms);// [ "Deluxe Single", 1 ] [ "Deluxe Double", 2 ]  [ "Deluxe Double", 2 ] to [{},{}] don't want to get duplicate key 
              
              const roomsList = roomsArray(room?.available);

              const dynamicItems = [
                { icon: 'check_circle', label: <span className="font-medium">Room size</span>, content: ` : ${room.type.size} m²` },
                { icon: 'check_circle', label: <span className="font-medium">Bed type</span>, content: ` : Twin` },
                { icon: 'check_circle', label: <span className="font-medium">Occupancy</span>, content: ` : ${room.type.maximumCapacity}` },
                { icon: 'check_circle', content: 'Television, Wi-fi, Air-condition' },
                { icon: 'add_circle', blueIcon: 'text-blue', content: <a onClick={() => handleAllAmenities(room.type.amenities)} className="underline text-blue cursor-pointer">See all amenities</a> },
              ]

              const optionalItems = [
                { icon: 'check_circle',content: "Dinner at ",optional: <span className="font-serif font-bold">USD 75</span>}
              ]

              return (
                  <React.Fragment key={room.type.id} >
                    {
                    room?.available > 0 ? (
                      <div className="shadow-lg mb-10 border border-solid border-secondary-200 relative">
                        
                        <RoomCardHeader price={room.type.pricePerNight} available={room?.available} name={room?.type?.name} />
                        <div className="bg-secondary-200">
                          <div className="p-4">
                            <img src={Superior} alt="Superior Room" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-9 lg:grid-cols-9 items-start gap-2 pt-0 p-4">
                            {/* Room Details */}
                            <div className="col-span-2 md:col-span-3 text-left flex flex-col gap-2">
                              <div className="bg-primary p-3">
                                <h3 className="text-secondary-50 font-serif lg:text-lg text-md font-bold">Room Details</h3>
                              </div>
                              <div className="bg-secondary-50 p-3 md:h-72 h-64">
                                <RoomDetails title="Your price includes:" items={dynamicItems} />
                                <RoomDetails title="Optional benefits" items={optionalItems} className="mt-4"/>
                              </div>
                            </div>
                            {/* Payment & Cancellation */}
                            <div className="col-span-2 md:col-span-3 text-left flex flex-col gap-2">
                              <div className="bg-primary p-3">
                                <h3 className="text-secondary-50 font-serif lg:text-lg text-md font-bold">Payment & Cancelation</h3>
                              </div>
                              <div className="bg-secondary-50 p-3 md:h-72 h-48">
                                <div>
                                  <p className="text-gray-100 font-serif font-bold mb-2">Payment</p>
                                  <div className="flex items-start gap-1" > <span className="material-symbols-outlined text-[#237804]"> check_circle </span>
                                    <p className="text-gray-100">Full payment is required within 24 hours of reservation.</p>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <p className="text-gray-100 font-serif font-bold mb-2">Cancellation</p>
                                  <div className="flex items-start gap-1" > <span className="material-symbols-outlined text-[#237804]"> check_circle </span>
                                    <p className="text-gray-100">Non-refundable</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Price for Night */}
                            <div className="col-span-1 md:col-span-2 text-left flex flex-col gap-2">
                              <div className="md:bg-primary md:p-3 pl-0">
                                <h3 className="md:text-secondary-50 md:font-serif lg:text-lg text-md md:font-bold">Price for (<span>{totalNight}</span>) night</h3>
                              </div>
                              <div className="bg-secondary-50 p-3 md:h-72 h-20">
                                <p className="text-gray-100 font-serif text-xl font-bold">{`USD ${totalNight * room?.type.pricePerNight}`}</p>
                                <p className="text-secondary-400 text-sm">included taxes & charges</p>
                              </div>
                            </div>
                            {/* Select Room */}
                            <div className="col-span-1 md:col-span-1 text-left flex flex-col gap-2">
                              <div className="md:bg-primary md:p-3 pl-0">
                                <h3 className="md:text-secondary-50 md:font-serif lg:text-lg text-md md:font-bold">Room</h3>
                              </div>
                              <div className="bg-secondary-50 p-3 md:h-72 h-20">
                                <Select className="w-full"
                                    onChange={value => handleChange(room.type.id,room?.type.name,value,room?.type.pricePerNight)}
                                    
                                    defaultValue={selectedRoom[room.type.name] || 0}
                                    options={roomsList?.map((roomNo) => ({
                                      value: roomNo,  
                                      label: roomNo,
                                      disabled: disableOptions(roomNo,room?.type?.name),
                                    }))}
                                  />                 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        ):
                        (
                          <div key={room.type.id} className="shadow-lg mb-10 border border-solid border-secondary-200 relative">

                            <RoomCardHeader price={room.type.pricePerNight} available={room?.available} name={room?.type?.name}/>
                            <div className="bg-secondary-200">
                              <div className="p-4">
                                <div className="relative">
                                  <img src={Superior} alt="Superior Room"/>
                                  <div className="absolute w-full h-full flex top-0 justify-center items-center backdrop-brightness-50">
                                    <div className="p-5 border-4 border-red transform -rotate-[15deg]">
                                      <p className="lg:text-5xl md:text-3xl text-2xl font-bold text-red font-serif">Sold Out</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                  }
                  </React.Fragment>
              )
            })
          }  
        </div>
        <div className="w-72">                            
          <AvailableSummary searchData={searchData}/>
        </div>
      </div>
          </>
        )
      }
      </section>
      {
        openModal && <Allamenities amenities={amenitiesData} openModal={openModal} setOpenModal={setOpenModal}/>
      }
    </>
  )
}

const RoomDetails = ({ title,items,className }) => {
  return (
    <div className={className}>
      <p className="text-gray-100 text-sm">{title}</p>
      <div className="flex flex-col mt-2 gap-1">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center gap-1">
            <span className={`material-symbols-outlined text-[#237804] ${item.blueIcon}`}>
              {item.icon}
            </span>
            <span className="flex-1 text-gray-100">{item.label} {item.content} {item.optional}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableRooms


