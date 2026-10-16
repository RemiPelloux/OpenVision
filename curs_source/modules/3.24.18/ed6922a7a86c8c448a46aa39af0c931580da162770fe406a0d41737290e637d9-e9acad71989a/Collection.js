import { Awi, dcs } from "./Node_2.js";
import { Pwi } from "./createNode.js";
import { AM, FO, NE } from "./identity.js";
import { Lwi, k5, w5 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var aBt, pcs;
export { aBt, pcs };
var __wakaru_mcs_initialized = false;
export function mcs() {
if (__wakaru_mcs_initialized) return;
__wakaru_mcs_initialized = true;
x(), Pwi(), NE(), dcs(), aBt = (e)=>e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done, pcs = class extends Awi {
    constructor(e, t){
        super(e), Object.defineProperty(this, "schema", {
            value: t,
            configurable: !0,
            enumerable: !1,
            writable: !0
        });
    }
    clone(e) {
        const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        return e && (t.schema = e), t.items = t.items.map((n)=>w5(n) || FO(n) ? n.clone(e) : n), this.range && (t.range = this.range.slice()), t;
    }
    addIn(e, t) {
        if (aBt(e)) this.add(t);
        else {
            const [n, ...i] = e, r = this.get(n, !0);
            if (k5(r)) r.addIn(i, t);
            else if (r === void 0 && this.schema) this.set(n, Lwi(this.schema, i, t));
            else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
        }
    }
    deleteIn(e) {
        const [t, ...n] = e;
        if (n.length === 0) return this.delete(t);
        const i = this.get(t, !0);
        if (k5(i)) return i.deleteIn(n);
        throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`);
    }
    getIn(e, t) {
        const [n, ...i] = e, r = this.get(n, !0);
        return i.length === 0 ? !t && AM(r) ? r.value : r : k5(r) ? r.getIn(i, t) : void 0;
    }
    hasAllNullValues(e) {
        return this.items.every((t)=>{
            if (!FO(t)) return !1;
            const n = t.value;
            return n == null || e && AM(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
        });
    }
    hasIn(e) {
        const [t, ...n] = e;
        if (n.length === 0) return this.has(t);
        const i = this.get(t, !0);
        return k5(i) ? i.hasIn(n) : !1;
    }
    setIn(e, t) {
        const [n, ...i] = e;
        if (i.length === 0) this.set(n, t);
        else {
            const r = this.get(n, !0);
            if (k5(r)) r.setIn(i, t);
            else if (r === void 0 && this.schema) this.set(n, Lwi(this.schema, i, t));
            else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
        }
    }
};

}
