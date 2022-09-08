import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: false,
    email: "guest",
    id: null,
};

const loginSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        loginStore(state, action) {
            const { email, admin, id } = action.payload;
            console.log(email, admin, id);
            state.email = email;
            state.admin = admin;
            state.id = id;

            console.log(state);
        },
        logoutStore(state) {
            state.email = initialState.email;
            state.admin = initialState.admin;
            state.id = initialState.id;
            console.log(state);
        },
    },
});

export default loginSlice.reducer;

export const { loginStore, logoutStore } = loginSlice.actions;
