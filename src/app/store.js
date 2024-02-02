import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fetaures/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//container for javascript apps
//stores whole state of the app in an immutable object tree
//have a single store for application

//counterReducer added to the store it is availble to the entire app through Provider in the index js
//provider provide the store
