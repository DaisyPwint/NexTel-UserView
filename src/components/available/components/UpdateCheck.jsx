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

    const contentStyle = {
    padding: "15px",
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    };

    const onChange = (value) => {
      setDate(value);      
    }

    const maxPeoplePerRoom = 5;
    const handleOperation = (name,opteration) => {
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
      
      const {data, error} = await checkRoom({checkIn,checkOut});

      console.log(error);
      dispatch(setData(data))
      if (error && error.status === 400) {
        const errorMessage = error.data && error.data.message ? error.data.message : 'Unknown error';
        dispatch(setError(error))
        console.log(errorMessage);
      }

      if(data){
        const searchParams = new URLSearchParams({
          checkIn: date[0].format(urlDateFormat),
          checkOut: date[1].format(urlDateFormat),
          room,
          adult: options.adult,
          children: options.children,
        });
        const searchUrl = `/search?${searchParams.toString()}`;
        navigate(searchUrl);
      }
    }

  return (
    <div className="bg-secondary-50 h-14">
        <div className="flex md:flex-row sm:flex-col">
          <RangePicker
            disabledDate={disabledDate}
            value={date}
            format={showDateFormat}
            onChange={onChange}
          />
          <Dropdown trigger={['click']}
          dropdownRender={() => (
            <div style={contentStyle}>
              <div className="bg-secondary-50">
                  <div className="w-52 flex justify-between m-3 text-[17px]">
                      <span>Room</span>
                      <div className="flex items-center gap-3">
                          <button className={`w-7 h-7 border border-solid border-1 border-primary ${options.room <= 1 || (options.room * maxPeoplePerRoom <= options.adult + options.children) ? 'disabled:cursor-not-allowed' : ''}`} disabled={options.room <= 1 || (options.room * maxPeoplePerRoom <= options.adult + options.children)} onClick={() => handleOperation('room','d')}>-</button>
                          <span>{options.room}</span>
                          <button className={`w-7 h-7 border border-solid border-1 border-primary ${options.room >= options.adult + options.children ? 'disabled:cursor-not-allowed' : ''}`} disabled={options.room >= options.adult + options.children} onClick={() => handleOperation('room','i')}>+</button>                        
                      </div>
                  </div>
                  <div className="w-52 flex justify-between m-3 text-[17px]">
                      <span>Adult</span>
                      <div className="flex items-center gap-3">
                      <button className={`w-7 h-7 border border-solid border-1 border-primary ${options.adult <= 1  ? 'disabled:cursor-not-allowed' : ''}`} disabled={options.adult <= 1} onClick={() => handleOperation('adult','d')}>-</button>                    
                          <span>{options.adult}</span>
                          <button className={`w-7 h-7 border border-solid border-1 border-primary ${options.room * maxPeoplePerRoom <= options.adult + options.children ? 'disabled:cursor-not-allowed' : ''}`} disabled={options.room * maxPeoplePerRoom <= options.adult + options.children} onClick={() => handleOperation('adult','i')}>+</button>
                      </div>
                  </div>
                  <div className="w-52 flex justify-between m-3 text-[17px]">
                      <span>Children</span>
                      <div className="flex items-center gap-3">
                          <button className={`w-7 h-7 border border-solid border-1 border-primary ${options.children <= 0 ? 'disabled:cursor-not-allowed' : ''}`} disabled={options.children <= 0} onClick={() => handleOperation('children','d')}>-</button>
                          <span>{options.children}</span>
                          <button className={`w-7 h-7 border border-solid border-1 border-primary ${options.room * maxPeoplePerRoom <= options.adult + options.children ? 'disabled:cursor-not-allowed' : ''}`} disabled={options.room * maxPeoplePerRoom <= options.adult + options.children} onClick={() => handleOperation('children','i')}>+</button>
                      </div>
                  </div>
              </div>            
            </div>
          )}
          >
            <div style={{border: '1px solid #000'}}>
              <a>
                <Space size={"large"}>
                    {`${options.room} Room . ${options.adult} Adult . ${options.children} Child`}
                    <DownOutlined />
                </Space>
              </a>
            </div>
          </Dropdown>
          <Button onClick={handleSearch}>Search</Button>
        </div>
    </div>
  )
}

export default UpdateCheck