"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TraceStateImpl = void 0;
const n = require("./module-3039.js");
class o {
    constructor(e){
        this._internalState = new Map, e && this._parse(e);
    }
    set(e, t) {
        const r = this._clone();
        return r._internalState.has(e) && r._internalState.delete(e), r._internalState.set(e, t), r;
    }
    unset(e) {
        const t = this._clone();
        return t._internalState.delete(e), t;
    }
    get(e) {
        return this._internalState.get(e);
    }
    serialize() {
        return this._keys().reduce((e, t)=>(e.push(t + "=" + this.get(t)), e), []).join(",");
    }
    _parse(e) {
        e.length > 512 || (this._internalState = e.split(",").reverse().reduce((e, t)=>{
            const r = t.trim(), o = r.indexOf("=");
            if (-1 !== o) {
                const s = r.slice(0, o), i = r.slice(o + 1, t.length);
                (0, n.validateKey)(s) && (0, n.validateValue)(i) && e.set(s, i);
            }
            return e;
        }, new Map), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
        const e = new o;
        return e._internalState = new Map(this._internalState), e;
    }
}
exports.TraceStateImpl = o;
