import HomeTitle from "../title/HomeTitle"
import Map from './Map';

const Location = () => {
  return (
    <section className="container mx-auto mt-44">
        <HomeTitle text="Explore Our Location"/>
        <div className="flex lg:flex-row flex-col mt-20">
          <div className="flex-1 flex-col">
           <div>
              <p>Address</p>
              <p>78</p>
           </div>
           <div>
              <p>Address</p>
              <p>78</p>
           </div>
           <div>
              <p>Address</p>
              <p>78</p>
           </div>
          </div>
          <Map className="flex-auto"/>
        </div>
    </section>
  )
}

export default Location