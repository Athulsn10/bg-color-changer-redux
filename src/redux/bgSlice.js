import { createSlice } from "@reduxjs/toolkit";

const bgSlice = createSlice({
  name: 'bgColor',
  initialState: {
    color: 'red', 
  },
  reducers: {
    setRed: (state) => {
        console.log("Setting color to Red");
      state.color = 'red'; 
      document.body.style.backgroundColor = 'red';
    },
    setBlue: (state) => {
        console.log("Setting color to blue");
      state.color = 'blue';
      document.body.style.backgroundColor = 'blue';
    },
    setGreen: (state) => {
        console.log("Setting color to green");
      state.color = 'green';
      document.body.style.backgroundColor = 'green';
    },
    setPurple: (state) => {
        console.log("Setting color to purple");
      state.color = 'purple'; 
      document.body.style.backgroundColor = 'purple';
    }
  }
});

export const { setRed, setBlue, setGreen, setPurple } = bgSlice.actions;
export default bgSlice.reducer;
