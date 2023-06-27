import React from "react";
import Outfit from "../../types/Outfit";
import ActionButton from "../generalComponents/ActionButton";

export default function (props: { outfit: Outfit; newOutfit: boolean; onClick: React.MouseEventHandler<HTMLElement> }) {
    const { outfit } = props;

    return (
        <div className="flex flex-col items-start gap-3" key={outfit!.name}>
            <img src={outfit!.picture} className="h-96 object-cover" />
            <span className="font-bold">{outfit!.name}</span>
            <ActionButton onClick={props.onClick} className="w-24">Manage</ActionButton>
        </div>
    );
}
