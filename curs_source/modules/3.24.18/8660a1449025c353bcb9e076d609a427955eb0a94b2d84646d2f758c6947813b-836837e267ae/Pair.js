import { IJd, n4y, zj } from "./LYd.js";
import { xJd } from "./addPairToJSMap.js";
import { Pxr } from "./createNode.js";
import { Mwe, aYo, lR } from "./identity.js";
import { i4y } from "./stringifyPair.js";
import { E } from "./tslib.es6.js";
var f_e;
export { f_e };
var __wakaru_f8t_initialized = false;
export function f8t() {
if (__wakaru_f8t_initialized) return;
__wakaru_f8t_initialized = true;
E(), Pxr(), i4y(), xJd(), lR(), f_e = class YRb {
    constructor(e, n = null){
        Object.defineProperty(this, Mwe, {
            value: aYo
        }), this.key = e, this.value = n;
    }
    clone(e) {
        let { key: n, value: i } = this;
        return zj(n) && (n = n.clone(e)), zj(i) && (i = i.clone(e)), new YRb(n, i);
    }
    toJSON(e, n) {
        const i = n?.mapAsMap ? new Map : {};
        return IJd(n, i, this);
    }
    toString(e, n, i) {
        return e?.doc ? n4y(this, e, n, i) : JSON.stringify(this);
    }
};

}
