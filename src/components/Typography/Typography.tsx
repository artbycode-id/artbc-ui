import React, { FC } from "react";
import { TypographProps } from "./Tygraph.types";

const Typography: FC<TypographProps> = ({ type, children = <></> }) => {
    let listClass = {
        "Regfont": "ml-10 space-y-4 font-normal",
        "Medfont": "ml-10 space-y-4 font-[500]",
        "Sbfont": "ml-10 space-y-4 font-[700]"

    }
    return (
        <div className={listClass[type]}>
             {/* {children}  */}
            
             <p className="text-7xl">Display 1</p>
             <p className="text-6xl">Display 2</p>
             <p className="text-5xl">Heading 1</p>
             <p className="text-4xl">Heading 2</p>
             <p className="text-3xl">Heading 3</p>
             <p className="text-2xl">Heading 4</p>
             <p className="text-xl">Subheading</p>
             <p className="text-lg">Paragraft 1</p>
             <p className="text-base">Paragraft 2</p>
             <p className="text-sm">Paragraft 3</p>
             <p className="text-xs">Captions</p>

        </div>
    )
}

export default Typography;