import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'cats',
    initialState: {
        selectedCat:null,    
        cats:null,
    },
    reducers: {
        convertCats(state, action){
            
            const res =  action.payload.map(item=>{
                return item = {
                    id:item.id,
                    name:item.breeds[0].name,
                    image:item.url,
                    description: item.breeds[0].description,
                    personality: {
                        adaptability:item.breeds[0].adaptability,
                        affection:item.breeds[0].affection_level,
                        child:item.breeds[0].child_friendly,
                        energy:item.breeds[0].energy_level,
                    },
                    weight: item.breeds[0].weight.metric
                }
            })
            state.cats = res;
        },

        adoptCat(state,action){
            state.selectedCat = action.payload
        },
    },
})

export const { adoptCat,convertCats } = dataSlice.actions

export default dataSlice.reducer