import { ERe, f_n } from "./LYd.js";
import { _Jd } from "./applyReviver.js";
import { Mwe, h_n, lR } from "./identity.js";
import { g8t } from "./toJS.js";
import { E } from "./tslib.es6.js";
var Ixr;
export { Ixr };
var __wakaru_hYo_initialized = false;
export function hYo() {
if (__wakaru_hYo_initialized) return;
__wakaru_hYo_initialized = true;
E(), _Jd(), lR(), g8t(), Ixr = class {
    constructor(t){
        Object.defineProperty(this, Mwe, {
            value: t
        });
    }
    clone() {
        const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        return this.range && (t.range = this.range.slice()), t;
    }
    toJS(t, { mapAsMap: e, maxAliasCount: n, onAnchor: i, reviver: r } = {}) {
        if (!h_n(t)) throw new TypeError("A document argument is required");
        const s = {
            anchors: new Map,
            doc: t,
            keep: !0,
            mapAsMap: e === !0,
            mapKeyWarned: !1,
            maxAliasCount: typeof n == "number" ? n : 100
        }, o = ERe(this, "", s);
        if (typeof i == "function") for (const { count: a, res: l } of s.anchors.values())i(l, a);
        return typeof r == "function" ? f_n(r, {
            "": o
        }, "", o) : o;
    }
};

}
