import { useLocation } from 'react-router-dom';
import AvailableHeroSection from '../components/hero-section/AvailableHeroSection';
import AvailableRooms from '../components/rooms-section/AvailableRooms';

const Available = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const room = searchParams.get('room');
  const adult = searchParams.get('adult');
  const children = searchParams.get('children');

  const searchData = { checkIn, checkOut, room, adult, children };

  return (
    <>
      <AvailableHeroSection searchData={searchData} />
      <AvailableRooms searchData={searchData} />
    </>
  )
}

export default Available