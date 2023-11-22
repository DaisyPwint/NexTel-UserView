import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const RegisterRouteGuard = ({children}) => {
  const {totalQuantity} = useSelector(state => state.cart);

  if(totalQuantity > 0){
    return children
  }else{
    return <Navigate to={"/"}/>
  }
}

export default RegisterRouteGuard