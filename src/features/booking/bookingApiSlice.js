import { apiSlice } from "../../app/services/apiSlice";

const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBooking : builder.mutation({
            query: (reserveData) => ({                
                url: '/reservations',
                method: 'POST',
                body: reserveData
            })
        })
    })
})
export const { useAddBookingMutation } = bookingApiSlice;