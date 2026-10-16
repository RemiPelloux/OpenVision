import { Mxr, qj, zj } from "./LYd.js";
import { Ixr, hYo } from "./Node_2.js";
import { Pxr } from "./createNode.js";
import { cL, dB, lR } from "./identity.js";
import { E } from "./tslib.es6.js";
var v_n, mYo;
export { mYo, v_n };
var __wakaru_gYo_initialized = false;
export function gYo() {
if (__wakaru_gYo_initialized) return;
__wakaru_gYo_initialized = true;
E(), Pxr(), lR(), hYo(), v_n = (t)=>t == null || typeof t == "object" && !!t[Symbol.iterator]().next().done, mYo = class extends Ixr {
    constructor(t, e){
        super(t), Object.defineProperty(this, "schema", {
            value: e,
            configurable: !0,
            enumerable: !1,
            writable: !0
        });
    }
    clone(t) {
        const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        return t && (e.schema = t), e.items = e.items.map((n)=>zj(n) || dB(n) ? n.clone(t) : n), this.range && (e.range = this.range.slice()), e;
    }
    addIn(t, e) {
        if (v_n(t)) this.add(e);
        else {
            const [n, ...i] = t, r = this.get(n, !0);
            if (qj(r)) r.addIn(i, e);
            else if (r === void 0 && this.schema) this.set(n, Mxr(this.schema, i, e));
            else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
        }
    }
    deleteIn(t) {
        const [e, ...n] = t;
        if (n.length === 0) return this.delete(e);
        const i = this.get(e, !0);
        if (qj(i)) return i.deleteIn(n);
        throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);
    }
    getIn(t, e) {
        const [n, ...i] = t, r = this.get(n, !0);
        return i.length === 0 ? !e && cL(r) ? r.value : r : qj(r) ? r.getIn(i, e) : void 0;
    }
    hasAllNullValues(t) {
        return this.items.every((e)=>{
            if (!dB(e)) return !1;
            const n = e.value;
            return n == null || t && cL(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
        });
    }
    hasIn(t) {
        const [e, ...n] = t;
        if (n.length === 0) return this.has(e);
        const i = this.get(e, !0);
        return qj(i) ? i.hasIn(n) : !1;
    }
    setIn(t, e) {
        const [n, ...i] = t;
        if (i.length === 0) this.set(n, e);
        else {
            const r = this.get(n, !0);
            if (qj(r)) r.setIn(i, e);
            else if (r === void 0 && this.schema) this.set(n, Mxr(this.schema, i, e));
            else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
        }
    }
};

}
