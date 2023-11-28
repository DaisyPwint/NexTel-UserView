import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.110.194:8080/api',
    }),
    endpoints: () => ({})
})
