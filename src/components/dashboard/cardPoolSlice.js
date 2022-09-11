import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardNumber: 0,
    cards: [],
};

const cardPoolSlice = createSlice({
    name: "card_pool",
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
        clearCards(state) {
            state.cards = [];
            state.cardNumber = 0;
        },
    },
});

export default cardPoolSlice.reducer;

export const { addCardStore, removeCard, clearCards } = cardPoolSlice.actions;
