import { Fy } from "./LYd.js";
import { E } from "./tslib.es6.js";
var wTp, CTp, m0n, TTp;
export { CTp, TTp, m0n, wTp };
var __wakaru_H11_initialized = false;
export function H11() {
if (__wakaru_H11_initialized) return;
__wakaru_H11_initialized = true;
"use strict";
E(), Fy(), wTp = Object.defineProperty, CTp = (t, e, n)=>e in t ? wTp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, m0n = (t, e, n)=>CTp(t, typeof e != "symbol" ? e + "" : e, n), TTp = class {
    constructor(t, e, n, i){
        m0n(this, "dom"), m0n(this, "lastCacheKey"), m0n(this, "config"), m0n(this, "view"), m0n(this, "getPos"), this.config = i, this.view = e, this.getPos = n, this.lastCacheKey = this.getCacheKey(t), this.dom = i.render(t, {
            node: t,
            view: e,
            getPos: n
        });
    }
    getCacheKey(t) {
        return this.config.getCacheKey ? this.config.getCacheKey(t) : t.textContent;
    }
    update(t) {
        if (t.type.name !== this.config.type) return !1;
        const e = this.getCacheKey(t);
        if (e === this.lastCacheKey) return !0;
        this.lastCacheKey = e;
        const n = this.config.render(t, {
            node: t,
            view: this.view,
            getPos: this.getPos
        });
        return this.dom.replaceWith(n), this.dom = n, !0;
    }
    destroy() {
        this.config.onDestroy?.(this.dom);
    }
    stopEvent() {
        return !1;
    }
    ignoreMutation() {
        return !0;
    }
};

}
