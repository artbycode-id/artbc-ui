
import React, { FC } from "react";
// create type for props

type ButtonTypeString = 'default' | 'primary' | 'danger' | 'link';

type ButtonProps = {
    label: string;
    type?: ButtonTypeString;
}


const Button: FC<ButtonProps> = ({ label, type = "default" }) => {

    let className = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
    switch (type) {
        case "primary":
            className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
            break;
        case "danger":
            className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
            break;
        case "link":
            className = "text-blue-500 hover:text-blue-700 ";
            break;
    }

    return (
        <button className={`font-bold py-2 px-4 rounded ${className}`}> {label} </button>
    )

}

export default Button;