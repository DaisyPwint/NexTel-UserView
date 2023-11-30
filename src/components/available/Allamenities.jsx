import React from 'react'
import { Modal } from 'antd'
import { useGetAllAmenitiesQuery } from '../../features/roomType/typeApiSlice'

// const amenities = [
//     {
//         "id": 1,
//         "name": "Comfortable Beds",
//         "icon": "bed"
//     },
//     {
//         "id": 2,
//         "name": "Private Bathroom",
//         "icon": "bathroom"
//     },
//     {
//         "id": 3,
//         "name": "Towels and Toiletries",
//         "icon": "dry-cleaning"
//     }
// ]

const Allamenities = ({openModal,setOpenModal}) => {
  const {data:amenities,isLoading,error} =  useGetAllAmenitiesQuery();

  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>error</p>
  }

  return (
    <Modal  open={openModal} footer={null} closeIcon={false} width={716} >
        <div className="flex items-center justify-between">
            <h2 className='font-serif font-bold text-2xl text-gray-100'>In-room Amenities</h2>
            <button onClick={() => setOpenModal(false)} className='text-gray-200 text-xl'>
                <span class="material-symbols-outlined">
                cancel
                </span>
            </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6">
            {
                amenities?.map(amenity => (
                    <div key={amenity.id} className='flex items-center gap-2 text-gray-100'>
                        <span className='material-symbols-outlined text-4xl'>{amenity.icon}</span>
                        <p>{amenity.name}</p>
                    </div>
                ))
            }
        </div>
    </Modal>
  )
}

export default Allamenities