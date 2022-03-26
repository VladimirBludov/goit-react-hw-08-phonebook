import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: build => ({
    getContacts: build.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    addContact: build.mutation({
      query(newContact) {
        return {
          url: `/contacts`,
          method: "POST",
          body: newContact,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    updateContact: build.mutation({
      query({ id, contact }) {
        return {
          url: `/contacts/${id}`,
          method: "PATCH",
          body: contact,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
