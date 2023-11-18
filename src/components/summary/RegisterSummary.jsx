import { DownOutlined } from "@ant-design/icons"

const RegisterSummary = () => {
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
                        <p>10 Oct 2023</p>
                        <p>From 02:00 PM</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Check-out</p>
                        <p>12 Oct 2023</p>
                        <p>From 12:00 PM</p>
                    </div>
                </div>
                <div>
                    <p>Total length of stay:</p> <br />
                    <p>2 nights</p>
                </div>
                <div className="border-[0.3px] border-secondary-200"/>
                <div className="flex justify-between">
                    <p>You selected</p>
                    <DownOutlined className="border-[1px] border-secondary-200 p-1"/>
                </div>
                <a href="" className="underline">Change your selection</a>
            </div>
        </div>
        <div className="shadow-lg border-[0.3px] border-secondary-200">
            <div className="bg-secondary-100 p-2 pl-5 border-b-[1px] border-secondary-200">
                <p>Your price summary</p>
            </div>
            <div className="bg-secondary-50 p-5">
                <div className="flex justify-between mb-2">
                    <p>Total</p>
                    <p>USD 796</p>
                </div>
                <p>included in price...</p>
            </div>
        </div>
    </div>
  )
}

export default RegisterSummary