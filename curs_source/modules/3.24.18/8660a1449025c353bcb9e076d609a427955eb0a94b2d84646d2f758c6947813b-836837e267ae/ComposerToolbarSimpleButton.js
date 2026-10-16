import { IL, hp } from "./simpleButton.js";
import { E } from "./tslib.es6.js";
import { oye, pme } from "./useComposerHoverTooltip.js";
import { at } from "./web.js";
import { Ee, Zy } from "./ze.js";
var ywl;
export { ywl };
var __wakaru_dOk_initialized = false;
export function dOk() {
if (__wakaru_dOk_initialized) return;
__wakaru_dOk_initialized = true;
"use strict";
E(), at(), at(), IL(), oye(), ywl = (t)=>{
    const { showHover: e, hideHover: n } = pme({
        delay: 300,
        additionalClasses: [
            "chat-hover-tooltip"
        ]
    });
    return Ee(hp, Zy(t, {
        get onMouseEnter () {
            return t.hintText ? (i)=>e(i, t.hintText) : void 0;
        },
        get onMouseLeave () {
            return t.hintText ? n : void 0;
        },
        get style () {
            return {
                "font-size": "12px",
                padding: "0px 4px",
                ...t.style
            };
        },
        get tabFocusable () {
            return t.tabFocusable;
        },
        get setRef () {
            return t.setRef || ((i)=>{});
        },
        smallSpinner: !0
    }));
};

}
