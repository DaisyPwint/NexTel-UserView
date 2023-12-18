import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const SuccessRouteGuard = ({children}) => {
  const {bookingData} = useSelector(state => state.booking);
  console.log(bookingData);

  if(bookingData){
    return children
  }else{
    return <Navigate to="/" />
  }
}

export default SuccessRouteGuard