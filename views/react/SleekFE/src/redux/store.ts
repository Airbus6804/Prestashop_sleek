import { configureStore } from "@reduxjs/toolkit";
import outfitsSlice from "./outfits";
import selectedOutfitSlice from "./selectedOutfit";
import pageSlice, { Pages } from "./page";
import Outfits from "../types/Outfits";
import Outfit from "../types/Outfit";
import spotsSlice from "./spots";
import Spot from "../types/Spot";

const store = configureStore({
    reducer: {
        outfits: outfitsSlice.reducer,
        selectedOutfit: selectedOutfitSlice.reducer,
        page: pageSlice.reducer,
        spots: spotsSlice.reducer
    }
})


export type Store = {outfits: Outfits, selectedOutfit: Outfit, page: Pages, spots: Spot[]}
export type AppDispatch = typeof store.dispatch;
export default store;

