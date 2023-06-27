import { createSlice } from "@reduxjs/toolkit";
import ReducerParams from "../types/ReducerParams";
import { addOutfit } from "./outfits";

export enum Pages {
    OutfitsGrid = 1,
    ManageOutfit = 2,
    NewOutfit = 3
}


const pageSlice = createSlice({
    name: "page",
    initialState: Pages.OutfitsGrid,
    reducers: {
        changePage(state, params:ReducerParams<Pages>){
            return params.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(addOutfit, (state, payload) => {
            return Pages.NewOutfit;
        })
    }
})

export const {changePage} = pageSlice.actions;
export default pageSlice;