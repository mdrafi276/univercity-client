import { baseApi } from "../../api/baseApi";

const academicSemisterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemister: builder.query({
            query: () => ({
                url: '/academic-semisters',
                method: 'GET',

            }),
        }),
    }),
})
export const { useGetAllSemisterQuery } = academicSemisterApi;