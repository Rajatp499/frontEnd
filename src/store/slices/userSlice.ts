import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  permissions: string[];
  phone: string;
  photo: string;
  roles: string[];
  status: boolean;
}
const initialState: User = {
  id: "",
  name: "",
  address: "",
  email:'',
  permissions: [],
  phone: "",
  photo: "",
  roles: [],
  status: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.photo = action.payload.photo;
      state.status = action.payload.status;
      state.permissions = action.payload.permission;
      state.roles = action.payload.roles;
    },
    removeUser: (state) => {
      state.id = '';
      state.name = '';
      state.email = '';
      state.address = '';
      state.phone = '';
      state.photo = '';
      state.status = false;
      state.permissions = [];
      state.roles = [];
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
