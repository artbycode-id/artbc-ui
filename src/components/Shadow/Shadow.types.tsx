
import React from 'react';


type ShadowTypeString =  'shadow_xm' | 'shadow_sm' | 'shadow_md' | 'shadow_lg' | 'shadow_xl' | 'shadow_2xl' | 'shadow_3xl' ;

type ShadowProps = {
    type: ShadowTypeString;
    children?: React.ReactNode;
}

// export types
export { ShadowProps, ShadowTypeString };