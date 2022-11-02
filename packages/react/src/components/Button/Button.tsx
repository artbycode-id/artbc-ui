import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ children = <></>, className = '' }) => {
    return (
        <button className={className}> {children} </button>
    )
}

export default Button;