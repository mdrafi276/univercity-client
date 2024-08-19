import { useParams } from "react-router-dom";
import { baseApi } from "../../../redux/api/baseApi";
import { TQueryParam, TResponse } from "../../../types";
import { buildCreateApi } from "@reduxjs/toolkit/query";

const courseManagementApi = baseApi.injectendpoients({
    endpoints: (builder) = ({
        getAllRegisteredSemester: buildCreateApi.query({
            const params = new URLSearchParams();

            if(args) {
                args.forEach((item: TQueryParam) => {
                    useParams.append(item.name, item.value as string);
                });
            }
            return {
                url: "/academic-semester",
                methoad: "GET",
                params: params,
            }
            providesText: ['semester']
        }
        transformResponse: (Response: TResponse<TAcademicSemester>){
            return: {
                data: response.data,
                    meta: response.meta
            }
        }
        )

        addRegisteredSemester: buildCreateApi.mutation({
            query: (data) => ({
                url: '/semester-registrations/create-semester-registration',
                method: 'POST',
                body: data,
            }),
            invelidatesTegs: ['semester']
        })
        updateRegistredSemester: builder.muation({
            query: (args) => ({
                url: `/semester-registrations/${args.id}`,
                method: 'PATCH',
                body: args.data,

            }),
            invalidatesTags: ['semester']
        }),
        addCourse: buildCreateApi.muation({
            query: (data) => ({
                url: '/courses/create-course',
                method: "POST",
                body: data,
            }),
            invelidatesTags: ['courses']
        })
    }),
})
export const { useAddAcademicSemesterMutation, useGetAllSemestersQuery, useAddCourseMutation } = courseManagementApi;
