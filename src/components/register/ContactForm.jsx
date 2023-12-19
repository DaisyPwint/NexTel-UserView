import { useState,useEffect, useRef } from "react";
import { Form, Input, Checkbox, Modal, message} from "antd"
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import styles from './contactForm.module.css'
import Rules from "./components/Rules";
import { addBookingData, addUserInfo } from "../../features/booking/bookingSlice";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotalNights } from "../dateUtils";
import { useNavigate } from "react-router-dom";
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
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [phoneNo,setPhoneNo] = useState('');
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [openModal, setOpenModal] = useState(false);    
    const [checkValue, setCheckValue] = useState(false)
    const isValid = isPhoneValid(phoneNo);
    const dispatch = useDispatch();

    const {details,userInfo} = useSelector(state => state?.booking);
    const {searchData,rooms,totalPrice,totalQuantity} = details; 

    const { checkIn,checkOut,adult,children } = searchData;

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
      guestEmail: userInfo?.email, 
      guestPhone: userInfo?.phone, 
      guestAddress: userInfo?.address, 
      specialRequest: userInfo?.requests,
      adult,
      children,
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


  const handleInputChange = () => {
    const values = formRef.current.getFieldsValue();
    setPhoneNo(values.phone);
    setPhoneTouched(true); 
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
}

const onFinishFailed = () => {
  document.getElementById("userForm").scrollIntoView({behavior: "smooth", block: "start"})
}

// const phoneValidator =  (_, value) => {
//   if (!isPhoneValid(value)) {
//       throw new Error("Enter valid phone number!")
//   }
// }

  const onSubmit = async () => {    

      dispatch(addBookingData(bookingData));
      if(bookingData){
        message.success('Reservation Successful!');
        navigate('/success',{state: bookingData});     
      } 
      closeModal();
  }

  return (
   <>
     <div className="flex flex-col flex-1 text-left">
        <Form id={"userForm"} onFinish={onFinish} ref={formRef} onFinishFailed={onFinishFailed} initialValues={initialValues} form={form} autoComplete="off" layout="vertical" className="font-sans">
          <h2 className="text-lg mb-3">Contact Details</h2>
          <div className="bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
              <p className="mb-3 text-base font-medium">Let us know who you are.</p>
              
              <Form.Item name="name" label="Full Name" rules={[
                  {
                      required: true,
                      message: 'Please input your full name!',
                  }
              ]}>
                  <Input onChange={handleInputChange} placeholder="Enter your full name"/>
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
                  <Input onChange={handleInputChange} placeholder="example@gmail.com"/>
              </Form.Item>
              <p className="text-secondary-400">* You must enter the e-mail address in order to receive the confirmation by e-mail.</p>
              <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                }
              ]}
            >
              <PhoneInput onChange={handleInputChange} defaultCountry="mm" className={styles['input-container']} value="phoneNo"  /> 
            </Form.Item>
            {phoneTouched && !isValid && <div style={{ color: 'red' }}>Phone number is not valid</div>}
              <Form.Item name="address" label="Address" rules={[
                  {
                      required: true,
                      message: 'Please input your address!',
                      
                  },
                  ]}
                  >
                  <Input.TextArea onChange={handleInputChange} placeholder="Enter your address"/>
              </Form.Item>                  
          </div>
          <div className="flex flex-col bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
              <p className="mb-3 text-base font-medium">Special Requests(optional)</p>
              <p className="mb-3 text-secondary-400">Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!</p>
              <div>
                <Form.Item name="requests" label="Please write your requesets in English.">
                  <Input.TextArea onChange={handleInputChange} placeholder="Enter your requests"/>
                </Form.Item>
              </div>
          </div>
          <Rules/>    
          <div className={`flex justify-end gap-9 mt-5`}>
            <button to="/" onClick={handleBackButton} className={`h-10 px-4 border border-secondary-500 rounded-sm min-w-[114px] flex items-center justify-center hover:text-secondary-500 duration-300 outline-none`} >Back</button>
            <button type={"submit"} className={`color-btn min-w-[114px]`} >Book Now</button>
        </div>
        </Form>
    </div>
    <Modal open={openModal} footer={null} centered={true} closeIcon={false}
        width={460}>
            <h2 className={`font-medium text-xl text-gray-200 mb-6 !font-sans`}>Are you sure you want to reserve room(s)?</h2>
            <Form.Item>
                <Checkbox checked={checkValue} onChange={onCheck}>Agree to our hotel&apos;s booking policies and terms and conditions. Please review your reservation details carefully.</Checkbox>
            </Form.Item>
            <div className={`mt-10 flex items-center gap-10 justify-center`}>
                <button onClick={closeModal} className={`border-btn md:min-w-[170px] min-w-[120px]`} >Cancel</button>
                <button type={"button"} onClick={onSubmit} className={`color-btn disabled:bg-secondary-200 disabled:border-none md:min-w-[170px] min-w-[120px] disabled:cursor-not-allowed disabled:hover:opacity-100`} disabled={!checkValue} >Confirm</button>
            </div>
        </Modal>
   </>
  )
}

export default ContactForm
