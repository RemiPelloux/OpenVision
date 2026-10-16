import { mcs, pcs } from "./Collection.js";
import { Dre, igt } from "./Pair.js";
import { hcs, n$ } from "./Scalar_2.js";
import { tZc } from "./addPairToJSMap.js";
import { AM, D5e, FO, NE } from "./identity.js";
import { Scs, eZc, nZc, rgt } from "./qIc.js";
import { iZc } from "./stringifyCollection.js";
import { x } from "./tslib.es6.js";
var Yle;
export { Yle };
var __wakaru_sgt_initialized = false;
export function sgt() {
if (__wakaru_sgt_initialized) return;
__wakaru_sgt_initialized = true;
x(), iZc(), tZc(), mcs(), NE(), igt(), n$(), Yle = class extends pcs {
    static get tagName() {
        return "tag:yaml.org,2002:map";
    }
    constructor(e){
        super(D5e, e), this.items = [];
    }
    static from(e, t, n) {
        const { keepUndefined: i, replacer: r } = n, s = new this(e), o = (a, c)=>{
            if (typeof r == "function") c = r.call(t, a, c);
            else if (Array.isArray(r) && !r.includes(a)) return;
            (c !== void 0 || i) && s.items.push(Scs(a, c, n));
        };
        if (t instanceof Map) for (const [a, c] of t)o(a, c);
        else if (t && typeof t == "object") for (const a of Object.keys(t))o(a, t[a]);
        return typeof e.sortMapEntries == "function" && s.items.sort(e.sortMapEntries), s;
    }
    add(e, t) {
        let n;
        FO(e) ? n = e : !e || typeof e != "object" || !("key" in e) ? n = new Dre(e, e?.value) : n = new Dre(e.key, e.value);
        const i = rgt(this.items, n.key), r = this.schema?.sortMapEntries;
        if (i) {
            if (!t) throw new Error(`Key ${n.key} already set`);
            AM(i.value) && hcs(n.value) ? i.value.value = n.value : i.value = n.value;
        } else if (r) {
            const s = this.items.findIndex((o)=>r(n, o) < 0);
            s === -1 ? this.items.push(n) : this.items.splice(s, 0, n);
        } else this.items.push(n);
    }
    delete(e) {
        const t = rgt(this.items, e);
        return t ? this.items.splice(this.items.indexOf(t), 1).length > 0 : !1;
    }
    get(e, t) {
        const i = rgt(this.items, e)?.value;
        return (!t && AM(i) ? i.value : i) ?? void 0;
    }
    has(e) {
        return !!rgt(this.items, e);
    }
    set(e, t) {
        this.add(new Dre(e, t), !0);
    }
    toJSON(e, t, n) {
        const i = n ? new n : t?.mapAsMap ? new Map : {};
        t?.onCreate && t.onCreate(i);
        for (const r of this.items)eZc(t, i, r);
        return i;
    }
    toString(e, t, n) {
        if (!e) return JSON.stringify(this);
        for (const i of this.items)if (!FO(i)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
        return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, {
            allNullValues: !0
        })), nZc(this, e, {
            blockItemPrefix: "",
            flowChars: {
                start: "{",
                end: "}"
            },
            itemIndent: e.indent || "",
            onChompKeep: n,
            onComment: t
        });
    }
};

}
