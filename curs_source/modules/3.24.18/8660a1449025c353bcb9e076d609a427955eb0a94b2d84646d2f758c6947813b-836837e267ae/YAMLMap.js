import { gYo, mYo } from "./Collection.js";
import { AJd, IJd, kYo, v8t } from "./LYd.js";
import { f8t, f_e } from "./Pair.js";
import { DY, pYo } from "./Scalar_2.js";
import { xJd } from "./addPairToJSMap.js";
import { Ant, cL, dB, lR } from "./identity.js";
import { RJd } from "./stringifyCollection.js";
import { E } from "./tslib.es6.js";
var Dwe;
export { Dwe };
var __wakaru__8t_initialized = false;
export function _8t() {
if (__wakaru__8t_initialized) return;
__wakaru__8t_initialized = true;
E(), RJd(), xJd(), gYo(), lR(), f8t(), DY(), Dwe = class extends mYo {
    static get tagName() {
        return "tag:yaml.org,2002:map";
    }
    constructor(t){
        super(Ant, t), this.items = [];
    }
    static from(t, e, n) {
        const { keepUndefined: i, replacer: r } = n, s = new this(t), o = (a, l)=>{
            if (typeof r == "function") l = r.call(e, a, l);
            else if (Array.isArray(r) && !r.includes(a)) return;
            (l !== void 0 || i) && s.items.push(kYo(a, l, n));
        };
        if (e instanceof Map) for (const [a, l] of e)o(a, l);
        else if (e && typeof e == "object") for (const a of Object.keys(e))o(a, e[a]);
        return typeof t.sortMapEntries == "function" && s.items.sort(t.sortMapEntries), s;
    }
    add(t, e) {
        let n;
        dB(t) ? n = t : !t || typeof t != "object" || !("key" in t) ? n = new f_e(t, t?.value) : n = new f_e(t.key, t.value);
        const i = v8t(this.items, n.key), r = this.schema?.sortMapEntries;
        if (i) {
            if (!e) throw new Error(`Key ${n.key} already set`);
            cL(i.value) && pYo(n.value) ? i.value.value = n.value : i.value = n.value;
        } else if (r) {
            const s = this.items.findIndex((o)=>r(n, o) < 0);
            s === -1 ? this.items.push(n) : this.items.splice(s, 0, n);
        } else this.items.push(n);
    }
    delete(t) {
        const e = v8t(this.items, t);
        return e ? this.items.splice(this.items.indexOf(e), 1).length > 0 : !1;
    }
    get(t, e) {
        const i = v8t(this.items, t)?.value;
        return (!e && cL(i) ? i.value : i) ?? void 0;
    }
    has(t) {
        return !!v8t(this.items, t);
    }
    set(t, e) {
        this.add(new f_e(t, e), !0);
    }
    toJSON(t, e, n) {
        const i = n ? new n : e?.mapAsMap ? new Map : {};
        e?.onCreate && e.onCreate(i);
        for (const r of this.items)IJd(e, i, r);
        return i;
    }
    toString(t, e, n) {
        if (!t) return JSON.stringify(this);
        for (const i of this.items)if (!dB(i)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
        return !t.allNullValues && this.hasAllNullValues(!1) && (t = Object.assign({}, t, {
            allNullValues: !0
        })), AJd(this, t, {
            blockItemPrefix: "",
            flowChars: {
                start: "{",
                end: "}"
            },
            itemIndent: t.indent || "",
            onChompKeep: n,
            onComment: e
        });
    }
};

}
