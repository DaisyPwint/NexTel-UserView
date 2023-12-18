import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rooms : [
        {
            "id": 1,
            "name": "Deluxe Single",
            "maximumCapacity": 1,
            "size": "50",
            "pricePerNight": 100,
            "description": "Our Deluxe Single Room offers a plush single bed with high-quality linens for a restful sleep. It includes a work desk, complimentary Wi-Fi, and an en-suite bathroom with premium toiletries. Additional amenities include a flat-screen TV, mini-bar, in-room safe, and 24-hour room service. Experience comfort and convenience in the heart of the city.",
            "totalRoom": 8,
            "imageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
            "amenities": [
                {
                    "id": 1,
                    "name": "Comfortable Beds",
                    "icon": "bed"
                },
                {
                    "id": 6,
                    "name": "Towels and Toiletries",
                    "icon": "dry_cleaning"
                },
                {
                    "id": 10,
                    "name": "Housekeeping",
                    "icon": "cleaning_services"
                },
                {
                    "id": 20,
                    "name": "Elevator",
                    "icon": "elevator"
                },
                {
                    "id": 21,
                    "name": " Wake-up Service",
                    "icon": "alarm_smart_wake"
                },
                {
                    "id": 28,
                    "name": "Kitchenette",
                    "icon": "countertops"
                }
            ]
        },
        {
            "id": 2,
            "name": "Deluxe Double",
            "maximumCapacity": 2,
            "size": "80",
            "pricePerNight": 200,
            "description": "The Deluxe Double Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
            "totalRoom": 20,
            "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "amenities": [
                {
                    "id": 1,
                    "name": "Comfortable Beds",
                    "icon": "bed"
                },
                {
                    "id": 6,
                    "name": "Private Meeting Room",
                    "icon": "meeting_room"   
                },
                {
                    "id": 10,
                    "name": "Garden View",
                    "icon": "home_and_garden"
                },
                {
                    "id": 28,
                    "name": "Private Bathroom",
                    "icon": "bathroom"
                }
            ]
        },
        {
          "id": 3,
          "name": "Deluxe Double",
          "maximumCapacity": 2,
          "size": "80",
          "pricePerNight": 200,
          "description": "The Deluxe Double Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
          "totalRoom": 20,
          "imageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
          "amenities": [
            {
                "id": 1,
                "name": "Comfortable Beds",
                "icon": "bed"
            },
            {
                "id": 6,
                "name": "Private Meeting Room",
                "icon": "meeting_room"   
            },
            {
                "id": 10,
                "name": "Garden View",
                "icon": "home_and_garden"
            },
            {
                "id": 28,
                "name": "Private Bathroom",
                "icon": "bathroom"
            }
          ]
      },
      {
        "id": 4,
        "name": "Deluxe Double",
        "maximumCapacity": 2,
        "size": "80",
        "pricePerNight": 200,
        "description": "The Deluxe Double Room, with its king-sized bed and high-quality linens, ensures a restful sleep. It includes a modern bathroom, a seating area, and a flat-screen TV. Complimentary Wi-Fi, a stocked mini-bar, and a safe are also provided. Large windows offer city views. Guests have access to 24-hour room service. This room is a blend of comfort and luxury, perfect for both business and leisure stays.",
        "totalRoom": 20,
        "imageUrl": "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        "amenities": [
            {
                "id": 10,
                "name": "Housekeeping",
                "icon": "cleaning_services"
            },
            {
                "id": 20,
                "name": "Elevator",
                "icon": "elevator"
            },
            {
                "id": 21,
                "name": " Wake-up Service",
                "icon": "alarm_smart_wake"
            },
            {
                "id": 28,
                "name": "Kitchenette",
                "icon": "countertops"
            }
        ]
      }
      ]
}

const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
    }
})

export default typeSlice.reducer;

export const allRooms = state => state.type.rooms;

export const roomById = (state,id) => state?.type?.rooms?.find(room => room.id === id);

