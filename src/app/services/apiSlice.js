import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    endpoints: () => ({})
})
// http://192.168.0.100:8080/api