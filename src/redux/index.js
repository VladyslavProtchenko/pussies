import { configureStore } from '@reduxjs/toolkit'
import { swapApi } from './swapApi'
import catsReducer from './swapSlice'

export const store = configureStore({

    reducer: {
        cats: catsReducer,
        [swapApi.reducerPath]: swapApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(swapApi.middleware),
})