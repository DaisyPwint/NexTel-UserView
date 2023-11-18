import { DownOutlined} from "@ant-design/icons"

const AvailableSummary = ({room}) => {
  console.log(room);
  return (
    <div className="flex flex-col lg:sticky fixed w-full left-0 lg:top-[100px] bottom-0 text-left gap-5 bg-secondary-50 py-6 px-8 shadow-lg border-[0.3px] border-secondary-200">
        <div className="flex justify-between">
            <div>
              <p>You selected</p>
              <p>{`${room ? room : 0} ${room >1  ? 'rooms' : 'room'}`}</p>
            </div>
            <div>
              <DownOutlined className="border-[1px] border-secondary-200 p-1"/>
            </div>
        </div>
        <p>{room} x Superior Room</p>
        <div className="border-[0.3px] border-secondary-200"/>
        <div className="flex justify-between">
            <p>Total Price</p>
            <p>USD 796</p>
        </div>
        <button className="bg-primary p-2 text-secondary-50">Next</button>
    </div>
  )
}

export default AvailableSummary