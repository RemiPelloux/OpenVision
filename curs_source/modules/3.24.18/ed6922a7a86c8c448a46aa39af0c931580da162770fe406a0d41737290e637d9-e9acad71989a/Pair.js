import { tZc } from "./addPairToJSMap.js";
import { Pwi } from "./createNode.js";
import { Kle, NE, ocs } from "./identity.js";
import { OEg, eZc, w5 } from "./qIc.js";
import { FEg } from "./stringifyPair.js";
import { x } from "./tslib.es6.js";
var Dre;
export { Dre };
var __wakaru_igt_initialized = false;
export function igt() {
if (__wakaru_igt_initialized) return;
__wakaru_igt_initialized = true;
x(), Pwi(), FEg(), tZc(), NE(), Dre = class mwm {
    constructor(t, n = null){
        Object.defineProperty(this, Kle, {
            value: ocs
        }), this.key = t, this.value = n;
    }
    clone(t) {
        let { key: n, value: i } = this;
        return w5(n) && (n = n.clone(t)), w5(i) && (i = i.clone(t)), new mwm(n, i);
    }
    toJSON(t, n) {
        const i = n?.mapAsMap ? new Map : {};
        return eZc(n, i, this);
    }
    toString(t, n, i) {
        return t?.doc ? OEg(this, t, n, i) : JSON.stringify(this);
    }
};

}
