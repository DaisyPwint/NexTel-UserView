import image from '../../../assets/Superior.png';

const Detail = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="bg-cover bg-center h-96 w-full"
          style={{
            backgroundImage: `url(${image})`
          }}
        ></div>      
      </div>
      <div className="container mx-auto">
        <div className='flex'>
        <div>
          <p>Overview</p>
          <div className='flex'>
            <div>
              <p>Price per night</p>
              <p>Size</p>
              <p>Occupacy</p>
              <p>Bed type</p>
            </div>  
            <div>
              <p>:USD 199</p>
              <p>:26.7- 30.7 m2</p>
              <p>:2</p>
              <p>: Double/Twin</p>
            </div>          
          </div>
        </div>
        <div>
          <p>In-room Amenities</p>
          <div className='flex'>
            <span>icon</span>
            <p>Comfortable beds</p>
          </div>
        </div>
        </div>
        <>
          <p>Description</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt sapiente totam, et quia architecto expedita dolor? Eligendi, hic rem.</p>
        </>
        <button className='bg-primary'>Discover more room</button>
      </div>
    </>
  )
}

export default Detail