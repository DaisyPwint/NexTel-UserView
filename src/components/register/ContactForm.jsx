import { useState,useEffect } from "react";
import { Form, Input, Checkbox, Modal, message, notification} from "antd"
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import styles from './contactForm.module.css'
import Rules from "./components/Rules";
import { addUserInfo } from "../../features/booking/bookingSlice";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotalNights } from "../dateUtils";
import { useAddBookingMutation } from "../../features/booking/bookingApiSlice";
import { Link, useNavigate } from "react-router-dom";
// import ReserveConfirmationModal from "./ReserveConfirmationModal";
import { clearCart } from "../../features/cart/cartSlice";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const ContactForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [phoneNo,setPhoneNo] = useState('');
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [openModal, setOpenModal] = useState(false);    
    const [checkValue, setCheckValue] = useState(false)
    const isValid = isPhoneValid(phoneNo);
    const dispatch = useDispatch();
    const [addBooking] = useAddBookingMutation();

    const {details,userInfo} = useSelector(state => state?.booking);
    const {searchData,rooms,totalPrice,totalQuantity} = details; 

    const { checkIn,checkOut,adult,children } = searchData;
    const numberOfGuest = adult + children;

    const totalNight = calculateTotalNights(checkIn,checkOut);

    const initialValues = {
      name: userInfo?.name || '', 
      email: userInfo?.email || '', 
      phone: userInfo?.phone || '', 
      address: userInfo?.address || '', 
      requests: userInfo?.requests || '',
    }

    const selectedRooms = rooms?.flatMap(room => Array.from({length: room.quantity},() => room.roomType));

    const bookingData = {
      guestName : userInfo?.name,
      email: userInfo?.email, 
      phone: userInfo?.phone, 
      address: userInfo?.address, 
      specialRequest: userInfo?.requests,
      numberOfGuest,
      totalRoom: totalQuantity,
      checkIn: checkIn,
      checkOut: checkOut,
      lengthOfStay: totalNight,
      totalCost: totalPrice,
      selectedRooms
    }

    useEffect(()=> {
    setPhoneTouched(false);
  },[])

  const handlePhoneChange = (newPhone) => {
    setPhoneNo(newPhone);
    setPhoneTouched(true); 
  };

  const handleBlur = () => {
    const values = form.getFieldsValue();
    dispatch(addUserInfo(values));
  }

  const closeModal = () => {
    setOpenModal(false)
    setCheckValue(false)
}

const onCheck = () => {
  setCheckValue(!checkValue)
}

const handleBackButton = () => {
  dispatch(clearCart())
}


const onFinish = (values) => {
  if(values){
    setOpenModal(true)
  }

  // console.log(values);
  // try {
  //     if(values){
  //         setOpenModal(true)
  //     }
  // }catch (error){
  //     throw new Error(error)
  // }
}

const onFinishFailed = () => {
  document.getElementById("userForm").scrollIntoView({behavior: "smooth", block: "start"})
}

const phoneValidator = async (rule, value) => {
  if (!isPhoneValid(value)) {
      throw new Error("Enter valid phone number!")
  }
}

// const phoneValidator = async (rule, value) => {
//   if (!isValidPhoneNumber(value)) {
//       throw new Error("Enter valid phone number!")
//   }
// }

  const onSubmit = async () => {
    // const isPhoneValidValue = isPhoneValid(phoneNo);

    // if (!isPhoneValidValue) {
    //   form.setFields([
    //     {
    //       name: 'phone',
    //       errors: ['Invalid phone number. Please enter a valid phone number.'],
    //     },
    //   ]);
    //   return;
    // }
    

      const {data,error} = await addBooking(bookingData);
      if(data){
        message.success('Reservation Successful!');
        navigate('/success',{state: data});
      }
      console.log(data);
      if (error && error.status === 400) {
        const errorMessage = error.data && error.data.message ? error.data.message : 'Unknown error';
        message.error(error?.data?.message || error?.error);
        console.log(errorMessage);
      }
      
      // console.log(bookingData);
      closeModal();
  }

  return (
   <>
     <div className="flex flex-col flex-1 text-left">
        <Form id={"userForm"} onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={initialValues} form={form} autoComplete="off" layout="vertical">
          <p className="mb-3">Contact Details</p>
          <div className="bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
              <p className="mb-3">Let us know who you are.</p>
              
                  <Form.Item name="name" label="Full Name" rules={[
                      {
                          required: true,
                          message: 'Please input your full name!',
                      }
                  ]}>
                      <Input onBlur={handleBlur} placeholder="Enter your full name"/>
                  </Form.Item>
                  <Form.Item name="email" label="Email" rules={[
                      {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                  ]}>
                      <Input onBlur={handleBlur} placeholder="example@gmail.com"/>
                  </Form.Item>
                  <p>* You must enter the e-mail address in order to receive the confirmation by e-mail.</p>
                  <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },{validator: phoneValidator}
                  ]}
                >
                  <PhoneInput onBlur={handleBlur} defaultCountry="mm" className={styles['input-container']} value="phoneNo" onChange={(newPhone) => handlePhoneChange(newPhone)} /> 
                </Form.Item>
                {phoneTouched && !isValid && <div style={{ color: 'red' }}>Phone is not valid</div>}
                {/* <Form.Item validateDebounce={500} label={"Phone"} name={'phone'} rules={[
                        {required : true, message : "Please provide your phone  number!"}, {validator: phoneValidator}
                    ]} initialValue={phone} >
                            <PhoneInput flags={flags} defaultCountry={"MM"} onChange={(value) => dispatch(setUserInfo({...userInfo, phone : value}))} value={phone} smartCaret={true} placeholder={"Enter your phone number"}/>
                    </Form.Item> */}
                  <Form.Item name="address" label="Address" rules={[
                      {
                          required: true,
                          message: 'Please input your address!',
                          
                      },
                      ]}
                      >
                      <Input.TextArea onBlur={handleBlur} placeholder="Enter your address"/>
                  </Form.Item>                  
          </div>
          <div className="flex flex-col bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
              <p>Special Requests(optional)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolore inventore ut aliquam saepe perspiciatis. Ipsum facere reiciendis minus saepe.</p>
              <div>
                <Form.Item name="requests" label="Please write your requesets in English.">
                  <Input.TextArea onBlur={handleBlur} placeholder="Enter your requests"/>
                </Form.Item>
              </div>
          </div>
          <Rules/>     
          {/* <Form.Item className="text-right">
            <Space>
            <Button htmlType="submit">Back</Button>
            <Button htmlType="submit">Submit</Button>
            </Space>
          </Form.Item> */}
          <div className={`flex justify-end gap-9`}>
            <button to="/" onClick={handleBackButton} className={`h-10 px-4 border border-secondary-500 rounded-sm min-w-[114px] flex items-center justify-center hover:text-secondary-500 duration-300 outline-none`} >Back</button>
            <button type={"submit"} className={`color-btn min-w-[114px]`} >Book Now</button>
        </div>
        </Form>
    </div>
    {
      openModal && (
        <Modal open={openModal} footer={null} centered={true} closeIcon={false}
            width={460}>
                <h2 className={`font-medium text-xl text-gray-200 mb-6 !font-sans`}>Are you sure you want to reserve room(s)?</h2>
                <Form.Item>
                    <Checkbox checked={checkValue} onChange={onCheck}>Agree to our hotel&apos;s booking policies and terms and conditions. Please review your reservation details carefully.</Checkbox>
                </Form.Item>
                <div className={`mt-10 flex items-center gap-10 justify-center`}>
                    <button onClick={closeModal} className={`border-btn min-w-[170px]`} >Cancel</button>
                    <button type={"button"} onClick={onSubmit} className={`color-btn min-w-[170px] disabled:cursor-not-allowed disabled:hover:opacity-100`} disabled={!checkValue}  >Confirm</button>
                </div>
            </Modal>
      )
    }
   </>
  )
}

export default ContactForm


