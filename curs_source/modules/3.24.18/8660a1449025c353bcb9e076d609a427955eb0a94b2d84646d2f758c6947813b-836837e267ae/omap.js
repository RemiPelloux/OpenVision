import { $Jd, ERe, HJd } from "./LYd.js";
import { Dwe, _8t } from "./YAMLMap.js";
import { bSt, y8t } from "./YAMLSeq.js";
import { cL, dB, lR } from "./identity.js";
import { RYo } from "./pairs.js";
import { g8t } from "./toJS.js";
import { E } from "./tslib.es6.js";
var Hai, zxr;
export { Hai, zxr };
var __wakaru_WJd_initialized = false;
export function WJd() {
if (__wakaru_WJd_initialized) return;
__wakaru_WJd_initialized = true;
E(), lR(), g8t(), _8t(), y8t(), RYo(), Hai = class XRb extends bSt {
    constructor(){
        super(), this.add = Dwe.prototype.add.bind(this), this.delete = Dwe.prototype.delete.bind(this), this.get = Dwe.prototype.get.bind(this), this.has = Dwe.prototype.has.bind(this), this.set = Dwe.prototype.set.bind(this), this.tag = XRb.tag;
    }
    toJSON(e, n) {
        if (!n) return super.toJSON(e);
        const i = new Map;
        n?.onCreate && n.onCreate(i);
        for (const r of this.items){
            let s, o;
            if (dB(r) ? (s = ERe(r.key, "", n), o = ERe(r.value, s, n)) : s = ERe(r, "", n), i.has(s)) throw new Error("Ordered maps must not include duplicate keys");
            i.set(s, o);
        }
        return i;
    }
    static from(e, n, i) {
        const r = HJd(e, n, i), s = new this;
        return s.items = r.items, s;
    }
}, Hai.tag = "tag:yaml.org,2002:omap", zxr = {
    collection: "seq",
    identify: (t)=>t instanceof Map,
    nodeClass: Hai,
    default: !1,
    tag: "tag:yaml.org,2002:omap",
    resolve (t, e) {
        const n = $Jd(t, e), i = [];
        for (const { key: r } of n.items)cL(r) && (i.includes(r.value) ? e(`Ordered maps must not include duplicate keys: ${r.value}`) : i.push(r.value));
        return Object.assign(new Hai, n);
    },
    createNode: (t, e, n)=>Hai.from(t, e, n)
};

}
