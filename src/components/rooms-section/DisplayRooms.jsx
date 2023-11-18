import Superior from '../../assets/Superior.png'; 
import HomeTitle from '../title/HomeTitle';

const DisplayRooms = () => {
  return (
    <section className="container mx-auto mt-52">
        <HomeTitle text="Discover Most Suitable Room"/>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-20">
            <div className="relative h-96 shadow-md">
              <img src={Superior} alt="Superior Room" className='object-cover w-full h-full' />
              <div className='absolute flex flex-col gap-4 bg-secondary-50 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]'>
                <p>Superior Room</p>
                <p><span className="text-[30px] font-bold text-gray-200">USD 199 / </span>per night</p>
                <a href="">See Detail</a>
              </div>
            </div>
            <div className="relative h-96 shadow-md">
              <img src={Superior} alt="Superior Room" className='object-cover w-full h-full'  />
              <div className='absolute flex flex-col gap-4 bg-secondary-50 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]'>
                <p>Superior Room</p>
                <p><span className="text-[30px] font-bold text-gray-200">USD 199 / </span>per night</p>
                <a href="">See Detail</a>
              </div>
            </div>
            <div className="relative h-96 shadow-md">
              <img src={Superior} alt="Superior Room" className='object-cover w-full h-full'  />
              <div className='absolute flex flex-col gap-4 bg-secondary-50 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]'>
                <p>Superior Room</p>
                <p><span className="text-[30px] font-bold text-gray-200">USD 199 / </span>per night</p>
                <a href="">See Detail</a>
              </div>
            </div>
            <div className="relative h-96 shadow-md">
              <img src={Superior} alt="Superior Room" className='object-cover w-full h-full'  />
              <div className='absolute flex flex-col gap-4 bg-secondary-50 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]'>
                <p>Superior Room</p>
                <p><span className="text-[30px] font-bold text-gray-200">USD 199 / </span>per night</p>
                <a href="">See Detail</a>
              </div>
            </div>
            <div className="relative h-96 shadow-md">
              <img src={Superior} alt="Superior Room" className='object-cover w-full h-full'  />
              <div className='absolute flex flex-col gap-4 bg-secondary-50 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]'>
                <p>Superior Room</p>
                <p><span className="text-[30px] font-bold text-gray-200">USD 199 / </span>per night</p>
                <a href="">See Detail</a>
              </div>
            </div>
            <div className="relative h-96 shadow-md">
              <img src={Superior} alt="Superior Room" className='object-cover w-full h-full'  />
              <div className='absolute flex flex-col gap-4 bg-secondary-50 z-20 bottom-0 w-full p-5 rounded-tr-[3rem]'>
                <p>Superior Room</p>
                <p><span className="text-[30px] font-bold text-gray-200">USD 199 / </span>per night</p>
                <a href="">See Detail</a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default DisplayRooms