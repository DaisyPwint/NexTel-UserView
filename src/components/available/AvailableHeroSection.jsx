import { Carousel } from 'antd';
import Superior from '../../assets/Superior.png';
import UpdateCheck from "./components/UpdateCheck"

const slideImgs = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <h1 className="font-bold uppercase lg:text-[70px] md:text-[60px] text-[50px] mb-10 text-secondary-50">
          Enjoy Your Own Holiday
        </h1>
        <UpdateCheck searchData={searchData} />
        </div>
    </section>  
  )
}

export default AvailableHeroSection
// w-full h-[28rem] 
