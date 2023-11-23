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

const AvailableRooms = ({searchData}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.check);
  console.log(data);
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
      console.log(typeArr,roomArr);
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
                  <div key={room.type.id} className="shadow-lg mb-10 border border-solid border-secondary-200 relative">
                    <span className="absolute top-28 right-[-20px] w-48 h-24 rounded-md bg-secondary-50 border-[1px] border-secondary-200 flex justify-center items-end before:content-['Only__rooms_left'] before:absolute before:w-full before:h-10 before:bg-primary before:text-secondary-50 before:rounded-bl-md before:flex before:justify-center before:items-center after:absolute after:bottom-[-2rem] after:right-[-14px] after:w-[5.7rem] after:h-8 after:bg-primary after:origin-bottom after:-rotate-45 after:-z-10">
                    <p className="text-gray-200 text-left absolute top-3"><span className="font-bold text-[20px]">USD {room.type.pricePerNight}</span>/per night</p>
                    </span>
                    <div className="bg-secondary-50 p-6 text-left">
                      <p className="text-primary">{room.type.name}</p>
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
