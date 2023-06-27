import { createSlice } from "@reduxjs/toolkit";
import Spot from "../types/Spot";
import ReducerParams from "../types/ReducerParams";

const initialState:Array<Spot> = [];

const spotsSlice = createSlice({
    name: "spots",
    initialState,
    reducers: {
        addSpot(state, params:ReducerParams<Spot>) {
            state.push(params.payload);
        },

        deleteSpot(state, params:ReducerParams<Spot>) {
            return state.filter(
                (spot) => spot.id !== params.payload.id
            );
        },

        setProductToSpot(state, params:ReducerParams<Spot>) {
            const spotIndex = state.findIndex(
                (spot) => spot.id === params.payload.id
            );
            state[spotIndex].idProduct = params.payload.idProduct;
        },
    },
});


export const {addSpot, deleteSpot, setProductToSpot} = spotsSlice.actions;
export default spotsSlice;