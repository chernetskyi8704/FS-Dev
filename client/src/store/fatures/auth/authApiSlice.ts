import { apiSlice } from "../../../api/apiSlice";

export interface AuthInputData {
  email: string;
  password: string;
}

export interface RegistrationResponceData {
  accessToken: string;
}

export interface LoginResponceData {
  accessToken: string;
}

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    registration: builder.mutation<void, AuthInputData>({
      query: newUserData => ({
        url: "/authentication/sign-up",
        method: "POST",
        body: newUserData,
      }),
    }),
    login: builder.mutation<LoginResponceData, AuthInputData>({
      query: userData => ({
        url: "/authentication/sign-in",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = extendedApiSlice;
