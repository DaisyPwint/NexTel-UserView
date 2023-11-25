import { useState,useEffect } from "react";
import { Form, Input, Button, message, Space } from "antd"
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import styles from './contactForm.module.css'
import Rules from "./components/Rules";
import { addUserInfo } from "../../features/booking/bookingSlice";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotalNights } from "../dateUtils";
import { useAddBookingMutation } from "../../features/booking/bookingApiSlice";

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
    const [phoneNo,setPhoneNo] = useState('');
    const [phoneTouched, setPhoneTouched] = useState(false);
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
  
  const onFinish = async () => {
    const isPhoneValidValue = isPhoneValid(phoneNo);

    if (!isPhoneValidValue) {
      form.setFields([
        {
          name: 'phone',
          errors: ['Invalid phone number. Please enter a valid phone number.'],
        },
      ]);
      return;
    }

      const {data,error} = await addBooking(bookingData);
      message.success('Form submitted successfully!');
      if (error && error.status === 400) {
        const errorMessage = error.data && error.data.message ? error.data.message : 'Unknown error';
        
        console.log(errorMessage);
      }
  }

  return (
    <div className="flex flex-col flex-1 text-left">
        <Form onFinish={onFinish} initialValues={initialValues} form={form} autoComplete="off" layout="vertical">
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
                    },
                  ]}
                >
                  <PhoneInput onBlur={handleBlur} defaultCountry="mm" className={styles['input-container']} value="phoneNo" onChange={(newPhone) => handlePhoneChange(newPhone)} /> 
                </Form.Item>
                {phoneTouched && !isValid && <div style={{ color: 'red' }}>Phone is not valid</div>}
                  <Form.Item name="address" label="Address" rules={[
                      {
                          required: true,
                          message: 'Please input your address!',
                      },
                      ]}>
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
          <Form.Item className="text-right">
            <Space>
            <Button htmlType="submit">Back</Button>
            <Button htmlType="submit">Submit</Button>
            </Space>
          </Form.Item>
        </Form>
    </div>
  )
}

export default ContactForm


