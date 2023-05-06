import { User } from "@/util/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  name: "",
  image: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.email = action.payload.email;
    },
  },
});

export const { initialize } = userSlice.actions;

export default userSlice.reducer;
