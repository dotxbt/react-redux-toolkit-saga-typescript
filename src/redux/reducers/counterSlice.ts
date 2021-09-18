import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        noChange: () => {

        },
        resetCount: state => {
            state.value = initialState.value;
        }
    }
});

export const { increment, decrement, noChange, resetCount } = counterSlice.actions;
export default counterSlice.reducer;