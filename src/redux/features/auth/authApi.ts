import { baseApi } from "../../api/baseApi";
import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            })
        })
    })
})

export const { useLoginMutation } = authApi;