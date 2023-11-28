import { useParams } from 'react-router-dom';
import image from '../../../assets/Superior.png';
import { useGetTypeByIdQuery } from '../../../features/roomType/typeApiSlice';
import { Link } from 'react-router-dom';

const Detail = () => {
  // const {id} = useParams();

  // const {data:roomDetail,isLoading,error} = useGetTypeByIdQuery(id);

  const roomDetail = {
    "id": 4,
    "name": "Deluxe Family",
    "maximumCapacity": 5,
    "size": "80",
    "pricePerNight": 500,
    "description": "The Deluxe Family Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
    "totalRoom": 4,
    "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "amenities": [
        {
            "id": 1,
            "name": "Comfortable Beds",
            "icon": "Comfortable Beds"
        },
        {
            "id": 6,
            "name": "Air Conditioning/Heating",
            "icon": "Air Conditioning/Heating"
        },
        {
            "id": 28,
            "name": "In-Room Jacuzzi",
            "icon": "In-Room Jacuzzi"
        }
    ]
}

const renderOverview = () => (
  <>
    <p className='font-serif text-3xl font-bold text-gray-100'>Overview</p>
    <div className='flex flex-col gap-2 mt-8'>
      {renderOverviewItem('Price per night', `USD ${roomDetail?.pricePerNight}`, "font-serif text-xl font-bold")}
      {renderOverviewItem('Size', `${roomDetail?.size} m²`)}
      {renderOverviewItem('Occupancy', roomDetail?.maximumCapacity)}
      {renderOverviewItem('Bed type', 'Double/Twin')}
    </div>
  </>
);

const renderOverviewItem = (label, value, style) => (
  <div className="grid grid-cols-2 gap-10 font-medium" key={label}>
    <p>{label}</p>
    <p> : <span className={` ${style} `} >  {value} </span> </p>
  </div>
);

const renderAmenities = () => (
  <>
    <p className='font-serif text-3xl font-bold text-gray-100'>In-room Amenities</p>
    <div className='grid grid-cols-3 gap-4 mt-8'>
      {roomDetail?.amenities.map(renderAmenity)}
    </div>
  </>
);

const renderAmenity = (amenity) => (
  <div key={amenity.id} className='capitalize flex items-center gap-2 text-gray-100'>
    <span className='material-symbols-rounded'>{amenity.icon}</span>
    <p>{amenity.name}</p>
  </div>
);

// if(isLoading){
  //   return <p>Loading...</p>
  // }

  // if(error){
  //   return <p>error</p>
  // }
  
  return (
    <section className='pb-12 text-left'>
      <div className="flex justify-center items-center">
        <div
          className="bg-cover bg-center h-96 w-full relative"
          style={{
            backgroundImage: `url(${roomDetail?.imageUrl})`
          }}
        >
          <div className='text-secondary-100 font-serif absolute bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-8 bg-black/10 backdrop-blur text-center'>
            <h2 className='text-4xl mb-1 capitalize'>{roomDetail?.name}</h2>
            <p className='font-gsans'>
              From <span className='font-bold font-serif text-xl'>USD {roomDetail?.pricePerNight}</span> / per night
            </p>
          </div>
        </div>            
      </div>
      <div className="container mx-auto lg:mt-24 md:mt-10">
        <div className='flex lg:flex-row flex-col lg:gap-16 md:gap-10 gap-8 mb-10'>
          <div className='w-[400px]'>
            {renderOverview()}
          </div>
          <div className='flex-auto'>
            {renderAmenities()}
          </div>
        </div>
        <div>
          <p className='font-serif text-3xl font-bold mb-8 text-gray-100'>Description</p>
          <p>{roomDetail?.description}</p>
        </div>
        <div className='flex justify-end mt-10'>
          <Link to={'/'} className='bg-primary text-secondary-50 p-4'>Discover more room</Link>
        </div>
      </div>
    </section>
  )
}

export default Detail

// bg-gray-50/[0.06] 