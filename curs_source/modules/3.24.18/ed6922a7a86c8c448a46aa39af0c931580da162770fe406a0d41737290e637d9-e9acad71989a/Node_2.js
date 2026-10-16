import { jXc } from "./applyReviver.js";
import { Kle, NE, nBt } from "./identity.js";
import { Tfe, oBt } from "./qIc.js";
import { ngt } from "./toJS.js";
import { x } from "./tslib.es6.js";
var Awi;
export { Awi };
var __wakaru_dcs_initialized = false;
export function dcs() {
if (__wakaru_dcs_initialized) return;
__wakaru_dcs_initialized = true;
x(), jXc(), NE(), ngt(), Awi = class {
    constructor(e){
        Object.defineProperty(this, Kle, {
            value: e
        });
    }
    clone() {
        const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        return this.range && (e.range = this.range.slice()), e;
    }
    toJS(e, { mapAsMap: t, maxAliasCount: n, onAnchor: i, reviver: r } = {}) {
        if (!nBt(e)) throw new TypeError("A document argument is required");
        const s = {
            anchors: new Map,
            doc: e,
            keep: !0,
            mapAsMap: t === !0,
            mapKeyWarned: !1,
            maxAliasCount: typeof n == "number" ? n : 100
        }, o = Tfe(this, "", s);
        if (typeof i == "function") for (const { count: a, res: c } of s.anchors.values())i(c, a);
        return typeof r == "function" ? oBt(r, {
            "": o
        }, "", o) : o;
    }
};

}
