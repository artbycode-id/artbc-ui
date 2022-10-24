import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ type, children = <></> }) => {
    let listClass = {
        "primary": "bg-[#00B5AD] rounded-md py-2 px-4 text-white font-semibold text-sm",
        "default": "bg-white rounded-md border border-[#D0D5DD] py-2 px-4 text-[#475467] font-semibold text-sm",
    }
    return (
        <button className={listClass[type]}> {children} </button>
    )
}

export default Button;