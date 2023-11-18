import { apiSlice } from "../../app/services/apiSlice";

const typeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllType: builder.query({
            query: () => '/room-types'
        }),
        getAllAmenities: builder.query({
            query: () => '/amenities'
        })
    })
})

export const { useGetRoomTypeQuery } = typeApiSlice;