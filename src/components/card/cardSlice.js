import { createSlice } from "@reduxjs/toolkit";
import addAuthToken from "../../common/remote/addAuthHeader";
import { nabnakClient } from "../../common/remote/nabnak-client";

const initialState = {
    cardNumber: 0,
    cards: [],
};

const cardSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        addCardStore(state, action) {
            state.cards = [...state.cards, action.payload];
            state.cardNumber++;
        },
        removeCard(state, action) {
            const index = action.payload;
            for (let i = 0; i < state.cards.length; i++) {
                if (i === index) state.cards.splice(i, 1);
            }
            state.cardNumber--;
        },
    },
});

export default cardSlice.reducer;

export const { addCardStore, removeCard, sendCards } = cardSlice.actions;
