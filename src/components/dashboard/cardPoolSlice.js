import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardNumber: 0,
    cards: [],
};

const cardPoolSlice = createSlice({
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

export default cardPoolSlice.reducer;

export const { addCardStore, removeCard, sendCards } = cardPoolSlice.actions;
