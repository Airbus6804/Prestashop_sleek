import { useState } from "react";
import Outfit from "../../types/Outfit";
import ActionButton from "../generalComponents/ActionButton";
import EditSpotsModal from "./EditSpotsModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Store } from "../../redux/store";
import { editOutfit } from "../../redux/selectedOutfit";
import { Pages, changePage } from "../../redux/page";


/*const outfit:Outfit =  {
        "picture": "https://assets-forwardvia-com.s3.amazonaws.com/images/_1200x630_crop_center-center_none/UK-Drip6.jpg",
        "name": "swag",
        "spots": [
            { "x": 20, "y": 30 },
            { "x": 50, "y": 60 }
        ],
        "description": "This is really cool"
    }
*/

export default function(){
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const outfit = useSelector<Store, Outfit>(state => state.selectedOutfit);
    
    

    return (
        <>
            <main className="flex flex-col w-72">
                <button onClick={() => dispatch(changePage(Pages.OutfitsGrid))}>Back</button>
                <input placeholder="Insert name" className="font-bold text-2xl mt-5 " value={outfit.name} onChange={(e) => dispatch(editOutfit({...outfit, name: e.target.value}))}/>
                <img src={outfit.picture} className=" h-96 object-cover"></img>
                <div className="flex gap-1 w-full mt-4">
                    <ActionButton onClick={() => setOpen(true)} className="flex-1">Edit Spots</ActionButton>
                    <ActionButton className="flex-1" onClick={() => {}}>Change Image</ActionButton>
                </div>
                <textarea placeholder="Insert description" onChange={(e) => {
                    dispatch(editOutfit({...outfit, description: e.target.value}));
                }} value={outfit.description}>
                    
                </textarea>
                <ActionButton onClick={() => {

                }}>Save</ActionButton>
            </main>
            <EditSpotsModal outfit={outfit} open={open} handleClose={() => setOpen(false)} />
        </>
    );

}

