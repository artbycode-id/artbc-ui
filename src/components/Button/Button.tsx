import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ type, children = <></> }) => {
    let listClass = {
        "primary": "bg-[#00B5AD] rounded-md py-2 px-4 text-white font-semibold text-sm",
        "d_small": "bg-white rounded-md border border-[#D0D5DD] py-2 px-4 text-[#475467] font-semibold text-sm",
        "medium": "bg-[#00B5AD] rounded-md py-2 px-4 text-white font-semibold text-md",
        "large": "bg-[#00B5AD] rounded-md py-2 px-4 text-white font-semibold text-lg",
        "d_medium": "bg-white rounded-md border border-[#D0D5DD] py-2 px-4 text-[#475467] font-semibold text-md",
        "d_large": "bg-white rounded-md border border-[#D0D5DD] py-2 px-4 text-[#475467] font-semibold text-lg",

    }
    return (
        <button className={listClass[type]}> {children} </button>
    )
}

export default Button;