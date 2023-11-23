import HomeTitle from "../title/HomeTitle"

const Facilities = () => {
  return (
    <div className="container mx-auto mt-44 mb-44 flex lg:flex-row flex-col">
        <div className="flex-initial w-40">
            <HomeTitle text="Services and facilities"/>
        </div>
        <div className="flex-auto">
            <ul>
                <li>Spa</li>
            </ul>
        </div>
    </div>
  )
}

export default Facilities