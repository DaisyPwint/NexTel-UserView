import { apiSlice } from "../../app/services/apiSlice";

const amenityApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAmenitites : builder.query({
            query: () => '/amenities'
        }),
        getAmenityById : builder.query({
            query: (id) => `/amenities/${id}`
        })
    })
})

export const { useGetAllAmenityQuery,useGetAmenityByIdQuery } = amenityApiSlice;