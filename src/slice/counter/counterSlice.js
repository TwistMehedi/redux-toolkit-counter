import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
       increament: (state)=> {
        state.value++
    },
       decreamenr: (state)=> {state.value -= 1},
       increamenrByAmmoubt:(state, action)=>{
        state.value += action.payload
       },
       reset:(state)=> {state.value = 0}
    },
});

export const {increament, decreamenr, increamenrByAmmoubt, reset} = counterSlice.actions;
export default counterSlice.reducer;