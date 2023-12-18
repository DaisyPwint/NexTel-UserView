import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import SuccessAlert from './components/SuccessAlert'
import HotelLocation from './components/HotelLocation'
import dayjs from 'dayjs';
import PriceSummary from './components/PriceSummary';

const RegisterSuccessful = () => {
  const location = useLocation();
  const reservationsData = location.state;

  const checkIn = dayjs(reservationsData.checkIn).format("DD MM YYYY");
  const checkOut = dayjs(reservationsData.checkOut).format("DD MM YYYY")

  const roomTypeCounts = {};
  reservationsData.selectedRooms.forEach(roomType => {
    if(roomTypeCounts[roomType]){
        roomTypeCounts[roomType]++;
    }else{
        roomTypeCounts[roomType] = 1;
    }
  })
  const formattedRooms = Object.entries(roomTypeCounts).map(([roomType,quantity]) => ({
    roomType,
    quantity
  }));

  const onDownload = () => {
    window.print();
}
  
  return (
    <section className={`container mx-auto w-full lg:mt-14 :mt-5 pb-10`}>
        <div className={`flex lg:flex-row flex-col gap-4 mt-8 mb-8`} >
            <div className={`flex flex-col gap-6 text-left pl-2`}>
                <SuccessAlert/>
                <div className={`px-4 py-6 shadow-lg border-[0.3px] border-secondary-200`} >
                    <h2 className={`text-xl text-gray-100 font-medium`}>Booking Detail</h2>
                    <p className={`text-sm`}>Check your information carefully.</p>
                    <div className={`grid grid-cols-3 gap-10 mt-4`} >
                      {/* <div className={`flex flex-col gap-1`}>
                          <span className={`text-gray-50 text-sm capitalize`}>Reservation ID</span>
                          <p className={`text-gray-100`}> {reservationsData.reservationId} </p>
                      </div> */}
                      <div className={`flex flex-col gap-1`}>
                        <span className={`text-gray-50 text-sm capitalize`}> Phone </span>
                        <p className={`text-gray-100`}> {reservationsData.guestPhone} </p>
                      </div>
                      <div className={`flex flex-col gap-1`}>
                          <span className={`text-gray-50 text-sm capitalize`}> Name </span>
                          <p className={`text-gray-100`}> {reservationsData.guestName} </p>
                      </div>
                      <div className={`flex flex-col gap-1`}>
                        <span className={`text-gray-50 text-sm capitalize`}> Address </span>
                        <p className={`text-gray-100`}> {reservationsData.guestAddress} </p>
                      </div>
                      <div className={`flex flex-col gap-1`}>
                        <span className={`text-gray-50 text-sm capitalize`}> Email </span>
                        <p className={`text-gray-100`}> {reservationsData.guestEmail} </p>
                      </div>
                    </div>
                </div>
                <HotelLocation/>
                <p className={`text-gray-100`}>
                    Your booking is with <span className={`font-medium`}>Nextel Mandalay Hotel </span> directly and by completing this booking you agree to
                    <span className={`text-[#096DD9] font-medium underline`}> the booking conditions</span>, <span className={`text-[#096DD9] font-medium underline`}>general terms</span>, and <span className={`text-[#096DD9] font-medium underline`}>privacy policy</span>.
                </p>
            </div>
            <div className={`lg:w-72 w-full`}>
                <div className="lg:w-72 w-full text-left pl-2">
                    <div className="bg-secondary-50 shadow-lg border-[0.3px] border-secondary-200 mb-3">
                    <div className="bg-primary p-2 pl-5">
                        <p className="text-secondary-50">Reservation Summary</p>
                    </div>
                        <div className="p-5 flex flex-col gap-3">
                            <div className="flex justify-between"  >
                            <div className="flex flex-col">
                                <p className='mb-2 text-gray-50 lg:text-base text-md'>Check-in</p>
                                <p className='text-gray-100 font-medium text-lg'>{checkIn}</p>
                                <p className='text-secondary-400 lg:text-md text-sm'>From 02:00 PM</p>
                            </div>
                            <div className="flex flex-col">
                                <p className='mb-2 text-gray-50 lg:text-base text-md'>Check-out</p>
                                <p className='text-gray-100 font-medium text-lg'>{checkOut}</p>
                                <p className='text-secondary-400 lg:text-md text-sm'>Until 12:00 PM</p>
                            </div>
                            </div>
                            <div>
                                <p>Total length of stay:</p>
                                <p className='font-medium mt-2'>{`${reservationsData.lengthOfStay} ${reservationsData.lengthOfStay > 1 ? 'nights' : 'night'}`}</p>
                            </div>
                            <div className="border-[0.3px] border-secondary-200 my-5"/>

                            <div className="flex justify-between">
                                <div>
                                    <p>You selected</p>
                                    <p className='font-medium mb-2'>{`${reservationsData.totalRoom} ${reservationsData.totalRoom === 1 || reservationsData.totalRoom === 0 ? 'room' : 'rooms'}`} for {`${reservationsData.adult} ${reservationsData.adult === 1 || reservationsData.adult === 0 ? 'adult' : 'adults'}`} & {`${reservationsData.children} ${reservationsData.children === 1 || reservationsData.children === 0 ? 'child' : 'children'}`}</p>
                                    {formattedRooms?.map((room,index) => (
                                        <p key={index}>{`${room?.quantity} x ${room?.roomType} Room`}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <PriceSummary totalCost={reservationsData.totalCost}/>
                </div>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <button onClick={onDownload} className={` h-12 w-full text-secondary-50 bg-primary `}>Download PDF</button>
                    <Link to={"/"} className={` h-12 w-full text-gray-100 border border-gray-100 flex items-center justify-center `}>Done</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterSuccessful