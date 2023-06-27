import React from "react";

export default function(props: {children?: string, id?: string, className?: string, onClick?: React.MouseEventHandler<HTMLElement>}){
    return <button id={props.id} className={`h-12 bg-blue-400 text-white ${props.className && props.className}`} onClick={props.onClick}>{props.children}</button>;
}