import { _6l, s0w } from "./BA.js";
import { BI, Iy } from "./languages.js";
import { E } from "./tslib.es6.js";
var l5f, c5f, u5f, d5f;
export { c5f, d5f, l5f, u5f };
var __wakaru_a0w_initialized = false;
export function a0w() {
if (__wakaru_a0w_initialized) return;
__wakaru_a0w_initialized = true;
"use strict";
E(), Iy(), l5f = 8, c5f = 1 / 4, u5f = class {
    constructor(t){
        this.maxBytes = t, this.entries = new Map, this.streamingKeys = [], this.colorMap = null, this.bytes = 0;
    }
    get(t, e, n) {
        this.syncColorMap();
        const i = _6l(t, n), r = this.entries.get(i);
        if (r !== void 0) {
            if (r.tokenizationSupport !== e) {
                this.remove(i);
                return;
            }
            return this.entries.delete(i), this.entries.set(i, r), r;
        }
    }
    findStreamingPrefix(t, e, n) {
        this.syncColorMap();
        let i;
        for (const r of this.streamingKeys){
            const s = this.entries.get(r);
            s !== void 0 && s.languageId === t && s.tokenizationSupport === e && s.committedCode.length > (i?.committedCode.length ?? 0) && n.startsWith(s.committedCode) && (i = s);
        }
        return i;
    }
    set(t, e) {
        this.syncColorMap();
        const n = s0w(t.code, t.lines);
        if (n > this.maxBytes * c5f) return;
        e.previous !== void 0 && this.remove(_6l(e.previous.languageId, e.previous.code));
        const i = _6l(t.languageId, t.code);
        this.remove(i), this.entries.set(i, {
            ...t,
            bytes: n
        }), this.bytes += n, e.streaming && (this.streamingKeys.push(i), this.streamingKeys.length > l5f && this.streamingKeys.shift());
        for (const r of this.entries.keys()){
            if (this.bytes <= this.maxBytes) break;
            this.remove(r);
        }
    }
    remove(t) {
        const e = this.entries.get(t);
        if (e === void 0) return;
        this.entries.delete(t), this.bytes -= e.bytes;
        const n = this.streamingKeys.indexOf(t);
        n !== -1 && this.streamingKeys.splice(n, 1);
    }
    syncColorMap() {
        const t = BI.getColorMap();
        t !== this.colorMap && (this.colorMap = t, this.entries.clear(), this.streamingKeys.length = 0, this.bytes = 0);
    }
}, d5f = 8 * 1024 * 1024;

}
