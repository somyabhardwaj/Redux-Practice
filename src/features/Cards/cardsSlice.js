import { createSlice } from "@reduxjs/toolkit";

const CardsSlice = createSlice({

    name:"cards",
    initialState:[
        {
            id:'1',
            title:'Card 1',
            content:'Card 1 is here'
        },
        {
            id:'1',
            title:'Card 1',
            content:'Card 1 is here'
        },
    ],
    
    reducers:{
        addCard:(state, action)=>{

            state.push(action.payload)
        }
            
    }

})

export const {addCard} = CardsSlice.actions;
export default CardsSlice.reducer;