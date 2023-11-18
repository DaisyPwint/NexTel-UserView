import Facilities from "../components/facilities-section/Facilities"
import HeroSection from "../components/hero-section/HeroSection"
import Location from "../components/location-section/Location"
import DisplayRooms from "../components/rooms-section/DisplayRooms"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <DisplayRooms/>
      <Location/>
      <Facilities/>
    </>
  )
}

export default Home