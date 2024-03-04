import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '6177e727b6mshd6cf621e378580bp1bee6ejsn8118e1d68fb7',
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopChart: builder.query({
      query: () => 'charts/track?locale=en-US&pageSize=20&startFrom=0',
    }),
  }),
});
export const { useGetTopChartQuery } = shazamCoreApi;
