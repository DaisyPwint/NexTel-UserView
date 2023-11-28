import { apiSlice } from "../../app/services/apiSlice";

const typeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllType: builder.query({
            query: () => '/room-types'
        }),
        getTypeById: builder.query({
            query: (id) => `/room-types/${id}`
        }),
        getAllAmenities: builder.query({
            query: () => '/amenities'
        })
    })
})

export const { useGetRoomTypeQuery,useGetAllAmenitiesQuery,useGetTypeByIdQuery } = typeApiSlice;