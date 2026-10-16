import { eR } from "./Iwo.js";
import { kve } from "./global.js";
import { E } from "./tslib.es6.js";
var CZu, TZu, EZu, UOe;
export { CZu, EZu, TZu, UOe };
var __wakaru_IZu_initialized = false;
export function IZu() {
if (__wakaru_IZu_initialized) return;
__wakaru_IZu_initialized = true;
"use strict";
E(), kve(), CZu = 1e3, TZu = 20, EZu = class {
    constructor(){
        this._buffer = [], this._droppedByName = new Map, this._dropped = 0, this._totalSeen = 0, this._maxBuffer = CZu, this._random = Math.random;
    }
    configure(t) {
        t.maxBuffer !== void 0 && (this._maxBuffer = t.maxBuffer), t.random !== void 0 && (this._random = t.random);
    }
    collect(t) {
        if (!t || !eR().enabled) return;
        const e = "traceId" in t && typeof t.traceId == "string" && !("createChild" in t) ? t : this._convert(t);
        if (this._totalSeen++, this._buffer.length < this._maxBuffer) {
            this._buffer.push(e);
            return;
        }
        const n = Math.floor(this._random() * this._totalSeen), i = n < this._maxBuffer ? this._replaceAt(n, e) : e;
        this._incrementCount(this._droppedByName, i.name), this._dropped++;
    }
    takeAll() {
        const t = this._buffer, e = this._dropped, n = new Map;
        for (const s of t)this._incrementCount(n, s.name);
        const i = this._topCounts(n), r = this._topCounts(this._droppedByName);
        return this._buffer = [], this._droppedByName.clear(), this._dropped = 0, this._totalSeen = 0, {
            spans: t,
            dropped: e,
            topEmittedNames: i,
            topDroppedNames: r,
            totalEmittedAttributeCount: t.reduce((s, o)=>s + Object.keys(o.attributes).length, 0)
        };
    }
    _replaceAt(t, e) {
        const n = this._buffer[t];
        return this._buffer[t] = e, n;
    }
    _convert(t) {
        return {
            traceId: t.traceId,
            spanId: t.spanId,
            parentSpanId: t.parentSpanId,
            name: t.name,
            startTime: t.startTime,
            endTime: t.endTime ?? Date.now(),
            attributes: t.attributes,
            error: t.status?.code === 2,
            traceState: t.traceState,
            flags: t.traceFlags,
            kind: t.kind,
            statusCode: t.status?.code,
            statusMessage: t.status?.message,
            links: t.links.map((e)=>({
                    traceId: e.traceId,
                    spanId: e.spanId,
                    attributes: e.attributes,
                    traceState: e.traceState,
                    flags: e.flags
                }))
        };
    }
    _incrementCount(t, e) {
        t.set(e, (t.get(e) ?? 0) + 1);
    }
    _topCounts(t, e = TZu) {
        return [
            ...t.entries()
        ].sort((n, i)=>i[1] - n[1] || n[0].localeCompare(i[0])).slice(0, e).map(([n, i])=>({
                name: n,
                count: i
            }));
    }
}, UOe = new EZu;

}
