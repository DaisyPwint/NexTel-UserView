import HeroImg from '../../assets/Hero.png';
import AvailableCheck from './components/AvailableCheck';

const HeroSection = () => {

  return (
      <section className="bg-gray-200 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-50 from-[-170%] to-gray-200 to-75%">
        <div className="container mx-auto relative">
          <div className='flex md:flex-row flex-col-reverse items-center gap-3'>
            <div className='flex-1 md:text-left mb-[55px] z-10'>
              {/* <div className="md:flex-col flex-row z-10"> */}
                {/* <h2 className="  font-variant-all-small-caps font-bold uppercase font-serif my-1" >find</h2> */}
                <h3 className="lg:text-[60px] lg:leading-[76px] md:text-[40px] text-[30px] md:leading-[60px] leading-[30px] text-secondary-100 lg:-mt-8 font-variant-all-small-caps font-bold uppercase font-serif" >
                  <span className='md:block lg:text-[90px] md:text-[70px] text-[30px] lg:leading-[140px] md:leading-[90px] text-primary'>Find</span>your next stay</h3>
              {/* </div> */}
              <div className='w-[350px] h-[4px] bg-secondary-50 rounded-md mt-2 lg:visible invisible'/>
              <div className='w-[250px] h-[4px] bg-secondary-50 rounded-md mt-6 lg:visible invisible'/>
              <p className='text-secondary-500 font-serif lg:mt-6 md:-mt-[28px] md:text-sm md:visible invisible'>We can&#39;t wait to  provide you with a memorable stay that you&#39;ll cherish. Book your stay with us today, and experience the perfect blend of luxury, convenience, and warm hospitality.</p>
            </div>
            <div className='flex-1'>
              <img src={HeroImg} alt="hero image" className='lg:mt-24 md:mt-20 mt-8 -mb-16'/>
            </div>
          </div>        
          <div className='absolute lg:bottom-24 md:bottom-12 bottom-[11px] z-20'>
            <AvailableCheck/>
          </div>
        </div>
      </section>
  )
}

export default HeroSection