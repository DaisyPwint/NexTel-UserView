import { useState } from 'react';
import { CheckCircleOutlined, DownOutlined , UpOutlined} from "@ant-design/icons"
import { Collapse } from "antd";
import { Link } from 'react-router-dom';
import { calculateTotalNights } from '../dateUtils';

const RegisterSummary = ({state}) => {  
    const {searchData,rooms,totalPrice,totalQuantity} = state; 

    const { checkIn,checkOut,room,adult,children } = searchData;
    const searchParams = new URLSearchParams(searchData);
    const [activeKey,setActiveKey] = useState(["1"]);

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
    <div className="lg:w-72 w-full text-left pl-2">
        <p className="mb-3">Booking Summary</p>
        <div className="bg-secondary-50 shadow-lg border-[0.3px] border-secondary-200 mb-3">
            <div className="bg-primary p-2 pl-5">
                <p className="text-secondary-50">Your Booking details</p>
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
                    <p className='font-medium mt-2'>{`${totalNight} ${totalNight > 1 ? 'nights' : 'night'}`}</p>
                </div>
                <div className="border-[0.3px] border-secondary-200"/>
                {/* <div className="flex justify-between">
                    <p>You selected</p>
                    <DownOutlined className="border-[1px] border-secondary-200 p-1"/>
                </div> */}
                <Collapse activeKey={activeKey} items={items} bordered="false" showArrow="false" expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <UpOutlined />} expandIconPosition="end" onChange={(keys) => setActiveKey(keys)}>
                </Collapse>
                <Link
                to={`/search?${searchParams.toString()}`}
                className="underline underline-offset-2 mt-3 block w-fit">Change your selection</Link>
            </div>
        </div>
        <div className="shadow-lg border-[0.3px] border-secondary-200">
            <div className="bg-secondary-100 p-2 pl-5 border-b-[1px] border-secondary-200">
                <p className='text-gray-100 px-6 py-2 bg-secondary-50 lg:text-xl font-medium'>Your price summary</p>
            </div>
            <div className="bg-[#E6FEDB]   text-gray-100 p-5">
                <div className="flex items-center justify-between lg:text-3xl md:text-2xl font-medium mb-2">
                    <p>Total</p>
                    <p className='font-serif font-bold'>USD {totalPrice}</p>
                </div>
                <p className='lg:text-sm text-xs'>Included in price : 5% tax and 10% service charge.</p>
            </div>
        </div>
    </div>
  )
}

export default RegisterSummary