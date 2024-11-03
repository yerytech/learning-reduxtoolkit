import {createSlice, PayloadAction } from '@reduxjs/toolkit';

interface propState { counter:number };

const initialState: propState = { 
  counter:10,            };

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },

        decrement: (state) => {
            if (state.counter <= 0) return;
            state.counter -= 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
            
        },
        resetCounter: (state) => {
            state.counter=initialState.counter
        }

    }
});
// Action creators are generated for each case reducer function
export const { increment, decrement,incrementBy,resetCounter} = demoSlice.actions;