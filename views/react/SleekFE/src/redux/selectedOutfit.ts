import { createSlice } from "@reduxjs/toolkit";
import Outfit from "../types/Outfit";
import ReducerParams from "../types/ReducerParams";
import { addOutfit } from "./outfits";


//todo link this slice to a property of the outfits slice

const selectedOutfit:Outfit = new Outfit("","","");

const selectedOutfitSlice = createSlice({
    initialState: selectedOutfit,
    name: "selectedOutfit",
    reducers: {
        setSelectedOufit(state, params:ReducerParams<Outfit>) {
            return params.payload;
        },

        editOutfit(state, params:ReducerParams<Outfit>) {
            return params.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(addOutfit, (state, params) => {
            return params.payload;
        })
    }
});


export const {editOutfit, setSelectedOufit} = selectedOutfitSlice.actions;
export default selectedOutfitSlice;