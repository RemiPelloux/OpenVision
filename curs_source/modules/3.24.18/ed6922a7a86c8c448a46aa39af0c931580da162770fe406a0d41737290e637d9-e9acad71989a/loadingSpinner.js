import { Wse, yt } from "./A3u.js";
import { pl_ } from "./loadingSpinner.css";
import { fk } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { $e } from "./web.js";
var ZAo, mnr, ibe;
export { ZAo, ibe, mnr };
var __wakaru_RLe_initialized = false;
export function RLe() {
if (__wakaru_RLe_initialized) return;
__wakaru_RLe_initialized = true;
"use strict";
x(), $e(), $e(), $e(), pl_(), ZAo = yt("<div>"), mnr = (e)=>(()=>{
        var t = ZAo();
        return Wse(t, fk({
            get class () {
                return "cursorLoadingBackground" + (e.onInputBackground ? " cursorLoadingInputBackground" : "") + (e.speed === "slow" ? " cursorLoadingBackgroundSlow" : "") + (e.speed === "medium" ? " cursorLoadingBackgroundMedium" : "") + (e.class ? ` ${e.class}` : "");
            }
        }, ()=>e.extras), !1, !1), t;
    })(), ibe = (e)=>(()=>{
        var t = ZAo();
        return Wse(t, fk({
            get class () {
                return "cursorLoadingBackground cursorLoadingBackgroundSubtle" + (e.onInputBackground ? " cursorLoadingInputBackground cursorLoadingInputBackgroundSubtle" : "") + (e.onPrimaryButton ? " cursorLoadingBackgroundLight cursorLoadingBackgroundSubtleLight" : "") + (e.small ? " cursorLoadingBackgroundSmall" : "") + (e.speed === "slow" ? " cursorLoadingBackgroundSlow" : "") + (e.speed === "medium" ? " cursorLoadingBackgroundMedium" : "") + (e.class ? ` ${e.class}` : "") + " shrink-0";
            }
        }, ()=>e.extras), !1, !1), t;
    })();

}
