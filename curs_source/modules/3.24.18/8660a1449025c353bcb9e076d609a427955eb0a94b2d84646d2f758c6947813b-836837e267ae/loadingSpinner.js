import { XIk } from "./loadingSpinner.css";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt, xbe } from "./yBp.js";
import { Zy } from "./ze.js";
var _ml, Uxi, pTe;
export { Uxi, _ml, pTe };
var __wakaru_b9e_initialized = false;
export function b9e() {
if (__wakaru_b9e_initialized) return;
__wakaru_b9e_initialized = true;
"use strict";
E(), at(), at(), at(), XIk(), _ml = wt("<div>"), Uxi = (t)=>(()=>{
        var e = _ml();
        return xbe(e, Zy({
            get class () {
                return "cursorLoadingBackground" + (t.onInputBackground ? " cursorLoadingInputBackground" : "") + (t.speed === "slow" ? " cursorLoadingBackgroundSlow" : "") + (t.speed === "medium" ? " cursorLoadingBackgroundMedium" : "") + (t.class ? ` ${t.class}` : "");
            }
        }, ()=>t.extras), !1, !1), e;
    })(), pTe = (t)=>(()=>{
        var e = _ml();
        return xbe(e, Zy({
            get class () {
                return "cursorLoadingBackground cursorLoadingBackgroundSubtle" + (t.onInputBackground ? " cursorLoadingInputBackground cursorLoadingInputBackgroundSubtle" : "") + (t.onPrimaryButton ? " cursorLoadingBackgroundLight cursorLoadingBackgroundSubtleLight" : "") + (t.small ? " cursorLoadingBackgroundSmall" : "") + (t.speed === "slow" ? " cursorLoadingBackgroundSlow" : "") + (t.speed === "medium" ? " cursorLoadingBackgroundMedium" : "") + (t.class ? ` ${t.class}` : "") + " shrink-0";
            }
        }, ()=>t.extras), !1, !1), e;
    })();

}
