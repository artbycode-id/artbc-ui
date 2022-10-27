
import React from 'react';


type ButtonTypeString =  'primary' | 'medium' | 'large' | 'd_small' | 'd_medium' | 'd_large';

type ButtonProps = {
    type: ButtonTypeString;
    children?: React.ReactNode;
}

// export types
export { ButtonProps, ButtonTypeString };