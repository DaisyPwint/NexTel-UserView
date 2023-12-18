import { DownOutlined, UpOutlined} from "@ant-design/icons"
import { Collapse,Modal } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setBookingDetail } from "../../../features/booking/bookingSlice";
import { useState } from "react";
import noRoomType from "../../../assets/no-roomType.png"

const AvailableSummary = ({searchData}) => {
  const {rooms,totalQuantity,totalPrice} = useSelector(state => state.cart);
  const [activeKey,setActiveKey] = useState(["1"]);
  const [openModal,setOpenModal] = useState(false);
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
      setOpenModal(true);
      return;
    }
    navigate('/register',{state: {searchData,rooms,totalQuantity,totalPrice}})
  }

  return (
   <>
    <div className="flex flex-col lg:sticky lg:top-[100px] fixed w-full left-0 bottom-0 text-left gap-5 bg-secondary-50 py-6 px-8 shadow-lg border-[0.3px] border-secondary-200 z-[2]">
        <Collapse items={items} bordered="false" showArrow="false" expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <UpOutlined />} expandIconPosition="end" onChange={(keys) => setActiveKey(keys)} className="font-sans">
        </Collapse>
        <div className="border-[0.3px] border-secondary-200"/>
        <div className="flex justify-between">
            <p>Total Price</p>
            <p>USD {totalPrice}</p>
        </div>
        <button className="bg-primary p-2 text-secondary-50" onClick={addBookingDetail}>Next</button>
    </div>
    <Modal centered open={openModal} footer={null} onCancel={() => setOpenModal(false)} width={300}>
      <div className="flex flex-col items-center justify-center">
        <img src={noRoomType} alt="error image" className='w-[100px] h-[100px]'/>
        <p className='text-secondary-500'>Please select one or more options you want to reserve room!</p>
      </div>
    </Modal>
   </>
  )
}

export default AvailableSummary
