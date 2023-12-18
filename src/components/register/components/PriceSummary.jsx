import React from 'react'

const PriceSummary = ({totalCost}) => {
  return (
    <div className="shadow-lg border-[0.3px] border-secondary-200">
        <div className="bg-secondary-100 p-2 pl-5 border-b-[1px] border-secondary-200">
            <p className='text-gray-100 py-2 bg-secondary-50 lg:text-xl font-medium'>Your price summary</p>
        </div>
        <div className="bg-[#E6FEDB]   text-gray-100 p-5">
            <div className="flex items-center justify-between lg:text-3xl md:text-2xl font-medium mb-2">
                <p>Total</p>
                <p className='font-serif font-bold'>USD {totalCost}</p>
            </div>
            <p className='lg:text-sm text-xs'>Included in price : 5% tax and 10% service charge.</p>
        </div>
    </div>
  )
}

export default PriceSummary