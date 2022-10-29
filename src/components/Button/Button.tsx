import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import classNames from 'classnames/bind';

const Button: FC<ButtonProps> = ({ children = <></>, className = '' }) => {
    let objClass = {
        "btn-primary": "bg-[#00B5AD] rounded-md py-2 px-4 text-white font-semibold text-sm",
        "btn-default": "bg-white rounded-md border border-[#D0D5DD] py-2 px-4 text-[#475467] font-semibold text-sm",
    }

    let cx  = classNames.bind(objClass);

    className = cx(className.split(' '))

    return (
        <button className={className}> {children} </button>
    )
}

export default Button;