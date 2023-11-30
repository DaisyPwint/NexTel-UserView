import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import HomeTitle from "../title/HomeTitle";
// import Superior from "../../assets/Superior.png";
import { useGetAllTypeQuery } from "../../features/roomType/typeApiSlice";

// const rooms = [
//   {
//       "id": 1,
//       "name": "Deluxe Single",
//       "maximumCapacity": 1,
//       "size": "50",
//       "pricePerNight": 100,
//       "description": "Our Deluxe Single Room offers a plush single bed with high-quality linens for a restful sleep. It includes a work desk, complimentary Wi-Fi, and an en-suite bathroom with premium toiletries. Additional amenities include a flat-screen TV, mini-bar, in-room safe, and 24-hour room service. Experience comfort and convenience in the heart of the city.",
//       "totalRoom": 8,
//       "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "amenities": [
//           {
//               "id": 1,
//               "name": "Comfortable Beds",
//               "icon": "Comfortable Beds"
//           },
//           {
//               "id": 6,
//               "name": "Air Conditioning/Heating",
//               "icon": "Air Conditioning/Heating"
//           },
//           {
//               "id": 10,
//               "name": "Room Service",
//               "icon": "Room Service"
//           },
//           {
//               "id": 20,
//               "name": "Laundry Facilities",
//               "icon": "Laundry Facilities"
//           },
//           {
//               "id": 21,
//               "name": "Ironing Facilities",
//               "icon": "Ironing Facilities"
//           },
//           {
//               "id": 28,
//               "name": "In-Room Jacuzzi",
//               "icon": "In-Room Jacuzzi"
//           }
//       ]
//   },
//   {
//       "id": 2,
//       "name": "Deluxe Double",
//       "maximumCapacity": 2,
//       "size": "80",
//       "pricePerNight": 200,
//       "description": "The Deluxe Single Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
//       "totalRoom": 20,
//       "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "amenities": [
//           {
//               "id": 1,
//               "name": "Comfortable Beds",
//               "icon": "Comfortable Beds"
//           },
//           {
//               "id": 6,
//               "name": "Air Conditioning/Heating",
//               "icon": "Air Conditioning/Heating"
//           },
//           {
//               "id": 10,
//               "name": "Room Service",
//               "icon": "Room Service"
//           },
//           {
//               "id": 28,
//               "name": "In-Room Jacuzzi",
//               "icon": "In-Room Jacuzzi"
//           }
//       ]
//   },
//   {
//     "id": 3,
//     "name": "Deluxe Double",
//     "maximumCapacity": 2,
//     "size": "80",
//     "pricePerNight": 200,
//     "description": "The Deluxe Single Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
//     "totalRoom": 20,
//     "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "amenities": [
//         {
//             "id": 1,
//             "name": "Comfortable Beds",
//             "icon": "Comfortable Beds"
//         },
//         {
//             "id": 6,
//             "name": "Air Conditioning/Heating",
//             "icon": "Air Conditioning/Heating"
//         },
//         {
//             "id": 10,
//             "name": "Room Service",
//             "icon": "Room Service"
//         },
//         {
//             "id": 28,
//             "name": "In-Room Jacuzzi",
//             "icon": "In-Room Jacuzzi"
//         }
//     ]
// },
// {
//   "id": 4,
//   "name": "Deluxe Double",
//   "maximumCapacity": 2,
//   "size": "80",
//   "pricePerNight": 200,
//   "description": "The Deluxe Single Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
//   "totalRoom": 20,
//   "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "amenities": [
//       {
//           "id": 1,
//           "name": "Comfortable Beds",
//           "icon": "Comfortable Beds"
//       },
//       {
//           "id": 6,
//           "name": "Air Conditioning/Heating",
//           "icon": "Air Conditioning/Heating"
//       },
//       {
//           "id": 10,
//           "name": "Room Service",
//           "icon": "Room Service"
//       },
//       {
//           "id": 28,
//           "name": "In-Room Jacuzzi",
//           "icon": "In-Room Jacuzzi"
//       }
//   ]
// }
// ]

const DisplayRooms = () => {
  const {data: rooms,isLoading,error} = useGetAllTypeQuery();
  console.log(rooms);

  const slidesToShow = rooms?.length >= 3 ? 3 : rooms?.length;

  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: rooms?.length >= 2 ? 2 : rooms?.length,
        slidesToScroll: rooms?.length >= 2 ? 2 : rooms?.length,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>error</p>
  }

  return (
    // <section className="carousel lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] mx-auto mt-14 w-full">
    <section className="carousel container mx-auto lg:mt-44 mt-24">
      <HomeTitle text="Discover Most Suitable Room" />
      {rooms?.length > 0 ? (
        <Carousel dots={true}
          slidesToScroll={1}
          slidesToShow={slidesToShow}
          autoplay
          autoplaySpeed={3000}
          pauseOnDotsHover={true}
          pauseOnHover={true}
          responsive={responsiveSettings}
          className="mt-20"
        >
          {rooms.map((room) => (
              <div key={room.id} className="relative h-96 shadow-md border-b-2 border-secondary-100">
                <img src={room.imageUrl} alt={room.name || "Room Image"} className="object-cover w-full h-full" />
                <div className="absolute bg-secondary-50 flex flex-col gap-4 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]">
                  <p>{room.name} Room</p>
                  <p>
                    <span className="text-[30px] font-bold text-gray-200">
                      USD {room.pricePerNight} /{" "}
                    </span>
                    per night
                  </p>
                  <Link to={`/detail/${room.id}`} className="text-blue">See Detail</Link>
                </div>
              </div>
          ))}
        </Carousel>
      ) : (
        <p>No rooms available</p>
      )}
    </section>
  );
};

export default DisplayRooms;
