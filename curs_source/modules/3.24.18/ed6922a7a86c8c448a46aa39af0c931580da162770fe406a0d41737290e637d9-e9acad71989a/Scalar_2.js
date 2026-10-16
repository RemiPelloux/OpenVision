import { Awi, dcs } from "./Node_2.js";
import { Jwe, NE } from "./identity.js";
import { Tfe } from "./qIc.js";
import { ngt } from "./toJS.js";
import { x } from "./tslib.es6.js";
var hcs, bk;
export { bk, hcs };
var __wakaru_n$_initialized = false;
export function n$() {
if (__wakaru_n$_initialized) return;
__wakaru_n$_initialized = true;
x(), NE(), dcs(), ngt(), hcs = (e)=>!e || typeof e != "function" && typeof e != "object", bk = class extends Awi {
    constructor(e){
        super(Jwe), this.value = e;
    }
    toJSON(e, t) {
        return t?.keep ? this.value : Tfe(this.value, e, t);
    }
    toString() {
        return String(this.value);
    }
}, bk.BLOCK_FOLDED = "BLOCK_FOLDED", bk.BLOCK_LITERAL = "BLOCK_LITERAL", bk.PLAIN = "PLAIN", bk.QUOTE_DOUBLE = "QUOTE_DOUBLE", bk.QUOTE_SINGLE = "QUOTE_SINGLE";

}
