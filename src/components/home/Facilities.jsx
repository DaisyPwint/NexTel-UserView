import HomeTitle from "../title/HomeTitle"

const amenities = [
  {
      "id": 1,
      "name": "Comfortable Beds",
      "icon": "bed"
  },
  {
      "id": 2,
      "name": "Private Bathroom",
      "icon": "bathroom"
  },
  {
      "id": 3,
      "name": "Towels and Toiletries",
      "icon": "dry-cleaning"
  },
  {
    "id": 4,
    "name": "Housekeeping",
    "icon": "bed"
},
{
    "id": 5,
    "name": "Elevator",
    "icon": "bathroom"
},
{
    "id": 6,
    "name": " Wake-up Service",
    "icon": "dry-cleaning"
},
{
  "id": 7,
  "name": "Private Bathroom",
  "icon": "bed"
},
{
  "id": 8,
  "name": "Television",
  "icon": "bathroom"
},
{
  "id": 9,
  "name": "Breakfast",
  "icon": "dry-cleaning"
},
{
  "id": 10,
  "name": "Min-fridge",
  "icon": "bathroom"
},
{
  "id": 11,
  "name": "In-room Jacuzzi",
  "icon": "dry-cleaning"
},
{
"id": 12,
"name": "Private Living Room",
"icon": "bed"
},
{
"id": 13,
"name": "Pool",
"icon": "bathroom"
},
{
"id": 14,
"name": "Room Service",
"icon": "dry-cleaning"
},
{
"id": 15,
"name": "Chair",
"icon": "bed"
},
{
"id": 16,
"name": "Dinner",
"icon": "bathroom"
},
{
"id": 17,
"name": "Ironing Facilities",
"icon": "dry-cleaning"
}
]

const Facilities = () => {

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