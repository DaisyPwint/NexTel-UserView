import Alert from "antd/es/alert/Alert"
import {ConfigProvider} from 'antd'
import RegisterSummary from "../components/summary/RegisterSummary"
import ContactForm from "../components/form/ContactForm"

const Register = () => {
  return (
    <section className="container mx-auto">
        <ConfigProvider theme={{
            components: {
                Alert: {
                    withDescriptionIconSize : 50
                },
            }
        }}>
            <Alert className="text-left mt-28"
            message="Notice"
            description="Payment must be made within 24 hours..."
            type="info"
            showIcon
            />
        </ConfigProvider>
        <div className="flex gap-7 mt-8 mb-8">        
            <RegisterSummary/>        
            <ContactForm/>
        </div>
    </section>
  )
}

export default Register