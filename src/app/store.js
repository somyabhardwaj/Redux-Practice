
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/post/postSlice";
import cardsReducer from "../features/Cards/cardsSlice";

export const store =configureStore({

    reducer:{
      
        posts:postsReducer,
        cards:cardsReducer,
    }
})