import { apiSlice } from "../../../api/apiSlice";

export interface GetAllDealsResponceData {
  accessToken: string;
}

export interface DealItem {
  id: number;
  daysLeft: number;
  img: string;
  objName: string;
  objPrice: number;
  sold: string;
  ticketPrice: number;
  yield: string;
}

type GetAllDealResponce = DealItem[];

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllDeals: builder.query<GetAllDealResponce, void>({
      query: () => ({
        url: `/deals/all-deals`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDealsQuery } = extendedApiSlice;
