import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cardSlice from "../../components/card/cardSlice";
import loginSlice from "../../components/login/loginSlice";

const reducer = combineReducers({ loginSlice, cardSlice });

const store = configureStore({ reducer });

export default store;
