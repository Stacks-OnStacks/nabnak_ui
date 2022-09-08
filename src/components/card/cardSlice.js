import { createSlice } from "@reduxjs/toolkit";
import { nabnakClient } from "../../common/remote/nabnak-client";

const initialState = {
    admin: false,
    email: "guest",
    id: null,
};

const cardSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        cardStore(state, action) {
            const { email, admin, id } = action.payload;
            state.email = email;
            state.admin = admin;
            state.id = id;
        },
    },
});

export default cardSlice.reducer;

export const { cardStore } = cardSlice.actions;
