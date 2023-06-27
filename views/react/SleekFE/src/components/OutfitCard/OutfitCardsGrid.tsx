import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//async actions
import { addOutfit } from "../../redux/outfits";

//actions
import { Pages, changePage } from "../../redux/page";


//types
import { AppDispatch, Store } from "../../redux/store";
import Outfit from "../../types/Outfit";
import Outfits from "../../types/Outfits";

//components
import OutfitCard from "./OutfitCard";

//data

import { setSelectedOufit } from "../../redux/selectedOutfit";


const newOutfit = new Outfit(
    "New Outfit",
    "Add new outfit",
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjExNTctMDI4XzEtbDFuM2E3dTUuanBn.jpg?s=oWyj-ZqVh4eF2My5dwpr9BJTD8sZJKSYtzTJOxkOWN0"
);

export default function () {
    const outfits = useSelector<Store, Outfits>(
        (state) => state.outfits
    );

    console.log("outfits: ", outfits);
    const dispatch = useDispatch<AppDispatch>();

    const [filterValue, setFilterValue] = useState<string>("");

    /*useEffect(() => {
        //dispatch(getOutfits());
    }, []);*/
    return (
        <>
            <span className="font-bold">Filter Outfits</span>
            <input
                className=" col-span-3 outline outline-blue-300 h-10 rounded-sm outline-1 focus:outline-2 "
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            />
            <main className="grid grid-cols-3 gap-4 gap-y-8 my-8">
                {outfits.map((outfit: Outfit) => {
                    if (
                        filterValue === "" ||
                        outfit.name
                            .toLowerCase()
                            .includes(filterValue.toLowerCase())
                    )
                        return <OutfitCard onClick={() => {
                            dispatch(setSelectedOufit(outfit))
                            dispatch(changePage(Pages.ManageOutfit))
                        }} newOutfit outfit={outfit} />;
                    else return;
                })}

                <OutfitCard onClick={() => {
                            const outfit = new Outfit(newOutfit.name, newOutfit.description, newOutfit.picture);
                            //dispatch(setSelectedOufit(outfit));
                            //dispatch(changePage(Pages.NewOutfit));
                            dispatch(addOutfit(outfit));
                        }} outfit={newOutfit} newOutfit />
            </main>
        </>
    );
}
