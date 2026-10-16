import { Dre, igt } from "./Pair.js";
import { Yle, sgt } from "./YAMLMap.js";
import { AM, FO, Jmt, NE } from "./identity.js";
import { Scs, rgt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var xyn, Xwi;
export { Xwi, xyn };
var __wakaru_TZc_initialized = false;
export function TZc() {
if (__wakaru_TZc_initialized) return;
__wakaru_TZc_initialized = true;
x(), NE(), igt(), sgt(), xyn = class fwm extends Yle {
    constructor(t){
        super(t), this.tag = fwm.tag;
    }
    add(t) {
        let n;
        FO(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new Dre(t.key, null) : n = new Dre(t, null), rgt(this.items, n.key) || this.items.push(n);
    }
    get(t, n) {
        const i = rgt(this.items, t);
        return !n && FO(i) ? AM(i.key) ? i.key.value : i.key : i;
    }
    set(t, n) {
        if (typeof n != "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
        const i = rgt(this.items, t);
        i && !n ? this.items.splice(this.items.indexOf(i), 1) : !i && n && this.items.push(new Dre(t));
    }
    toJSON(t, n) {
        return super.toJSON(t, n, Set);
    }
    toString(t, n, i) {
        if (!t) return JSON.stringify(this);
        if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, t, {
            allNullValues: !0
        }), n, i);
        throw new Error("Set items must all have null values");
    }
    static from(t, n, i) {
        const { replacer: r } = i, s = new this(t);
        if (n && Symbol.iterator in Object(n)) for (let o of n)typeof r == "function" && (o = r.call(n, o, o)), s.items.push(Scs(o, null, i));
        return s;
    }
}, xyn.tag = "tag:yaml.org,2002:set", Xwi = {
    collection: "map",
    identify: (e)=>e instanceof Set,
    nodeClass: xyn,
    default: !1,
    tag: "tag:yaml.org,2002:set",
    createNode: (e, t, n)=>xyn.from(e, t, n),
    resolve (e, t) {
        if (Jmt(e)) {
            if (e.hasAllNullValues(!0)) return Object.assign(new xyn, e);
            t("Set items must all have null values");
        } else t("Expected a mapping for this tag");
        return e;
    }
};

}
