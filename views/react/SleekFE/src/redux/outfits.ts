import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Outfits from "../types/Outfits";

import { editOutfit } from "./selectedOutfit";
import Outfit from "../types/Outfit";
import ReducerParams from "../types/ReducerParams";


let firstFetch = true;

// @ts-ignore
const outfits:Outfits = ps_outfits;

export const getOutfits = createAsyncThunk(
    'async/getOutfits',
    async () => {
        
        const stream = await fetch("http://localhost:5173/src/outfits.json");

        const data = await stream.json();
        

        return data;
    }
)

const outfitsSlice = createSlice({
    name: "outfits",
    initialState: outfits,
    reducers: {
        addOutfit(state, params:ReducerParams<Outfit>){
            state.push(params.payload);
        }
    },

    extraReducers: (builder) => {

        builder.addCase(getOutfits.fulfilled, (state, action) => {
            //console.log("action: ", action.payload)
            if(!firstFetch){ 
                return state;
            }
            firstFetch = false;
            return action.payload;
        });

        builder.addCase(editOutfit, (state, action) => {
           const outfitIndex = state.findIndex(outfit => outfit.id === action.payload.id);
           console.log(action);
           state[outfitIndex] = action.payload;
        })


    }



})

export const {addOutfit} = outfitsSlice.actions;
export default outfitsSlice;