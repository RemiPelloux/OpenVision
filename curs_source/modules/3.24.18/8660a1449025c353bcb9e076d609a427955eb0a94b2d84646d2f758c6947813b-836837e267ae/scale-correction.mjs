import { pv0, vOn } from "./scale-border-radius.mjs";
import { XSv, mv0 } from "./scale-box-shadow.mjs";
import { E } from "./tslib.es6.js";
var ZSv;
export { ZSv };
var __wakaru_gv0_initialized = false;
export function gv0() {
if (__wakaru_gv0_initialized) return;
__wakaru_gv0_initialized = true;
E(), pv0(), mv0(), ZSv = {
    borderRadius: {
        ...vOn,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius"
        ]
    },
    borderTopLeftRadius: vOn,
    borderTopRightRadius: vOn,
    borderBottomLeftRadius: vOn,
    borderBottomRightRadius: vOn,
    boxShadow: XSv
};

}
