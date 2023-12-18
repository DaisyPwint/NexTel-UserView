import { useState } from 'react';
import { DownOutlined , UpOutlined} from "@ant-design/icons"
import { Collapse } from "antd";
import { Link } from 'react-router-dom';
import { calculateTotalNights } from '../dateUtils';
import dayjs from 'dayjs';
import PriceSummary from './components/PriceSummary';

const RegisterSummary = ({state}) => {  
    const {searchData,rooms,totalPrice,totalQuantity} = state; 

    const { checkIn,checkOut,room,adult,children } = searchData;
    const searchParams = new URLSearchParams(searchData);
    const [activeKey,setActiveKey] = useState(["1"]);

    const formatCheckIn = dayjs(checkIn).format("DD MMM YYYY");
    const formatCheckOut = dayjs(checkOut).format("DD MMM YYYY")
    const totalNight = calculateTotalNights(checkIn,checkOut);

    const items = [
        {
          key: '1',
          label: <>{
            <div className="flex justify-between">
                <div>
                  <p>You selected</p>
                  <p className='font-medium mb-2'>{`${totalQuantity} ${totalQuantity === 1 || totalQuantity === 0 ? 'room' : 'rooms'}`}</p>
                </div>
                {/* <Button roomType="text" icon={<DownOutlined/>} onClick={() => setActiveKey(hasRooms ? ['1'] : [])}></Button> */}
            </div>
          }</>,
          children: <>{rooms?.map((room) => (
            <p key={room?.roomType}>{`${room?.quantity} x ${room?.roomType}`}</p>
          ))}</>
        },
      ]

  return (
    <div className="lg:w-72 w-full text-left sm:pl-2 md:pl-0">
        <h2 className="text-lg mb-3">Booking Summary</h2>
        <div className="bg-secondary-50 shadow-lg border-[0.3px] border-secondary-200 mb-3">
            <div className="bg-primary p-2 pl-5">
                <p className="text-secondary-50">Your Booking details</p>
            </div>
            <div className="p-5 flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className='mb-2 text-gray-50 lg:text-base text-md'>Check-in</p>
                        <p className='text-gray-100 font-medium text-lg'>{formatCheckIn}</p>
                        <p className='text-secondary-400 lg:text-md text-sm'>From 02:00 PM</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='mb-2 text-gray-50 lg:text-base text-md'>Check-out</p>
                        <p className='text-gray-100 font-medium text-lg'>{formatCheckOut}</p>
                        <p className='text-secondary-400 lg:text-md text-sm'>Until 12:00 PM</p>
                    </div>
                </div>
                <div>
                    <p>Total length of stay:</p> 
                    <p className='font-medium mt-2'>{`${totalNight} ${totalNight > 1 ? 'nights' : 'night'}`}</p>
                </div>
                <div className="border-[0.3px] border-secondary-200 my-5"/>
                <Collapse activeKey={activeKey} items={items} bordered="false" showArrow="false" expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <UpOutlined />} expandIconPosition="end" onChange={(keys) => setActiveKey(keys)} className='font-sans'>
                </Collapse>
                <Link
                to={`/search?${searchParams.toString()}`}
                className="underline underline-offset-2 mt-3 block w-fit text-blue">Change your selection</Link>
            </div>
        </div>
        <PriceSummary totalCost={totalPrice}/>
    </div>
  )
}

export default RegisterSummary