
const Rules = () => {
  return (
    <section>
        <p>Hotel Rules</p>
        <p>Nextel Mandalay takes special requests:</p>
        <div className="flex flex-col bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
            <div className="flex justify-between">
                <p>Check-in</p>
                <div  className="w-[500px]">
                    <p>From 2 : 00 PM</p>
                    <p>Guests are required to show a photo identification and credit card upon check-in.</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p>Check-out</p>
                <div className="w-[500px]">
                    <p>From 2 : 00 PM</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rules