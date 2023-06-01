import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const APIKEY = 'live_3aHUcOWci71RyAIrZraEJoGH7Ub6kHvqMaibkttHXLp35PJIT6JXgU5806UDKknv'

const baseUrl  = `https://api.thecatapi.com/v1/`;

export const swapApi = createApi({
    reducerPath: 'swapApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

    endpoints: (builder) => ({
        getCats: builder.query({
            query: ({limit}) => `images/search?limit=${limit}&breed_ids=beng&api_key=${APIKEY}`,
        }),
    }),
})

export const { useGetCatsQuery,  } = swapApi;