import HeroImg from '../../assets/Hero.png';
import AvailableCheck from '../check-section/AvailableCheck';

const HeroSection = () => {

  return (
    <section className='w-screen h-[calc(100vh-5rem)]'>
      <div className="bg-gray-200 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-50 from-[-170%] to-gray-200 to-75%">
        <div className="container mx-auto relative">
          <div className='flex items-center gap-3'>
            <div className='flex-initial w-[710px]'>
              <h1 className="font-bold uppercase text-[70px] -mt-11 mb-10"><span className='text-primary'>Find</span> Your Next Stay</h1>
              <p>We can&#39;t wait to  provide you with a memorable stay that you&#39;ll cherish. Book your stay with us today, and experience the perfect blend of luxury, convenience, and warm hospitality.</p>
            </div>
            <div className='flex-auto'>
              <img src={HeroImg} alt="hero image" className='mt-32 -mb-16'/>
            </div>
          </div>        
          <div className='absolute bottom-28'>
            <AvailableCheck/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection