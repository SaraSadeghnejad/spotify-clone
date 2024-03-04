import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api6.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '6177e727b6mshd6cf621e378580bp1bee6ejsn8118e1d68fb7',
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSongsByCountry: builder.query({
      query: ({ city, country }) => `shazam/top_tracks_city?city_name=${city}&country_code=${country}&limit=10`,
    }),
    getDetailSong: builder.query({
      query: (songid) => `/shazam/similar_tracks?track_id=${songid}&limit=10&offset=0`,
    }),
    getRelatedSong: builder.query({
      query: (id) => `/shazam/similar_tracks?track_id=${id}&limit=10&offset=0`,
    }),
    getArtistDetail: builder.query({
      query: (artistId) => `shazam/about_artist?artist_id=${artistId}`,
    }),
    getSongsBySearch: builder.query({
      query: (id) => `/shazam/search_artist?query=${id}&limit=10`,
    }),
  }),
});

export const {
  useGetSongsByCountryQuery,
  useGetRelatedSongQuery,
  useGetDetailSongQuery,
  useGetArtistDetailQuery,
  useGetSongsBySearchQuery,
} = shazamApi;
