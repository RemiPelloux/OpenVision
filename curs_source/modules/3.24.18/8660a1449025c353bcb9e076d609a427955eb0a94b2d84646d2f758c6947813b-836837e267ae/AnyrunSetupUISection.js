import { Gr, ol } from "./Ycg.js";
import { pk } from "./_Hv.js";
import { kYr, wYr } from "./backgroundComposerConstants.js";
import { FS } from "./button_4.js";
import { mk } from "./gallerySection.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { Ee, Xc, pi } from "./ze.js";
var tqv, nqv;
export { nqv, tqv };
var __wakaru_SoC_initialized = false;
export function SoC() {
if (__wakaru_SoC_initialized) return;
__wakaru_SoC_initialized = true;
"use strict";
E(), at(), at(), pi(), wYr(), vo(), FS(), mk(), tqv = wt("<h3>Anyrun Setup UI"), nqv = ()=>{
    const t = Gr();
    return Xc(()=>{
        t.commandService.executeCommand(kYr);
    }), Ee(pk, {
        title: "Anyrun Setup UI",
        class: "flex flex-col gap-2 !items-center justify-center w-full box-borders",
        get children () {
            return [
                tqv(),
                Ee(ol, {
                    onClick: ()=>{
                        t.commandService.executeCommand(kYr);
                    },
                    children: "Show Modal"
                })
            ];
        }
    });
};

}
