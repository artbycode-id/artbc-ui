
import React from 'react';


type TypographTypeString =  'Regfont'| 'Medfont'| 'Sbfont';

type TypographProps = {
    type: TypographTypeString;
    children?: React.ReactNode;
}

// export types
export { TypographProps, TypographTypeString };