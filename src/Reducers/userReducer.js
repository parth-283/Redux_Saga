import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Parth",
  age: 20,
  joke: "",
};

// const userReducer = createReducer(initialState, (builder) => {
//   builder.addCase('UPDATE_NAME_SUCCESS', (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase('UPDATE_AGE_SUCCESS', (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase('JOKE_SUCCESS', (state, action) => {
//     state.joke = action.payload;
//   });
// });


const userReducer = createSlice({
  name:"myapp",
  initialState,
  reducers:{
    updateName(state,action){
      console.log(action.payload);
      state.name = action.payload
    },
    updateAge(state,action){
      state.age = action.payload
    },
    updateJoke(state,action){
      state.joke = action.payload
    },
  }
})

export const {updateName, updateAge, updateJoke} = userReducer.reducer
export default userReducer.reducer;
