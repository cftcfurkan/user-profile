import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    setSurname: (state, action) => {
      return {
        ...state,
        surname: action.payload,
      };
    },
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },
  },
});

export const {setName,setSurname,setEmail,setPassword} = userSlice.actions;

export default userSlice.reducer;
