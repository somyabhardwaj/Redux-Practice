import { createSlice } from "@reduxjs/toolkit"

const initialState = [

    {
        id:'1',
        title:'Learning Redux',
        content:'I am Learning Redux',
    },
    {
        id:'1',
        title:'Learning Redux 2',
        content:'I am Learning Redux 2',
    },
]

const postSlice = createSlice(
    {
    name:'posts',
    initialState,
    reducers:{
        postAdded:(state, action)=>{
            state.push(action.payload);
        }
    }
    
}
)

export const {postAdded} = postSlice.actions
export const selectAllPosts = (state)=> state.posts;

export default postSlice.reducer