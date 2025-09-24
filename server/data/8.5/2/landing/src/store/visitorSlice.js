import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: null,
  phone: null,
};

const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    setFullName(state, action) {
      state.fullName = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    clearVisitor() {
      return initialState;
    },
  },
});

export const selectVisitor = (state) => state.visitor;
export const selectFullName = (state) => state.visitor.fullName;
export const selectPhone = (state) => state.visitor.phone;

export const { setFullName, setPhone, clearVisitor } = visitorSlice.actions;

export default visitorSlice.reducer;
