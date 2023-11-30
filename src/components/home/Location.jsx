import HomeTitle from "../title/HomeTitle"
import Map from './components/Map';

const Location = () => {
  return (
    <section className="bg-yellow-100 flex lg:flex-row flex-col lg:mt-44 mt-24 text-left pl-1">
        <div className="container mx-auto lg:max-w-[360px] w-full my-[24px] lg:my-[60px]">
          <h2 className="font-serif text-gray-200 text-4xl font-bold mb-8">Explore Our Location</h2>
          <div className="flex lg:flex-col md:flex-row flex-col gap-8">
            <div className="flex flex-col gap-10 w-full" >
              <div  className="flex flex-col gap-2" >
                <h3 className="text-gray-100 font-bold">Address</h3>
                <p  className="text-gray-50"> 78th Street & Sagaing Lan Kwal Street,Chan Mya Thar Si Township,Mandalay,Myanmar </p>
              </div>
               <div  className="flex flex-col gap-2" >
                  <h3 className="text-gray-100 font-bold">Phone</h3>
                  <p  className="text-gray-50">+959 798564344</p>
              </div>
            </div>
            <div  className="flex flex-col gap-10 w-full" >
              <div  className="flex flex-col gap-2" >
                <h3 className="text-gray-100 font-bold">E-mail</h3>
                <p  className="text-gray-50">nextelmandalay@gmail.com</p>
              </div>
              <div  className="flex flex-col gap-2" >
                <h3 className="text-gray-100 font-bold">Website</h3>
                <p  className="text-gray-50">nextelmandalay.com.mm</p>
              </div>
            </div>
          </div>
        </div>
        <Map/>
    </section>
  )
}

export default Location