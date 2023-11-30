import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.110.194:8080/api',
        // baseUrl: 'https://63bf-2a09-bac1-4b20-20-00-278-30.ngrok-free.app/api',
         // only fo ngrok api
        //  prepareHeaders: (headers) => {
        //     // headers.set("Access-Control-Allow-Origin", "*");
        //     headers.set("ngrok-skip-browser-warning", "69420");
        //     return headers;
        // },
    }),
    endpoints: () => ({})
})
