import { DownOutlined, UpOutlined} from "@ant-design/icons"
import { Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setBookingDetail } from "../../../features/booking/bookingSlice";
import { useState } from "react";

const AvailableSummary = ({searchData}) => {
  const {rooms,totalQuantity,totalPrice} = useSelector(state => state.cart);
  const [activeKey,setActiveKey] = useState(["1"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      children: <>{rooms.map((room) => (
        <p key={room.roomType}>{`${room.quantity} x ${room.roomType}`}</p>
      ))}</>
    },
  ]

  const addBookingDetail = () => {
    dispatch(setBookingDetail({searchData,rooms,totalQuantity,totalPrice}))
    if(totalQuantity === 0){
      return alert("There is no rooms selected!")
    }
    navigate('/register',{state: {searchData,rooms,totalQuantity,totalPrice}})
  }

  return (
    <div className="flex flex-col lg:sticky lg:top-[100px] fixed w-full left-0 bottom-0 text-left gap-5 bg-secondary-50 py-6 px-8 shadow-lg border-[0.3px] border-secondary-200">
        <Collapse items={items} bordered="false" showArrow="false" expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <UpOutlined />} expandIconPosition="end" onChange={(keys) => setActiveKey(keys)}>
        </Collapse>
        <div className="border-[0.3px] border-secondary-200"/>
        <div className="flex justify-between">
            <p>Total Price</p>
            <p>USD {totalPrice}</p>
        </div>
        <button className="bg-primary p-2 text-secondary-50" onClick={addBookingDetail}>Next</button>
    </div>
  )
}

export default AvailableSummary
