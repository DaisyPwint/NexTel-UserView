import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import HomeTitle from "../title/HomeTitle";
import { useSelector } from "react-redux";
import { allRooms } from "../../features/roomType/typeSlice";

const DisplayRooms = () => {
  const rooms = useSelector(allRooms);

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
 