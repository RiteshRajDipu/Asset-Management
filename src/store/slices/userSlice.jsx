import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { name: '', email: '', password: '' },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.username;
            state.email = action.payload.email;
        },
        remove: (state) => {
            state.name = '';
            state.email = '';
        },
        setUsers: (state, action) => action.payload,
    },
});

export const { update, remove, setUsers } = userSlice.actions;
export default userSlice.reducer;