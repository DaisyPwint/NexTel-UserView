import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import SuccessAlert from './components/SuccessAlert'
import HotelLocation from './components/HotelLocation'
import dayjs from 'dayjs';

const RegisterSuccessful = () => {
  const location = useLocation();
  const reservationsData = location.state;
  console.log(reservationsData)

  const checkIn = dayjs(reservationsData.checkIn).format("DD MM YYYY");
  const checkOut = dayjs(reservationsData.checkOut).format("DD MM YYYY")

  const onDownload = () => {
    window.print();
}
  
  return (
    <section className={`container mx-auto w-full lg:mt-14 :mt-5 pb-10`}>
        <div className={`flex lg:flex-row flex-col gap-4 mt-8 mb-8`} >
            <div className={`flex flex-col gap-6 text-left pl-2`}>
                <SuccessAlert/>
                <section className={`px-4 py-6 box-shadow rounded`} >
                    <h2 className={`text-xl text-gray-100 font-medium`}>Booking Detail</h2>
                    <p className={`text-sm`}>Check your information carefully.</p>
                    <div className={`grid grid-cols-3 gap-10 mt-4`} >
                      <div className={`flex flex-col gap-1`}>
                          <span className={`text-gray-50 text-sm capitalize`}>Reservation ID</span>
                          <p className={`text-gray-100`}> {reservationsData.reservationId} </p>
                      </div>
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
                </section>
                <HotelLocation/>
                <p className={`text-gray-100`}>
                    Your booking is with <span className={`font-medium`}>Nextel Mandalay Hotel </span> directly and by completing this booking you agree to
                    <span className={`text-[#096DD9] font-medium underline`}> the booking conditions</span>, <span className={`text-[#096DD9] font-medium underline`}>general terms</span>, and <span className={`text-[#096DD9] font-medium underline`}>privacy policy</span>.
                </p>
            </div>
            <div className={`lg:w-72 w-full`}>
                <div className="lg:w-72 w-full text-left pl-2">
                    <div className="bg-secondary-50 shadow-lg border-[0.3px] border-secondary-200 mb-3">
                        <div className="p-2 pl-5">
                            <p className="text-gray-50 font-bold">Your Booking details</p>
                        </div>
                        <div className="p-5 flex flex-col gap-3">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <p className='mb-2 text-gray-50 lg:text-base text-sm'>Check-in</p>
                                    <p className='text-gray-100 font-medium lg:text-xl'>{checkIn}</p>
                                    <p className='text-secondary-400 lg:text-base text-xs'>From 02:00 PM</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='mb-2 text-gray-50 lg:text-base text-sm'>Check-out</p>
                                    <p className='text-gray-100 font-medium lg:text-xl'>{checkOut}</p>
                                    <p className='text-secondary-400 lg:text-base text-xs'>From 12:00 PM</p>
                                </div>
                            </div>
                            <div>
                                <p>Total length of stay:</p> <br />
                                <p className='font-medium mt-2'>{`${reservationsData.lengthOfStay} ${reservationsData.lengthOfStay > 1 ? 'nights' : 'night'}`}</p>
                            </div>
                            <div className="border-[0.3px] border-secondary-200"/>

                            <div className="flex justify-between">
                                <div>
                                    <p>You selected</p>
                                    <p className='font-medium mb-2'>{`${reservationsData.totalRoom} ${reservationsData.totalRoom === 1 || reservationsData.totalRoom === 0 ? 'room' : 'rooms'}`} ${reservationsData.numberOfGuest} for  people</p>
                                    {reservationsData.selectedRooms?.map((room) => (
                                        <p key={room?.roomType}>{`${room?.quantity} x ${room?.roomType}`}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg border-[0.3px] border-secondary-200">
                        <div className="bg-secondary-100 p-2 pl-5 border-b-[1px] border-secondary-200">
                            <p className='text-gray-100 px-6 py-2 bg-secondary-50 lg:text-xl font-medium'>Your price summary</p>
                        </div>
                        <div className="bg-[#E6FEDB]   text-gray-100 p-5">
                            <div className="flex items-center justify-between lg:text-3xl md:text-2xl font-medium mb-2">
                                <p>Total</p>
                                <p className='font-serif font-bold'>USD {reservationsData.totalCost}</p>
                            </div>
                            <p className='lg:text-sm text-xs'>Included in price : 5% tax and 10% service charge.</p>
                        </div>
                    </div>
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