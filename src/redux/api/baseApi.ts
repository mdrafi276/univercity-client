import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';

const baseQuery = 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `${token}`)
      }
      return headers
    }

  });
const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
  let result = baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    console.log('Sending refresh token');
    const res = await fetch('/auth/refresh-token', {
      method: 'POST',
      credentials: 'include',
    })
    const data = await res.json();
    if (data.data.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.accessToken,
        })
      );
    } else {
      api.dispatch(logout())
    }

    result = await baseQuery(args, api, extraOptions);
  }
  return result;

}

export const baseApi = createApi({
  reducerPath: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
