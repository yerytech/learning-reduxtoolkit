import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { demoSlice } from "./slice/slice";

export const store = configureStore({
    reducer: {
        demo:demoSlice.reducer
    }

});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();