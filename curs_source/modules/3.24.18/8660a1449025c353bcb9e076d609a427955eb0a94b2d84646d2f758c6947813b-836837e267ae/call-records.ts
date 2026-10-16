import { kQn, xve } from "./SZu.js";
import { ITl, Qgs, Qnf, Rgs, V9k, Xgs, Z4k, _if, bif, gPi, jVe, lS, pYt, utf, x2, yif } from "./Ycg.js";
import { aBe } from "./index_20.ts";
import { OIt } from "./index_218.js";
import { E } from "./tslib.es6.js";
import { Knf, Vnf } from "./voice-storage.ts";
var mYt, fPi, kif, wif, Cif, Tif, Eif;
export { Cif, Eif, Tif, fPi, kif, mYt, wif };
var __wakaru_oBk_initialized = false;
export function oBk() {
if (__wakaru_oBk_initialized) return;
__wakaru_oBk_initialized = true;
"use strict";
E(), aBe(), OIt(), Knf(), mYt = "glass.realtimeVoice.calls/", fPi = "glass.realtimeVoice.callTurns/", kif = 20, wif = x2({
    speaker: pYt([
        "user",
        "assistant"
    ]),
    text: lS(),
    itemId: lS()
}), Cif = x2({
    callId: lS().check(xve(1)),
    agentId: lS().check(xve(1)),
    anchor: Xgs(x2({
        lineId: lS().check(xve(1)),
        serverLineId: Xgs(lS().check(xve(1)))
    })),
    startedAtMs: gPi(),
    connectedAtMs: Xgs(gPi()),
    endedAtMs: Xgs(gPi()),
    lastHeardAtMs: gPi(),
    turnCount: V9k().check(kQn()),
    chunkEstimatesPx: jVe(gPi().check(kQn()))
}).check(Qnf((t)=>t.chunkEstimatesPx.length === utf(t.turnCount))), Tif = jVe(wif), Eif = class {
    constructor(t, e, n = Rgs){
        this.storage = t, this.turnEstimatePx = e, this.staleAtMs = n;
    }
    headers = new Map;
    chunks = new Map;
    calls(t) {
        return this.agentCalls(t).map(({ header: e })=>e);
    }
    header(t) {
        const e = this.readHeader(Qgs(t));
        return e?.agentId === t.agentId ? e : void 0;
    }
    chunk(t, e) {
        const n = ITl(t, e), i = this.storage.get(n);
        if (i === void 0 || i.length === 0) return this.chunks.delete(n), [];
        const r = this.chunks.get(n);
        if (r?.raw === i) return r.turns;
        const s = bif(i, Tif) ?? [];
        return this.chunks.set(n, {
            raw: i,
            turns: s
        }), s;
    }
    call(t) {
        const e = this.header(t);
        if (e === void 0) return;
        const n = [];
        for(let i = 0; i < e.chunkEstimatesPx.length; i++)n.push(...this.chunk(e, i));
        return {
            ..._if(e),
            turns: n
        };
    }
    read(t, e) {
        return this.calls(t).filter((n)=>n.callId !== e).flatMap((n)=>this.call(n) ?? []);
    }
    write(t, e = {}) {
        const n = Qgs(t), i = utf(t.turns.length), r = new Set(e.chunks === void 0 ? Array.from({
            length: i
        }, (c, u)=>u) : [
            ...e.chunks
        ].filter((c)=>c >= 0 && c < i)), s = this.readHeader(n)?.chunkEstimatesPx, o = [];
        for(let c = 0; c < i; c++){
            const u = s?.[c];
            if (r.has(c) || u === void 0) {
                const d = Z4k(t.turns, c);
                this.storage.store(ITl(t, c), JSON.stringify(d)), o.push(d.reduce((h, p)=>h + this.turnEstimatePx(p), 0));
            } else o.push(u);
        }
        const a = {
            ..._if(t),
            turnCount: t.turns.length,
            chunkEstimatesPx: o
        }, l = JSON.stringify(a);
        this.storage.store(n, l), this.cacheHeader(n, l, a), e.evictOlder === !0 && this.evictOlderCalls(t.agentId);
    }
    remove(t) {
        const e = Qgs(t);
        this.removeCall(e, t, this.readHeader(e)?.chunkEstimatesPx.length ?? 0);
    }
    move({ fromAgentId: t, toAgentId: e }) {
        if (t !== e) for (const { key: n, header: i } of this.agentCalls(t)){
            const r = {
                agentId: e,
                callId: i.callId
            };
            if (this.readHeader(Qgs(r)) === void 0) {
                const s = this.call(i);
                s !== void 0 && this.write({
                    ...s,
                    agentId: e
                });
            }
            this.removeCall(n, i, i.chunkEstimatesPx.length);
        }
    }
    readHeader(t) {
        const e = this.storage.get(t);
        if (e === void 0 || e.length === 0) {
            this.headers.delete(t);
            return;
        }
        const n = this.headers.get(t);
        if (n?.raw === e) return n.header;
        const i = bif(e, Cif);
        if (i === void 0) {
            this.headers.delete(t);
            return;
        }
        return this.cacheHeader(t, e, {
            ...i,
            anchor: i.anchor
        });
    }
    cacheHeader(t, e, n) {
        const i = this.headers.get(t)?.header.chunkEstimatesPx, r = n.chunkEstimatesPx, o = i !== void 0 && i.length === r.length && i.every((a, l)=>a === r[l]) ? {
            ...n,
            chunkEstimatesPx: i
        } : n;
        return this.headers.set(t, {
            raw: e,
            header: o
        }), o;
    }
    agentCalls(t) {
        const e = `${mYt}${t}/`, n = [];
        for (const i of this.storage.keys()){
            const r = i.startsWith(e) ? this.readHeader(i) : void 0;
            r !== void 0 && r.agentId === t && n.push({
                key: i,
                header: r
            });
        }
        return n.sort((i, r)=>i.header.startedAtMs - r.header.startedAtMs);
    }
    callsByAgent() {
        const t = new Map;
        for (const e of this.storage.keys()){
            const n = e.startsWith(mYt) ? this.readHeader(e) : void 0;
            if (n === void 0 || !e.startsWith(`${mYt}${n.agentId}/`)) continue;
            const i = t.get(n.agentId);
            i === void 0 ? t.set(n.agentId, [
                {
                    key: e,
                    header: n
                }
            ]) : i.push({
                key: e,
                header: n
            });
        }
        return t;
    }
    evictOlderCalls(t) {
        const e = Date.now(), n = ({ header: c })=>(this.staleAtMs(c) ?? 0) <= e, i = (c)=>c.header.connectedAtMs !== void 0 || n(c), r = this.callsByAgent(), s = [
            ...r.get(t) ?? []
        ].sort((c, u)=>c.header.startedAtMs - u.header.startedAtMs), o = (c)=>Math.max(...c.map(({ header: u })=>u.lastHeardAtMs)), a = [
            ...r.values()
        ].sort((c, u)=>o(c) - o(u)), l = [
            ...yif(s, kif, i, n),
            ...yif(a, Vnf, (c)=>c.some(i), (c)=>c.every(n)).flat()
        ];
        for (const { key: c, header: u } of l)this.removeCall(c, u, u.chunkEstimatesPx.length);
    }
    removeCall(t, e, n) {
        const i = new Set(Array.from({
            length: n
        }, (s, o)=>ITl(e, o))), r = `${fPi}${e.agentId}/${e.callId}/`;
        for (const s of this.storage.keys())s.startsWith(r) && i.add(s);
        for (const s of i)this.chunks.delete(s), this.storage.get(s) !== void 0 && this.storage.remove(s);
        this.headers.delete(t), this.storage.get(t) !== void 0 && this.storage.remove(t);
    }
};

}
