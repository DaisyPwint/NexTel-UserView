import Reception from '../../assets/Reception.png'

const Benefits = () => {
  return (
    <section className="container mx-auto mt-44 flex md:flex-row flex-col-reverse lg:gap-6 md:gap-4">
        <img src={Reception} alt="reception image" className='w-full object-cover' />
        <div className='pl-1 text-left'>
          <h3 className='font-serif text-gray-100 lg:text-5xl text-3xl lg:leading-[66px] md:leading-10 mb-4'>Benefits of Choosing Nextel Mandalay</h3>
            <BenefitDetail title={"best breakfast"} desc={"Indulge in the art of breakfast at our hotel, where mornings are transformed into culinary delights."} list={"01"} />
            <BenefitDetail title={"parking area"} desc={"Convenience meets peace of mind at our hotel's dedicated parking area."} list={"02"} />
            <BenefitDetail title={"24 hours electricity"} desc={"Experience the ultimate in convenience and comfort with our 24-hour electricity service at our hotel."} list={"03"} />
        </div>
    </section>
  )
}

const BenefitDetail = ({title,desc,list}) => {
  return (
    <div className="flex lg:gap-4 md:gap-2 gap-5 lg:mt-10 md:mt-7 mb-7">
      <div className="relative text-end lg:min-w-[70px] md:min-w-[56px] self-start lg:h-[85px] h-[62px] min-w-[54px] z-0 ">
        <span className='lg:text-[50px] text-4xl lg:leading-[55px] md:leading-[46px] text-gray-100 font-serif z-10'>{list}</span>
        <span className='bg-yellow-50 absolute left-0 bottom-0 lg:w-12 lg:h-14 w-10 rounded-bl-full aspect-square -z-10' />
      </div>
      <div>
        <h2 className='lg:text-3xl md:text-xl text-lg font-bold text-gray-100 font-serif capitalize'>{title}</h2>
        <p className='text-gray-50 lg:text-base md:text-xs mt-1'>{desc}</p>
      </div>
    </div>
  )
}

export default Benefits