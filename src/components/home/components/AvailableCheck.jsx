import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData,setError } from "../../../features/availability/checkSlice";

import dayjs from "dayjs";
import { DateRangePicker } from "../../DateRangePicker";
import { GuestSelector } from "../../GuestSelector";
import { SearchButton } from "../../SearchButton";

const urlDateFormat = "YYYY-MM-DD";
const tomorrow = dayjs().add(1,'day');
const dayAfterTomorrow = tomorrow.add(1,'day');

const AvailableCheck = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [date,setDate] = useState([tomorrow,dayAfterTomorrow])
    const [options,setOptions] = useState({
        room: 1,
        adult: 1,
        children: 0
    })    

    const handleDateChange = (value) => {
      setDate(value);      
    }

    const maxPeoplePerRoom = 5;
    const handleGuestChange = (name,opteration) => {
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
    
    const handleSearch = () => {

      const checkIn = date[0].format(urlDateFormat);
      const checkOut = date[1].format(urlDateFormat);
      const room = options.room;
      const adult = options.adult;
      const children = options.children;
      const checkData = {checkIn,checkOut,room,adult,children};

      dispatch(setData(checkData));
      dispatch(setError("'Unknown error'"));

      const searchParams = new URLSearchParams(checkData);
      const searchUrl = `/search?${searchParams.toString()}`;

      navigate(searchUrl);
    }

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="border-4 border-secondary-50 p-1">
        <DateRangePicker date={date} onChange={handleDateChange} className="h-14 border-0 lg:!h-14 md:!h-10  !rounded-sm lg:w-[330px] md:w-[250px] w-[354px] cursor-pointer inputFont" />
      </div>      
      <div className="border-4 border-secondary-50 p-1">
        <GuestSelector options={options} onGuestChange={handleGuestChange} maxPeoplePerRoom={maxPeoplePerRoom} className="flex bg-secondary-50 p-1 lg:!h-14 md:!h-10 !h-9 rounded-sm lg:w-[330px] md:w-[250px] w-[354px]"/>
      </div>
      <div className="border-4 border-secondary-50 p-1">
        <SearchButton onClick={handleSearch}       
        className="lg:!h-14 md:!h-10 !h-9 px-4 lg:w-[130px] md:w-[100px] w-[354px] text-white rounded-sm bg-primary text-secondary-50 hover:!text-secondary-50 border-0 lg:text-[18px]">Search</SearchButton>
      </div>      
    </div>
  )
}

export default AvailableCheck
