import { useEffect } from "react"
import Alert from "antd/es/alert/Alert"
import {ConfigProvider} from 'antd'
import {RegisterSummary} from "../components/register"
import {ContactForm} from "../components/register"
import { useLocation, useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state  = location?.state || {};

  useEffect(() => {
    if (!location.state || !location.state.searchData || !location.state.rooms || !location.state.totalQuantity || !location.state.totalPrice) {
      navigate('/');
    }
  }, [location.state,navigate]);

  return (
    <section className="container mx-auto">
        <ConfigProvider theme={{
            components: {
                Alert: {
                    withDescriptionIconSize : 50
                },
            }
        }}>
            <Alert className="text-left mt-14 font-sans"
            message="Notice"
            description="Payment must be made within 24 hours..."
            type="info"
            showIcon
            />
        </ConfigProvider>
        <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 mt-8 mb-8">        
            <RegisterSummary state={state} />        
            <ContactForm/>
        </div>
    </section>
  )
}

export default Register