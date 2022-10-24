
import React from 'react';


type ButtonTypeString = 'default' | 'primary';

type ButtonProps = {
    type: ButtonTypeString;
    children?: React.ReactNode;
}

// export types
export { ButtonProps, ButtonTypeString };