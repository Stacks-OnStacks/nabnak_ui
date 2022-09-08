import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cardPoolSlice from "../../components/dashboard/cardPoolSlice";
import loginSlice from "../../components/login/loginSlice";

const reducer = combineReducers({ loginSlice, cardPoolSlice: cardPoolSlice });

const store = configureStore({ reducer });

export default store;
