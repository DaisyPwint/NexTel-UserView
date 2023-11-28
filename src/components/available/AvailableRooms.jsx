import AvailableTitle from "../title/AvailableTitle"
import Superior from '../../assets/Superior.png';
import { Select} from "antd";
import AvailableSummary from "./components/AvailableSummary";
import { addAllRoomTypes, addRoomToCart, addSelectedRoom } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalNights } from "../dateUtils";

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
                    "id": 1,
                    "name": "Comfortable Beds",
                    "icon": "Comfortable Beds"
                },
                {
                    "id": 6,
                    "name": "Air Conditioning/Heating",
                    "icon": "Air Conditioning/Heating"
                },
                {
                    "id": 28,
                    "name": "In-Room Jacuzzi",
                    "icon": "In-Room Jacuzzi"
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
                    "icon": "Comfortable Beds"
                },
                {
                    "id": 6,
                    "name": "Air Conditioning/Heating",
                    "icon": "Air Conditioning/Heating"
                },
                {
                    "id": 28,
                    "name": "In-Room Jacuzzi",
                    "icon": "In-Room Jacuzzi"
                }
            ]
        },
        "available": 0
    }
]

const AvailableRooms = ({searchData}) => {
  const dispatch = useDispatch();
  // const {data} = useSelector(state => state.check);
  const userRoom = searchData?.room;
  // const [roomTypes, setRoomTypes] = useState({});
  // const [selectedRoom, setSelectedRoom] = useState({});

  const {rooms:selectRooms,roomTypes,selectedRoom} = useSelector(state => state.cart);
   
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
    <section className="container mx-auto mt-12">
      <AvailableTitle/>
      <div className="flex lg:flex-row flex-col mt-10 gap-7">
        <div className="flex-1">          
          {
            data?.map((room) => {
              const isSelectedRoom = selectRooms?.find(item => item.roomType === room.type.name);
              
              const roomsList = roomsArray(room.available);
              return (
                  <>
                    {
                    room?.available > 0 ? (
                      <div key={room.type.id} className="shadow-lg mb-10 border border-solid border-secondary-200 relative">
                    <span className="absolute top-28 right-[-20px] w-48 h-24 rounded-md bg-secondary-50 border-[1px] border-secondary-200 flex justify-center items-end before:content-['Only__rooms_left'] before:absolute before:w-full before:h-10 before:bg-red before:text-secondary-50 before:rounded-bl-md before:flex before:justify-center before:items-center after:absolute after:bottom-[-2rem] after:right-[-14px] after:w-[5.7rem] after:h-8 after:bg-red after:origin-bottom after:-rotate-45 after:-z-10">
                      <p className="text-gray-200 text-left absolute top-3"><span className="font-bold text-[20px]">USD {room.type.pricePerNight}</span>/per night</p>
                    </span>
                    <div className="bg-secondary-50 p-6 text-left">
                      <p className="text-primary">{room.type.name}</p>
                    </div>
                    <div className="bg-secondary-200">
                      <div className="p-4">
                        <img src={Superior} alt="Superior Room" />
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-2 pt-0 p-4">
                        <div className="flex-1 text-left flex flex-col gap-2">
                          <div className="bg-primary p-3">
                            <p className="text-secondary-50">Room Details</p>
                          </div>
                          <div className="bg-secondary-50 p-3 h-72">
                            <div>
                              <p>Your price includes</p>
                              <div>
                                <p><span className="font-semibold">Room size</span>: {room.type.size} m2</p>                      
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
                            <p className="font-bold">{`USD ${totalNight * room?.type.pricePerNight}`}</p>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        <div className="w-28 text-left flex flex-col gap-2">
                          <div className="bg-primary p-3">
                            <p className="text-secondary-50">Select Room</p>
                          </div>
                          <div className="bg-secondary-50 p-3 h-72">
                            <Select className="w-full"
                                onChange={value => handleChange(room.type.id,room?.type.name,value,room?.type.pricePerNight)}
                                
                                defaultValue={isSelectedRoom?.quantity || 0}
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
                        {/* <div className="relative"> */}
                          <span className="absolute top-28 right-[-20px] w-48 rounded-md bg-secondary-50 border border-secondary-200 flex flex-col justify-center">
                            <p className="text-gray-200 p-2"><span className="font-bold text-[20px]">USD {room.type.pricePerNight}</span>/per night</p>
                            <p className="text-secondary-100 font-gsans bg-red p-1 rounded-bl after:absolute after:bottom-[-2rem] after:right-[-14px] after:w-[5.7rem] after:h-8 after:bg-red after:origin-bottom after:-rotate-45 after:-z-10"> Only <span className="font-serif text-xl font-bold">{room?.available}</span> rooms left </p>
                          </span>
                        {/* </div> */}
                        <div className="bg-secondary-50 p-6 text-left">
                          <p className="text-primary">{room.type.name}</p>
                        </div>
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
                  </>
              )
            })
          }  
        </div>
        <div className="w-72">                            
            <AvailableSummary searchData={searchData}/>
        </div>
      </div>
    </section>
  )
}

export default AvailableRooms
