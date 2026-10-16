import { J9h, kzt } from "./call-record.ts";
import { R8s, Zd, Zue, aAn, k8s, t8s, w8s } from "./f0s.js";
import { xTe } from "./index_20.ts";
import { V0t } from "./index_214.js";
import { eAn } from "./parse_8.js";
import { $4h, G4h, J4h, U4h, X4h, dPo, q4h, uPo } from "./schemas_9.js";
import { x } from "./tslib.es6.js";
import { L4h, P4h } from "./voice-storage.ts";
function X9h(e) {
    return Math.ceil(e / kzt);
}
function Bh_(e, t) {
    const n = t * kzt;
    return e.slice(n, n + kzt);
}
function Xir(e) {
    return e.endedAtMs === void 0 ? e.lastHeardAtMs + J9h : void 0;
}
function LC(e) {
    return t8s(U4h, e);
}
function o9n(e) {
    return k8s(uPo, e);
}
function Lp_(e) {
    return w8s($4h, e);
}
function Azt(e, t) {
    return new G4h({
        type: "array",
        element: e,
        ...Zd(t)
    });
}
function $R(e, t) {
    const n = {
        type: "object",
        shape: e ?? {},
        ...Zd(t)
    };
    return new dPo(n);
}
function a9n(e, t) {
    const n = Array.isArray(e) ? Object.fromEntries(e.map((i)=>[
            i,
            i
        ])) : e;
    return new q4h({
        type: "enum",
        entries: n,
        ...Zd(t)
    });
}
function grr(e) {
    return new X4h({
        type: "optional",
        innerType: e
    });
}
function B4h(e, t = {}) {
    return R8s(J4h, e, t);
}
function frr({ agentId: e, callId: t }) {
    return `${j0t}${e}/${t}`;
}
function pPo({ agentId: e, callId: t }, n) {
    return `${c9n}${e}/${t}/${n}`;
}
function nUh(e) {
    const { callId: t, agentId: n, anchor: i, startedAtMs: r, connectedAtMs: s, endedAtMs: o, lastHeardAtMs: a } = e;
    return {
        callId: t,
        agentId: n,
        anchor: i,
        startedAtMs: r,
        ...s === void 0 ? {} : {
            connectedAtMs: s
        },
        ...o === void 0 ? {} : {
            endedAtMs: o
        },
        lastHeardAtMs: a
    };
}
function iUh(e, t) {
    let n;
    try {
        n = JSON.parse(e);
    } catch  {
        return;
    }
    const i = eAn(t, n);
    return i.success ? i.data : void 0;
}
function rUh(e, t, n, i) {
    const r = e.filter(n).length - t;
    return r > 0 ? e.filter(i).slice(0, r) : [];
}
var j0t, c9n, oUh, aUh, cUh, lUh, uUh;
export { $R, Azt, B4h, Bh_, LC, Lp_, X9h, Xir, a9n, aUh, c9n, cUh, frr, grr, iUh, j0t, lUh, nUh, o9n, oUh, pPo, rUh, uUh };
var __wakaru_jp__initialized = false;
export function jp_() {
if (__wakaru_jp__initialized) return;
__wakaru_jp__initialized = true;
"use strict";
x(), xTe(), V0t(), L4h(), j0t = "glass.realtimeVoice.calls/", c9n = "glass.realtimeVoice.callTurns/", oUh = 20, aUh = $R({
    speaker: a9n([
        "user",
        "assistant"
    ]),
    text: LC(),
    itemId: LC()
}), cUh = $R({
    callId: LC().check(Zue(1)),
    agentId: LC().check(Zue(1)),
    anchor: grr($R({
        lineId: LC().check(Zue(1)),
        serverLineId: grr(LC().check(Zue(1)))
    })),
    startedAtMs: o9n(),
    connectedAtMs: grr(o9n()),
    endedAtMs: grr(o9n()),
    lastHeardAtMs: o9n(),
    turnCount: Lp_().check(aAn()),
    chunkEstimatesPx: Azt(o9n().check(aAn()))
}).check(B4h((e)=>e.chunkEstimatesPx.length === X9h(e.turnCount))), lUh = Azt(aUh), uUh = class {
    constructor(e, t, n = Xir){
        this.storage = e, this.turnEstimatePx = t, this.staleAtMs = n;
    }
    headers = new Map;
    chunks = new Map;
    calls(e) {
        return this.agentCalls(e).map(({ header: t })=>t);
    }
    header(e) {
        const t = this.readHeader(frr(e));
        return t?.agentId === e.agentId ? t : void 0;
    }
    chunk(e, t) {
        const n = pPo(e, t), i = this.storage.get(n);
        if (i === void 0 || i.length === 0) return this.chunks.delete(n), [];
        const r = this.chunks.get(n);
        if (r?.raw === i) return r.turns;
        const s = iUh(i, lUh) ?? [];
        return this.chunks.set(n, {
            raw: i,
            turns: s
        }), s;
    }
    call(e) {
        const t = this.header(e);
        if (t === void 0) return;
        const n = [];
        for(let i = 0; i < t.chunkEstimatesPx.length; i++)n.push(...this.chunk(t, i));
        return {
            ...nUh(t),
            turns: n
        };
    }
    read(e, t) {
        return this.calls(e).filter((n)=>n.callId !== t).flatMap((n)=>this.call(n) ?? []);
    }
    write(e, t = {}) {
        const n = frr(e), i = X9h(e.turns.length), r = new Set(t.chunks === void 0 ? Array.from({
            length: i
        }, (l, u)=>u) : [
            ...t.chunks
        ].filter((l)=>l >= 0 && l < i)), s = this.readHeader(n)?.chunkEstimatesPx, o = [];
        for(let l = 0; l < i; l++){
            const u = s?.[l];
            if (r.has(l) || u === void 0) {
                const h = Bh_(e.turns, l);
                this.storage.store(pPo(e, l), JSON.stringify(h)), o.push(h.reduce((p, g)=>p + this.turnEstimatePx(g), 0));
            } else o.push(u);
        }
        const a = {
            ...nUh(e),
            turnCount: e.turns.length,
            chunkEstimatesPx: o
        }, c = JSON.stringify(a);
        this.storage.store(n, c), this.cacheHeader(n, c, a), t.evictOlder === !0 && this.evictOlderCalls(e.agentId);
    }
    remove(e) {
        const t = frr(e);
        this.removeCall(t, e, this.readHeader(t)?.chunkEstimatesPx.length ?? 0);
    }
    move({ fromAgentId: e, toAgentId: t }) {
        if (e !== t) for (const { key: n, header: i } of this.agentCalls(e)){
            const r = {
                agentId: t,
                callId: i.callId
            };
            if (this.readHeader(frr(r)) === void 0) {
                const s = this.call(i);
                s !== void 0 && this.write({
                    ...s,
                    agentId: t
                });
            }
            this.removeCall(n, i, i.chunkEstimatesPx.length);
        }
    }
    readHeader(e) {
        const t = this.storage.get(e);
        if (t === void 0 || t.length === 0) {
            this.headers.delete(e);
            return;
        }
        const n = this.headers.get(e);
        if (n?.raw === t) return n.header;
        const i = iUh(t, cUh);
        if (i === void 0) {
            this.headers.delete(e);
            return;
        }
        return this.cacheHeader(e, t, {
            ...i,
            anchor: i.anchor
        });
    }
    cacheHeader(e, t, n) {
        const i = this.headers.get(e)?.header.chunkEstimatesPx, r = n.chunkEstimatesPx, o = i !== void 0 && i.length === r.length && i.every((a, c)=>a === r[c]) ? {
            ...n,
            chunkEstimatesPx: i
        } : n;
        return this.headers.set(e, {
            raw: t,
            header: o
        }), o;
    }
    agentCalls(e) {
        const t = `${j0t}${e}/`, n = [];
        for (const i of this.storage.keys()){
            const r = i.startsWith(t) ? this.readHeader(i) : void 0;
            r !== void 0 && r.agentId === e && n.push({
                key: i,
                header: r
            });
        }
        return n.sort((i, r)=>i.header.startedAtMs - r.header.startedAtMs);
    }
    callsByAgent() {
        const e = new Map;
        for (const t of this.storage.keys()){
            const n = t.startsWith(j0t) ? this.readHeader(t) : void 0;
            if (n === void 0 || !t.startsWith(`${j0t}${n.agentId}/`)) continue;
            const i = e.get(n.agentId);
            i === void 0 ? e.set(n.agentId, [
                {
                    key: t,
                    header: n
                }
            ]) : i.push({
                key: t,
                header: n
            });
        }
        return e;
    }
    evictOlderCalls(e) {
        const t = Date.now(), n = ({ header: l })=>(this.staleAtMs(l) ?? 0) <= t, i = (l)=>l.header.connectedAtMs !== void 0 || n(l), r = this.callsByAgent(), s = [
            ...r.get(e) ?? []
        ].sort((l, u)=>l.header.startedAtMs - u.header.startedAtMs), o = (l)=>Math.max(...l.map(({ header: u })=>u.lastHeardAtMs)), a = [
            ...r.values()
        ].sort((l, u)=>o(l) - o(u)), c = [
            ...rUh(s, oUh, i, n),
            ...rUh(a, P4h, (l)=>l.some(i), (l)=>l.every(n)).flat()
        ];
        for (const { key: l, header: u } of c)this.removeCall(l, u, u.chunkEstimatesPx.length);
    }
    removeCall(e, t, n) {
        const i = new Set(Array.from({
            length: n
        }, (s, o)=>pPo(t, o))), r = `${c9n}${t.agentId}/${t.callId}/`;
        for (const s of this.storage.keys())s.startsWith(r) && i.add(s);
        for (const s of i)this.chunks.delete(s), this.storage.get(s) !== void 0 && this.storage.remove(s);
        this.headers.delete(e), this.storage.get(e) !== void 0 && this.storage.remove(e);
    }
};

}
