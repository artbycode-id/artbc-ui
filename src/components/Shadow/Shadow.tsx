import React, { FC } from "react";
import { ShadowProps } from "./Shadow.types";

const Shadow: FC<ShadowProps> = ({ type, children = <></> }) => {
    let listClass = {
        "shadow_xm": "h-48 w-48 bg-gray-100 shadow-xm",
        "shadow_sm" : "h-48 w-48 bg-gray-100 shadow-sm",
        "shadow_md" : "h-48 w-48 bg-gray-100 shadow-md",
        "shadow_lg" : "h-48 w-48 bg-gray-100 shadow-lg",
        "shadow_xl" : "h-48 w-48 bg-gray-100 shadow-xl",
        "shadow_2xl" : "h-48 w-48 bg-gray-100 shadow-2xl",
        "shadow_3xl" : "h-48 w-48 bg-gray-100 shadow-3xl",

    }
    return (
        <section className="m-6">
            <h1> {children} </h1>
        <div className={listClass[type]}>  </div>
        </section>
    )
}

export default Shadow;