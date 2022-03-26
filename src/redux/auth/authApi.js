import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    getCurrentUser: build.query({
      query: () => '/users/current',
      providesTags: ['Auth'],
    }),
    login: build.mutation({
      query(credentials) {
        return {
          url: '/users/login',
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    register: build.mutation({
      query(credentials) {
        return {
          url: '/users/signup',
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    logout: build.mutation({
      query() {
        return {
          url: '/users/logout',
          method: 'POST',
        };
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApi;
