import { E } from "./tslib.es6.js";
var G9h, q9h, E5r, Oga, xO;
export { E5r, G9h, Oga, q9h, xO };
var __wakaru_tkt_initialized = false;
export function tkt() {
if (__wakaru_tkt_initialized) return;
__wakaru_tkt_initialized = true;
"use strict";
E(), G9h = Object.defineProperty, q9h = (t, e, n)=>e in t ? G9h(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, E5r = (t, e, n)=>q9h(t, typeof e != "symbol" ? e + "" : e, n), Oga = class Usn {
    constructor(){
        E5r(this, "data", null), E5r(this, "listeners", new Set);
    }
    static getInstance() {
        return Usn.instance || (Usn.instance = new Usn), Usn.instance;
    }
    static subscribe(e) {
        return Usn.getInstance().subscribeToChanges(e);
    }
    static isDragActive() {
        return Usn.getInstance().hasData();
    }
    notifyListeners() {
        for (const e of this.listeners)e();
    }
    subscribeToChanges(e) {
        return this.listeners.add(e), ()=>{
            this.listeners.delete(e);
        };
    }
    setData(e) {
        this.data !== e && (this.data = e, this.notifyListeners());
    }
    getData() {
        return this.data;
    }
    getValidatedData(e) {
        if (!this.data) return null;
        for (const n of e)if (this.data instanceof n) {
            const i = n.schema.safeParse(this.data.payload);
            return i.success ? this.data : (process.env.NODE_ENV !== "production" && console.warn(`DragTransfer: Payload validation failed for type "${this.data.type}"`, i.error), null);
        }
        return null;
    }
    hasAnyClass(e) {
        return this.data ? e.some((n)=>this.data instanceof n) : !1;
    }
    clearData() {
        this.data !== null && (this.data = null, this.notifyListeners());
    }
    hasData() {
        return this.data !== null;
    }
}, E5r(Oga, "instance", null), xO = Oga;

}
