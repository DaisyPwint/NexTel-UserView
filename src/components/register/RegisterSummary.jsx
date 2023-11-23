import { useState } from 'react';
import { DownOutlined , UpOutlined} from "@ant-design/icons"
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
                  <p>{`${totalQuantity} ${totalQuantity === 1 || totalQuantity === 0 ? 'room' : 'rooms'}`}</p>
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
    <div className="w-72 text-left">
        <p className="mb-3">Booking Summary</p>
        <div className="bg-secondary-50 shadow-lg border-[0.3px] border-secondary-200 mb-3">
            <div className="bg-primary p-2 pl-5">
                <p className="text-secondary-50">Your Booking details</p>
            </div>
            <div className="p-5 flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p>Check-in</p>
                        <p>{checkIn}</p>
                        <p>From 02:00 PM</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Check-out</p>
                        <p>{checkOut}</p>
                        <p>From 12:00 PM</p>
                    </div>
                </div>
                <div>
                    <p>Total length of stay:</p> <br />
                    <p>{`${totalNight} ${totalNight > 1 ? 'nights' : 'night'}`}</p>
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
                className="underline">Change your selection</Link>
            </div>
        </div>
        <div className="shadow-lg border-[0.3px] border-secondary-200">
            <div className="bg-secondary-100 p-2 pl-5 border-b-[1px] border-secondary-200">
                <p>Your price summary</p>
            </div>
            <div className="bg-secondary-50 p-5">
                <div className="flex justify-between mb-2">
                    <p>Total</p>
                    <p>USD {totalPrice}</p>
                </div>
                <p>included in price...</p>
            </div>
        </div>
    </div>
  )
}

export default RegisterSummary