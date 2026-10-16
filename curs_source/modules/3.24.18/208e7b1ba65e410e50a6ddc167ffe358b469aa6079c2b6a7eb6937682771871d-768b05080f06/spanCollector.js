import { Ho } from "./global.js";
import { h } from "./tslib.es6.js";
function On() {
    return globalThis._CURSOR_SENTRY;
}
var bhe, Rhe, Che, rf;
export { Che, On, Rhe, bhe, rf };
var __wakaru__Je_initialized = false;
export function _Je() {
if (__wakaru__Je_initialized) return;
__wakaru__Je_initialized = true;
"use strict";
h(), Ho(), bhe = 1e3, Rhe = 20, Che = class {
    constructor(){
        this._buffer = [], this._droppedByName = new Map, this._dropped = 0, this._totalSeen = 0, this._maxBuffer = bhe, this._random = Math.random;
    }
    configure(e) {
        e.maxBuffer !== void 0 && (this._maxBuffer = e.maxBuffer), e.random !== void 0 && (this._random = e.random);
    }
    collect(e) {
        if (!e || !On().enabled) return;
        const t = "traceId" in e && typeof e.traceId == "string" && !("createChild" in e) ? e : this._convert(e);
        if (this._totalSeen++, this._buffer.length < this._maxBuffer) {
            this._buffer.push(t);
            return;
        }
        const n = Math.floor(this._random() * this._totalSeen), r = n < this._maxBuffer ? this._replaceAt(n, t) : t;
        this._incrementCount(this._droppedByName, r.name), this._dropped++;
    }
    takeAll() {
        const e = this._buffer, t = this._dropped, n = new Map;
        for (const i of e)this._incrementCount(n, i.name);
        const r = this._topCounts(n), s = this._topCounts(this._droppedByName);
        return this._buffer = [], this._droppedByName.clear(), this._dropped = 0, this._totalSeen = 0, {
            spans: e,
            dropped: t,
            topEmittedNames: r,
            topDroppedNames: s,
            totalEmittedAttributeCount: e.reduce((i, a)=>i + Object.keys(a.attributes).length, 0)
        };
    }
    _replaceAt(e, t) {
        const n = this._buffer[e];
        return this._buffer[e] = t, n;
    }
    _convert(e) {
        return {
            traceId: e.traceId,
            spanId: e.spanId,
            parentSpanId: e.parentSpanId,
            name: e.name,
            startTime: e.startTime,
            endTime: e.endTime ?? Date.now(),
            attributes: e.attributes,
            error: e.status?.code === 2,
            traceState: e.traceState,
            flags: e.traceFlags,
            kind: e.kind,
            statusCode: e.status?.code,
            statusMessage: e.status?.message,
            links: e.links.map((t)=>({
                    traceId: t.traceId,
                    spanId: t.spanId,
                    attributes: t.attributes,
                    traceState: t.traceState,
                    flags: t.flags
                }))
        };
    }
    _incrementCount(e, t) {
        e.set(t, (e.get(t) ?? 0) + 1);
    }
    _topCounts(e, t = Rhe) {
        return [
            ...e.entries()
        ].sort((n, r)=>r[1] - n[1] || n[0].localeCompare(r[0])).slice(0, t).map(([n, r])=>({
                name: n,
                count: r
            }));
    }
}, rf = new Che;

}
