import { useState,useEffect } from "react";
import { Form, Input, Button, message, Space } from "antd"
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import styles from './contactForm.module.css'
import Rules from "../Rules";

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
    const [phone,setPhone] = useState('');
    const [phoneTouched, setPhoneTouched] = useState(false);
    const isValid = isPhoneValid(phone);

    useEffect(()=> {
    setPhoneTouched(false);
  },[])

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
    setPhoneTouched(true); 
  };
  
  const onFinish = (values) => {
    const isPhoneValidValue = isPhoneValid(phone);

    if (!isPhoneValidValue) {
      form.setFields([
        {
          name: ['user', 'phone'],
          errors: ['Invalid phone number. Please enter a valid phone number.'],
        },
      ]);
      return;
    }

    console.log(values);

    message.success('Form submitted successfully!')
  }

  return (
    <div className="flex flex-col flex-1 text-left">
        <Form onFinish={onFinish} form={form} autoComplete="off" layout="vertical">
          <p className="mb-3">Contact Details</p>
          <div className="bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
              <p className="mb-3">Let us know who you are.</p>
              
                  <Form.Item name={['user','name']} label="Full Name" rules={[
                      {
                          required: true,
                          message: 'Please input your full name!',
                      }
                  ]}>
                      <Input placeholder="Enter your full name"/>
                  </Form.Item>
                  <Form.Item name={['user','email']} label="Email" rules={[
                      {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                  ]}>
                      <Input placeholder="example@gmail.com"/>
                  </Form.Item>
                  <p>* You must enter the e-mail address in order to receive the confirmation by e-mail.</p>
                  <Form.Item
                  name={['user', 'phone']}
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <PhoneInput defaultCountry="mm" className={styles['input-container']} value="phone" onChange={(newPhone) => handlePhoneChange(newPhone)} /> 
                </Form.Item>
                {phoneTouched && !isValid && <div style={{ color: 'red' }}>Phone is not valid</div>}
                  <Form.Item name={['user', 'address']} label="Address" rules={[
                      {
                          required: true,
                          message: 'Please input your address!',
                      },
                      ]}>
                      <Input.TextArea placeholder="Enter your address"/>
                  </Form.Item>
          </div>
          <div className="flex flex-col bg-secondary-50 p-5 shadow-lg border-[0.3px] border-secondary-200 mb-3">
              <p>Special Requests(optional)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolore inventore ut aliquam saepe perspiciatis. Ipsum facere reiciendis minus saepe.</p>
              <div>
                <Form.Item name={['user','requests']} label="Please write your requesets in English.">
                  <Input.TextArea placeholder="Enter your requests"/>
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


