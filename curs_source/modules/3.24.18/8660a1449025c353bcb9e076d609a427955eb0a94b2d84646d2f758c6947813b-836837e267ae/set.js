import { kYo, v8t } from "./LYd.js";
import { f8t, f_e } from "./Pair.js";
import { Dwe, _8t } from "./YAMLMap.js";
import { cL, dB, fSt, lR } from "./identity.js";
import { E } from "./tslib.es6.js";
var Wai, Kxr;
export { Kxr, Wai };
var __wakaru_QJd_initialized = false;
export function QJd() {
if (__wakaru_QJd_initialized) return;
__wakaru_QJd_initialized = true;
E(), lR(), f8t(), _8t(), Wai = class ZRb extends Dwe {
    constructor(e){
        super(e), this.tag = ZRb.tag;
    }
    add(e) {
        let n;
        dB(e) ? n = e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? n = new f_e(e.key, null) : n = new f_e(e, null), v8t(this.items, n.key) || this.items.push(n);
    }
    get(e, n) {
        const i = v8t(this.items, e);
        return !n && dB(i) ? cL(i.key) ? i.key.value : i.key : i;
    }
    set(e, n) {
        if (typeof n != "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
        const i = v8t(this.items, e);
        i && !n ? this.items.splice(this.items.indexOf(i), 1) : !i && n && this.items.push(new f_e(e));
    }
    toJSON(e, n) {
        return super.toJSON(e, n, Set);
    }
    toString(e, n, i) {
        if (!e) return JSON.stringify(this);
        if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, {
            allNullValues: !0
        }), n, i);
        throw new Error("Set items must all have null values");
    }
    static from(e, n, i) {
        const { replacer: r } = i, s = new this(e);
        if (n && Symbol.iterator in Object(n)) for (let o of n)typeof r == "function" && (o = r.call(n, o, o)), s.items.push(kYo(o, null, i));
        return s;
    }
}, Wai.tag = "tag:yaml.org,2002:set", Kxr = {
    collection: "map",
    identify: (t)=>t instanceof Set,
    nodeClass: Wai,
    default: !1,
    tag: "tag:yaml.org,2002:set",
    createNode: (t, e, n)=>Wai.from(t, e, n),
    resolve (t, e) {
        if (fSt(t)) {
            if (t.hasAllNullValues(!0)) return Object.assign(new Wai, t);
            e("Set items must all have null values");
        } else e("Expected a mapping for this tag");
        return t;
    }
};

}
