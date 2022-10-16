
import React, { FC } from 'react';
// create type for props

type ButtonTypeString = 'default' | 'primary' | 'danger' | 'link';

type ButtonProps = {
    label: string;
    type?: ButtonTypeString;
    children?: React.ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ className = '', type = '', children = <></> }) => {
    let defaultClassName = ""
    switch (type) {
        case "primary":
            defaultClassName = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`;
            break;
        case "danger":
            defaultClassName = `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${className}`;
            break;
        case "link":
            defaultClassName = `text-blue-500 hover:text-blue-700 ${className}`;
            break;
    }

    return (
        <button className={defaultClassName}> {children} </button>
    )

}

export default Button;