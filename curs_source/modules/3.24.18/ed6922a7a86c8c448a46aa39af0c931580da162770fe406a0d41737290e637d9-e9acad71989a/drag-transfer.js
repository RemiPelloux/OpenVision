import { x } from "./tslib.es6.js";
var u5l, d5l, qDi, GTs, _ue;
export { GTs, _ue, d5l, qDi, u5l };
var __wakaru_u6t_initialized = false;
export function u6t() {
if (__wakaru_u6t_initialized) return;
__wakaru_u6t_initialized = true;
"use strict";
x(), u5l = Object.defineProperty, d5l = (e, t, n)=>t in e ? u5l(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, qDi = (e, t, n)=>d5l(e, typeof t != "symbol" ? t + "" : t, n), GTs = class NAt {
    constructor(){
        qDi(this, "data", null), qDi(this, "listeners", new Set);
    }
    static getInstance() {
        return NAt.instance || (NAt.instance = new NAt), NAt.instance;
    }
    static subscribe(t) {
        return NAt.getInstance().subscribeToChanges(t);
    }
    static isDragActive() {
        return NAt.getInstance().hasData();
    }
    notifyListeners() {
        for (const t of this.listeners)t();
    }
    subscribeToChanges(t) {
        return this.listeners.add(t), ()=>{
            this.listeners.delete(t);
        };
    }
    setData(t) {
        this.data !== t && (this.data = t, this.notifyListeners());
    }
    getData() {
        return this.data;
    }
    getValidatedData(t) {
        if (!this.data) return null;
        for (const n of t)if (this.data instanceof n) {
            const i = n.schema.safeParse(this.data.payload);
            return i.success ? this.data : (process.env.NODE_ENV !== "production" && console.warn(`DragTransfer: Payload validation failed for type "${this.data.type}"`, i.error), null);
        }
        return null;
    }
    hasAnyClass(t) {
        return this.data ? t.some((n)=>this.data instanceof n) : !1;
    }
    clearData() {
        this.data !== null && (this.data = null, this.notifyListeners());
    }
    hasData() {
        return this.data !== null;
    }
}, qDi(GTs, "instance", null), _ue = GTs;

}
