import { apiSlice } from "../../app/services/apiSlice";

const checkApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        checkRoom : builder.mutation({
            query: ({checkIn,checkOut}) => {
                return (
                    {
                        url: '/room-types/availability',
                        method: 'POST',
                        body: {
                            checkInTime: checkIn,
                            checkOutTime: checkOut
                        }
                    }
                )
            }
        })
    })
})
export const { useCheckRoomMutation } = checkApiSlice;