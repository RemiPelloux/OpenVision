import { $Ul, HUl } from "./BA.js";
import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Qzf;
export { Qzf };
var __wakaru_WUl_initialized = false;
export function WUl() {
if (__wakaru_WUl_initialized) return;
__wakaru_WUl_initialized = true;
"use strict";
E(), Gt(), Qzf = class {
    constructor(){
        this.failuresByPrUrl = new Map, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event;
    }
    getFailureMessage(t, e) {
        const n = t.trim();
        if (!n) return;
        const i = this.failuresByPrUrl.get(n);
        return i === void 0 ? void 0 : HUl(i, e);
    }
    getFailures(t) {
        const e = t.trim();
        if (!e) return new Map;
        const n = this.failuresByPrUrl.get(e);
        return n === void 0 ? new Map : new Map(n);
    }
    clear(t, e) {
        const n = t.trim();
        if (!n) return;
        const i = this.failuresByPrUrl.get(n);
        if (i === void 0) return;
        let r = !1;
        for (const s of $Ul(e))i.delete(s) && (r = !0);
        r && (i.size === 0 && this.failuresByPrUrl.delete(n), this._onDidChange.fire(n));
    }
    record(t, e, n) {
        const i = t.trim();
        if (!i) return;
        let r = this.failuresByPrUrl.get(i);
        r === void 0 && (r = new Map, this.failuresByPrUrl.set(i, r));
        for (const s of $Ul(e))r.set(s, n);
        this._onDidChange.fire(i);
    }
};

}
