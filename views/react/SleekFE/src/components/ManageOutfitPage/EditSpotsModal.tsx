import React, { createRef, useEffect, useState } from "react";
import { Modal } from "@mui/material";
import Outfit from "../../types/Outfit";
import { useDispatch } from "react-redux";
import { addSpot, deleteSpot, setProductToSpot } from "../../redux/spots";
import SpotClass from "../../types/Spot";
import products from "../../products";
import ActionButton from "../generalComponents/ActionButton";
import { useSelector } from "react-redux";
import { Store } from "../../redux/store";
import SpotType from "../../types/Spot";

//TODO: create a reletionship one to many between spots and outfits


export default function EditSpotsModal(props: {
    outfit:Outfit,
    open: boolean;
    handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}) {
    /*const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);*/

    const { open, handleClose } = props;
    const [spotMenu, setSpotMenu] = useState<{open:boolean, spotId:string}>({open:false, spotId: "0"});

    const spots = useSelector<Store, SpotType[]>(state => state.spots)

    console.log(spotMenu);
    const dispatch = useDispatch();

    console.log(props);

    const addNewSpot = (e: React.MouseEvent<HTMLDivElement>) => {

        const target = e.target as HTMLElement;

        if(e.currentTarget !== target){ 
            console.log(target.nodeName)
            if(target.nodeName !== "IMG") return;
        }

        //width and height of the box
        const totalHeight = e.currentTarget.offsetHeight ;
        const totalWidth = e.currentTarget.offsetWidth;

        //click position
        const clickX = e.pageX - e.currentTarget.offsetLeft;
        const clickY = e.pageY - e.currentTarget.offsetTop;

        //get percentages

        const percentageX = (clickX / totalWidth) * 100;
        const percentageY = ((clickY / totalHeight) * 100);

        const newSpot = new SpotClass(percentageX, percentageY, props.outfit.id,-1);

        dispatch(addSpot(newSpot));
        setSpotMenu({open: true, spotId: newSpot.id})

    };

    const onSpotMenuClose = () => {
        setSpotMenu({spotId: "0", open: false})
    }

    const getSpot = (spotId:string):SpotClass => spots.find(spot => spot.id === spotId)!; 

    return (
        <Modal
            className="grid place-items-center relative"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className="flex flex-col">
                <span className="font-bold bg-white">
                    Click with your mouse in the position you'd like to add a
                    spot
                </span>
                <div className="relative" onClick={addNewSpot}>
                        <img
                            className="relative"
                            src={props.outfit.picture}></img>

                    {spots.filter(spot => spot.idOutfit === props.outfit.id).map((spot) => (
                        <Spot
                            onClick={(id) => {
                                setSpotMenu({ open: true, spotId: id });
                            }}
                            id={spot.id}
                            x={spot.x}
                            y={spot.y}></Spot>
                    ))}
                    <SpotMenu
                        spot={getSpot(spotMenu.spotId)}
                        open={spotMenu.open}
                        onClose={onSpotMenuClose}
                    />
                </div>
            </div>
        </Modal>
    );
}

function Spot(props: {x: number, y: number, onClick:(id:string) => void, id:string}){
    return (
        <span
            onClick={() => {props.onClick(props.id)}}
            className="absolute block w-6 h-6 border-4 border-blue-100 rounded-full bg-blue-400"
            style={{
                top: `calc(${props.y}% - 0.75rem)`,
                left: `calc(${props.x}% - 0.75rem)`,
            }}></span>
    );
}

function SpotMenu(props:{spot: SpotClass, open: boolean, onClose: () => void}) {

    //console.log("SpotMenu Spot = ", props.spot);

    const menuRef = createRef<HTMLDivElement>();

    const dispatch = useDispatch();


    const removeSpot = () => {
        props.onClose();
        dispatch(deleteSpot(props.spot));
    }

    const setProduct = (idProduct: number) => {
        const spot:SpotClass = JSON.parse(JSON.stringify(props.spot));

        spot.idProduct = idProduct;

        dispatch(setProductToSpot(spot));
    }

    const clickProduct = (idProduct: number, e: React.MouseEvent<HTMLDivElement>) => {
        setProduct(idProduct);

        removeHighlightClass();

        e.currentTarget.classList.add("!bg-blue-100")
    }

    const removeHighlightClass = () => {

        const menu = menuRef.current;
        for (let i = 0; i < menu!.children.length; i++) {
            menu?.children[i].classList.remove("!bg-blue-100");
        }
    }

    useEffect(() => {
        if(menuRef.current){
            removeHighlightClass();
            console.log(props.spot.idProduct);
            for(let i = 0; i < menuRef.current.children.length; i++){
            
                if(menuRef.current.children[i].getAttribute("aria-itemID") === props.spot.idProduct.toString()) menuRef.current.children[i].classList.add("!bg-blue-100")
            }
        }
    }, [props.spot?.id])

    console.log(props.open);

    if(!props.open) return <div></div>

    return (
        <div
            style={{
                top: props.spot.y + 1 + "%",
                left: props.spot.x + 1 + "%",
            }}
            className={`absolute bg-white rounded-md h-2/5 aspect-video flex flex-col ${!props.open && "hidden"}`}>
            <span className="border-b-2 border-black">Choose a product</span>
            <div ref={menuRef} className="flex flex-col overflow-y-auto">
                {products.map(product => <div aria-itemID={product.id_product} onClick={(e) => clickProduct(product.id_product, e)} className={`${product.id_product === props.spot.idProduct ? "!bg-blue-100" : ""} cursor-pointer hover:bg-blue-50`}>{product.name}</div>)}
            </div>
            <div className="border-solid border-t-2 border-black">
                <ActionButton onClick={props.onClose} className="h-8 rounded-md m-2 px-4">Close</ActionButton><button className="h-8 text-white bg-red-500 m-2 px-4 rounded-md" onClick={removeSpot}>Delete</button>
            </div>
        </div>
    );
}