import { useState } from "react";
import { DatePicker,Space, theme, Dropdown, Button} from "antd";
const { RangePicker } = DatePicker;
import { DownOutlined } from '@ant-design/icons'
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'; 
import { useNavigate } from "react-router-dom";
import { useCheckRoomMutation } from "../../../features/availability/checkApiSlice";
import { setData,setError } from "../../../features/availability/checkSlice";
import { useDispatch } from "react-redux";
import { DateRangePicker } from "../../DateRangePicker";
import { GuestSelector } from "../../GuestSelector";
import { SearchButton } from "../../SearchButton";
import { clearCart } from "../../../features/cart/cartSlice";

dayjs.extend(customParseFormat);
const disabledDate = (current) => {
    return current && current < dayjs().endOf('day');
}

const showDateFormat = "DD MMM YYYY";
const urlDateFormat = "YYYY-MM-DD";
const tomorrow = dayjs().add(1,'day');
const dayAfterTomorrow = tomorrow.add(1,'day');

const { useToken } = theme;

const UpdateCheck = ({searchData}) => {

    const { token } = useToken();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checkRoom] = useCheckRoomMutation();
    const checkIn = searchData?.checkIn ? dayjs(searchData?.checkIn) : tomorrow; 
    const checkOut = searchData?.checkOut ? dayjs(searchData?.checkOut) : dayAfterTomorrow;
    const [date,setDate] = useState([checkIn,checkOut])
    const [options,setOptions] = useState({
        room: searchData?.room ? parseInt(searchData?.room) : 1,
        adult: searchData?.adult ? parseInt(searchData?.adult) : 1 ,
        children: searchData?.children ? parseInt(searchData?.children) : 0
    })

    // const contentStyle = {
    // padding: "15px",
    // backgroundColor: token.colorBgElevated,
    // borderRadius: token.borderRadiusLG,
    // boxShadow: token.boxShadowSecondary,
    // };

    const onDateChange = (value) => {
      setDate(value);      
    }

    const maxPeoplePerRoom = 5;
    const onGuestChange = (name,opteration) => {
      if(name === 'room'){
        const updatedValue = opteration === 'i' ? options.room + 1 : options.room - 1;
        
        if(updatedValue >= 1 && updatedValue * maxPeoplePerRoom >= options.adult + options.children){
          setOptions((prev) => {
            return {
              ...prev,
              room : updatedValue
            }
          })
        }
        
      }else{
        const updatedValue = opteration === 'i' ? options[name] + 1 : options[name] -1;
        // const isDecrementDisabled = (opteration === 'd' && updatedValue <= 1) 
        // || (name === 'adult' && updatedValue <= options.room) || (name === 'children' <= options.room)
        
        // const isIncrementDisbaled = opteration === 'i' && updatedValue >= options.room * maxPeoplePerRoom;
        // && !isIncrementDisbaled

        const isDecrementDisabled = opteration === 'd' && (name === 'adult') && updatedValue < options.room;

        if (!isDecrementDisabled) {
                setOptions((prev) => {
                  return {
                    ...prev,
                    [name] : updatedValue
                  }
                })
              }
            }
    }

    const handleSearch = async () => {
      const checkIn = date[0].format(urlDateFormat);
      const checkOut = date[1].format(urlDateFormat);
      const room = options.room;
      
      // const {data, error} = await checkRoom({checkIn,checkOut});

      // console.log(error);
      // dispatch(setData(data))
      // if (error && error.status === 400) {
      //   const errorMessage = error.data && error.data.message ? error.data.message : 'Unknown error';
      //   dispatch(setError(error))
      //   console.log(errorMessage);
      // }

      // if(data){
        const searchParams = new URLSearchParams({
          checkIn: date[0].format(urlDateFormat),
          checkOut: date[1].format(urlDateFormat),
          room,
          adult: options.adult,
          children: options.children,
        });
      const searchUrl = `/search?${searchParams.toString()}`;
        navigate(searchUrl);
        dispatch(clearCart());

      // }
    }

  return (
    <div className="bg-secondary-50/50 backdrop-blur-xl p-6 mb-2">
        <div className="flex z-10 md:flex-row flex-col gap-6">
          <DateRangePicker date={date} onChange={onDateChange} className="border-0 lg:!h-14 md:!h-12 sm:!h-10 !rounded-sm lg:w-[450px] md:w-[250px] sm:w-[330px] cursor-pointer inputFont"/>          
          <GuestSelector options={options} onGuestChange={onGuestChange} maxPeoplePerRoom={maxPeoplePerRoom} className="flex bg-secondary-50 py-2 sm:py-[0.65rem] lg:!h-14 md:!h-12 sm:!h-10 rounded-sm lg:w-[500px] md:w-[250px] sm:w-[330px]"/>
          <SearchButton onClick={handleSearch} className="lg:!h-14 md:!h-12 sm:!h-10 px-4 lg:w-[150px] md:w-[100px] sm:w-[330px] text-white rounded-sm bg-primary text-secondary-50 hover:!text-secondary-50 border-0 lg:text-[18px]">Update</SearchButton>
        </div>
    </div>
  )
}

export default UpdateCheck