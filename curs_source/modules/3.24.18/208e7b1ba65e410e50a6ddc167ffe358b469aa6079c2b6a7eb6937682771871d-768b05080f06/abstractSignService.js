import { h } from "./tslib.es6.js";
var rx, w9e;
export { rx, w9e };
var __wakaru_Nlt_initialized = false;
export function Nlt() {
if (__wakaru_Nlt_initialized) return;
__wakaru_Nlt_initialized = true;
"use strict";
h(), rx = class bLe {
    constructor(){
        this.validators = new Map;
    }
    async createNewMessage(t) {
        try {
            const n = await this.getValidator();
            if (n) {
                const r = String(bLe._nextId++);
                return this.validators.set(r, n), {
                    id: r,
                    data: n.createNewMessage(t)
                };
            }
        } catch  {}
        return {
            id: "",
            data: t
        };
    }
    async validate(t, n) {
        if (!t.id) return !0;
        const r = this.validators.get(t.id);
        if (!r) return !1;
        this.validators.delete(t.id);
        try {
            return r.validate(n) === "ok";
        } catch  {
            return !1;
        } finally{
            r.dispose?.();
        }
    }
    async sign(t) {
        try {
            return await this.signValue(t);
        } catch  {}
        return t;
    }
}, rx._nextId = 1, w9e = rx;

}
