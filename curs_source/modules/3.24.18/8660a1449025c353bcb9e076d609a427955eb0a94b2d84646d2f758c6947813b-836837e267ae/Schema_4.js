import { BYo } from "./LYd.js";
import { Ant, W5e, h8t, lR } from "./identity.js";
import { Lai, b8t } from "./map_2.js";
import { Oai, S8t } from "./seq.js";
import { $xr, Fai } from "./string_2.js";
import { m4y, teh } from "./tags.js";
import { E } from "./tslib.es6.js";
var neh, ieh;
export { ieh, neh };
var __wakaru_reh_initialized = false;
export function reh() {
if (__wakaru_reh_initialized) return;
__wakaru_reh_initialized = true;
E(), lR(), Lai(), Oai(), $xr(), m4y(), neh = (t, e)=>t.key < e.key ? -1 : t.key > e.key ? 1 : 0, ieh = class QRb {
    constructor({ compat: e, customTags: n, merge: i, resolveKnownTags: r, schema: s, sortMapEntries: o, toStringDefaults: a }){
        this.compat = Array.isArray(e) ? BYo(e, "compat") : e ? BYo(null, e) : null, this.name = typeof s == "string" && s || "core", this.knownTags = r ? teh : {}, this.tags = BYo(n, this.name, i), this.toStringOptions = a ?? null, Object.defineProperty(this, Ant, {
            value: b8t
        }), Object.defineProperty(this, W5e, {
            value: Fai
        }), Object.defineProperty(this, h8t, {
            value: S8t
        }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? neh : null;
    }
    clone() {
        const e = Object.create(QRb.prototype, Object.getOwnPropertyDescriptors(this));
        return e.tags = this.tags.slice(), e;
    }
};

}
