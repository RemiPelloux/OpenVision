import { ERe } from "./LYd.js";
import { Ixr, hYo } from "./Node_2.js";
import { W5e, lR } from "./identity.js";
import { g8t } from "./toJS.js";
import { E } from "./tslib.es6.js";
var pYo, tC;
export { pYo, tC };
var __wakaru_DY_initialized = false;
export function DY() {
if (__wakaru_DY_initialized) return;
__wakaru_DY_initialized = true;
E(), lR(), hYo(), g8t(), pYo = (t)=>!t || typeof t != "function" && typeof t != "object", tC = class extends Ixr {
    constructor(t){
        super(W5e), this.value = t;
    }
    toJSON(t, e) {
        return e?.keep ? this.value : ERe(this.value, t, e);
    }
    toString() {
        return String(this.value);
    }
}, tC.BLOCK_FOLDED = "BLOCK_FOLDED", tC.BLOCK_LITERAL = "BLOCK_LITERAL", tC.PLAIN = "PLAIN", tC.QUOTE_DOUBLE = "QUOTE_DOUBLE", tC.QUOTE_SINGLE = "QUOTE_SINGLE";

}
