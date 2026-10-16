import { L6 } from "./Ycg.js";
import { Bu, Iw } from "./hoverWidget.js";
import { E } from "./tslib.es6.js";
import { O6 } from "./useVSHoverTooltip.js";
var pme;
export { pme };
var __wakaru_oye_initialized = false;
export function oye() {
if (__wakaru_oye_initialized) return;
__wakaru_oye_initialized = true;
"use strict";
E(), Iw(), O6(), pme = (t = {})=>{
    const { showHover: e, hideHover: n } = L6(t.delay), i = t.additionalClasses ?? [
        "chat-hover-tooltip"
    ];
    return {
        showHover: (s, o, a = t.position ?? Bu.ABOVE, l)=>{
            e({
                content: o,
                target: s.currentTarget,
                appearance: {
                    showPointer: !t.noPointer,
                    compact: !0
                },
                position: {
                    hoverPosition: a
                },
                container: t.useContainer ? s.currentTarget : void 0,
                additionalClasses: l?.additionalClasses ?? i,
                ...l
            });
        },
        hideHover: n
    };
};

}
