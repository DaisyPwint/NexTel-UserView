import { useGetAllAmenitiesQuery } from "../../features/roomType/typeApiSlice"
import HomeTitle from "../title/HomeTitle"

// const amenities = [
//   {
//       "id": 1,
//       "name": "Comfortable Beds",
//       "icon": "bed"
//   },
//   {
//       "id": 2,
//       "name": "Private Bathroom",
//       "icon": "bathroom"
//   },
//   {
//       "id": 3,
//       "name": "Towels and Toiletries",
//       "icon": "dry-cleaning"
//   },
//   {
//     "id": 4,
//     "name": "Comfortable Beds",
//     "icon": "bed"
// },
// {
//     "id": 5,
//     "name": "Private Bathroom",
//     "icon": "bathroom"
// },
// {
//     "id": 6,
//     "name": "Towels and Toiletries",
//     "icon": "dry-cleaning"
// },
// {
//   "id": 7,
//   "name": "Comfortable Beds",
//   "icon": "bed"
// },
// {
//   "id": 8,
//   "name": "Private Bathroom",
//   "icon": "bathroom"
// },
// {
//   "id": 9,
//   "name": "Towels and Toiletries",
//   "icon": "dry-cleaning"
// },
// {
//   "id": 10,
//   "name": "Private Bathroom",
//   "icon": "bathroom"
// },
// {
//   "id": 11,
//   "name": "Towels and Toiletries",
//   "icon": "dry-cleaning"
// },
// {
// "id": 12,
// "name": "Comfortable Beds",
// "icon": "bed"
// },
// {
// "id": 13,
// "name": "Private Bathroom",
// "icon": "bathroom"
// },
// {
// "id": 14,
// "name": "Towels and Toiletries",
// "icon": "dry-cleaning"
// },
// {
// "id": 15,
// "name": "Comfortable Beds",
// "icon": "bed"
// },
// {
// "id": 16,
// "name": "Private Bathroom",
// "icon": "bathroom"
// },
// {
// "id": 17,
// "name": "Towels and Toiletries",
// "icon": "dry-cleaning"
// }
// ]

const Facilities = () => {

  const {data:amenities,isLoading,error} = useGetAllAmenitiesQuery();

  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>error</p>
  }

  return (
    <section className="container mx-auto lg:mt-44 mt-24 mb-24 lg:mb-44 flex lg:flex-row flex-col">
        <div className="lg:w-96 mb-12">
            <HomeTitle text="Services and facilities"/>
        </div>
        <div className="flex-1">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2 text-left">
          {amenities.map((amenity) => (
          <ul key={amenity.id} className="list-disc list-inside">
            <li>{amenity.name}</li>
          </ul>
          ))}
          </div>
      </div>
    </section>
  )
}

export default Facilities