import { BT } from "./HVr.js";
import { Yie } from "./global.js";
import { x } from "./tslib.es6.js";
var YIc, XIc, ZIc, swe;
export { XIc, YIc, ZIc, swe };
var __wakaru_QIc_initialized = false;
export function QIc() {
if (__wakaru_QIc_initialized) return;
__wakaru_QIc_initialized = true;
"use strict";
x(), Yie(), YIc = 1e3, XIc = 20, ZIc = class {
    constructor(){
        this._buffer = [], this._droppedByName = new Map, this._dropped = 0, this._totalSeen = 0, this._maxBuffer = YIc, this._random = Math.random;
    }
    configure(e) {
        e.maxBuffer !== void 0 && (this._maxBuffer = e.maxBuffer), e.random !== void 0 && (this._random = e.random);
    }
    collect(e) {
        if (!e || !BT().enabled) return;
        const t = "traceId" in e && typeof e.traceId == "string" && !("createChild" in e) ? e : this._convert(e);
        if (this._totalSeen++, this._buffer.length < this._maxBuffer) {
            this._buffer.push(t);
            return;
        }
        const n = Math.floor(this._random() * this._totalSeen), i = n < this._maxBuffer ? this._replaceAt(n, t) : t;
        this._incrementCount(this._droppedByName, i.name), this._dropped++;
    }
    takeAll() {
        const e = this._buffer, t = this._dropped, n = new Map;
        for (const s of e)this._incrementCount(n, s.name);
        const i = this._topCounts(n), r = this._topCounts(this._droppedByName);
        return this._buffer = [], this._droppedByName.clear(), this._dropped = 0, this._totalSeen = 0, {
            spans: e,
            dropped: t,
            topEmittedNames: i,
            topDroppedNames: r,
            totalEmittedAttributeCount: e.reduce((s, o)=>s + Object.keys(o.attributes).length, 0)
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
    _topCounts(e, t = XIc) {
        return [
            ...e.entries()
        ].sort((n, i)=>i[1] - n[1] || n[0].localeCompare(i[0])).slice(0, t).map(([n, i])=>({
                name: n,
                count: i
            }));
    }
}, swe = new ZIc;

}
