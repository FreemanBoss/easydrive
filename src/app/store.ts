import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Assuming rootReducer is the combined reducer

const store = configureStore({
  reducer: rootReducer,
});


export type RootState = typeof store.dispatch
export default store;
