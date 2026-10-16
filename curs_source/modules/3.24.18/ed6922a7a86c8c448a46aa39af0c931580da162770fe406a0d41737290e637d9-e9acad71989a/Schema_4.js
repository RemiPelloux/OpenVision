import { D5e, Jwe, NE, Zmt } from "./identity.js";
import { byn, ogt } from "./map_2.js";
import { Fcs } from "./qIc.js";
import { cgt, yyn } from "./seq.js";
import { Gwi, Syn } from "./string_2.js";
import { IZc, KEg } from "./tags.js";
import { x } from "./tslib.es6.js";
var AZc, RZc;
export { AZc, RZc };
var __wakaru_DZc_initialized = false;
export function DZc() {
if (__wakaru_DZc_initialized) return;
__wakaru_DZc_initialized = true;
x(), NE(), byn(), yyn(), Gwi(), KEg(), AZc = (e, t)=>e.key < t.key ? -1 : e.key > t.key ? 1 : 0, RZc = class vwm {
    constructor({ compat: t, customTags: n, merge: i, resolveKnownTags: r, schema: s, sortMapEntries: o, toStringDefaults: a }){
        this.compat = Array.isArray(t) ? Fcs(t, "compat") : t ? Fcs(null, t) : null, this.name = typeof s == "string" && s || "core", this.knownTags = r ? IZc : {}, this.tags = Fcs(n, this.name, i), this.toStringOptions = a ?? null, Object.defineProperty(this, D5e, {
            value: ogt
        }), Object.defineProperty(this, Jwe, {
            value: Syn
        }), Object.defineProperty(this, Zmt, {
            value: cgt
        }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? AZc : null;
    }
    clone() {
        const t = Object.create(vwm.prototype, Object.getOwnPropertyDescriptors(this));
        return t.tags = this.tags.slice(), t;
    }
};

}
