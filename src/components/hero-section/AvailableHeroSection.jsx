import Superior from '../../assets/Superior.png';
import UpdateCheck from "../check-section/UpdateCheck"

const AvailableHeroSection = () => {
  return (
    <section className="bg-cover bg-center h-96 w-full flex items-center justify-cente" style={{backgroundImage: `url(${Superior})`}}>
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold uppercase text-[70px] mb-10">Enjoy Your Own Holiday</h1>
                <UpdateCheck/>
            </div>
        </div>        
    </section>
  )
}

export default AvailableHeroSection