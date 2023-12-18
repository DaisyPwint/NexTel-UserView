import { Carousel } from 'antd';
import Superior from '../../assets/Superior.png';
import UpdateCheck from "./components/UpdateCheck"
import HotelBar from '../../assets/hotel-bar.jpg';
import HotelGym from '../../assets/hotel-gym.jpg';
import HotelMeeting from '../../assets/hotel-meeting.jpg';
import HotelSwimmingPool from '../../assets/hotel-swimming-pool.jpg';

const slideImgs = [
  HotelBar,
  HotelGym,
  HotelMeeting,
  HotelSwimmingPool,
  Superior
]

const AvailableHeroSection = ({searchData}) => {
  return (
    <section className='relative'>
      <Carousel dots={false} autoplay={true} autoplaySpeed={3000}>
        {
          slideImgs?.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={img || `Image ${index + 1}`}
                className={`w-full h-auto object-cover`}
              />
            </div>
          ))
        }
      </Carousel>  
        <div className='container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className="font-bold uppercase lg:text-[70px] md:text-[60px] text-[30px] md:mb-10 mb-7 mt-10 text-secondary-50">
          Enjoy Your Own Holiday
        </h1>
        <UpdateCheck searchData={searchData} />
        </div>
    </section>  
  )
}

export default AvailableHeroSection
// w-full h-[28rem] 
