import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: false,
    email: "guest",
    id: null,
    avatar: undefined,
};

const loginSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        loginStore(state, action) {
            const { email, admin, id, avatar } = action.payload;
            state.email = email;
            state.admin = admin;
            state.id = id;
            state.avatar = avatar;
        },
        logoutStore(state) {
            state.email = initialState.email;
            state.admin = initialState.admin;
            state.id = 1;
            state.avatar = undefined;
        },
    },
});

export default loginSlice.reducer;

export const { loginStore, logoutStore } = loginSlice.actions;
