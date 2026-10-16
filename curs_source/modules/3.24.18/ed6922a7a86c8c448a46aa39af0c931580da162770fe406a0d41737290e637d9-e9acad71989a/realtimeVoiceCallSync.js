import { Cl, Se, cn, we } from "./HVr.js";
import { bn } from "./async.js";
import { Fkt, hm, r2n, vdo } from "./background_composer_pb.js";
import { nb } from "./bcIdFromAuthority.js";
import { Xir } from "./call-records.ts";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { xTe } from "./index_20.ts";
import { Um } from "./qIc.js";
import { x } from "./tslib.es6.js";
function ug_(e) {
    return new r2n({
        callId: e.callId,
        anchorLineId: e.anchor?.lineId ?? "",
        ...e.anchor?.serverLineId === void 0 ? {} : {
            anchorServerLineId: e.anchor.serverLineId
        },
        startedAtMs: BigInt(e.startedAtMs),
        ...e.connectedAtMs === void 0 ? {} : {
            connectedAtMs: BigInt(e.connectedAtMs)
        },
        ...e.endedAtMs === void 0 ? {} : {
            endedAtMs: BigInt(e.endedAtMs)
        },
        turns: e.endedAtMs === void 0 ? [] : e.turns.map(mg_),
        userTurnCount: e.turns.filter((t)=>t.speaker === "user").length,
        assistantTurnCount: e.turns.filter((t)=>t.speaker === "assistant").length
    });
}
function dg_(e, t, n) {
    const i = Number(t.startedAtMs), r = t.connectedAtMs === void 0 ? void 0 : Number(t.connectedAtMs), s = t.endedAtMs === void 0 ? void 0 : Number(t.endedAtMs), o = t.turns.flatMap(gg_);
    return {
        callId: t.callId,
        agentId: e,
        anchor: t.anchorServerLineId === void 0 || t.anchorServerLineId === "" ? void 0 : {
            lineId: t.anchorLineId || t.anchorServerLineId,
            serverLineId: t.anchorServerLineId
        },
        startedAtMs: i,
        ...r === void 0 ? {} : {
            connectedAtMs: r
        },
        ...s === void 0 ? {} : {
            endedAtMs: s
        },
        lastHeardAtMs: s ?? pg_(t),
        turns: o.length === 0 && n !== void 0 ? n.turns : o
    };
}
function pg_(e) {
    return Number(e.lastHeardAtMs ?? e.connectedAtMs ?? e.startedAtMs);
}
function mg_(e) {
    return new vdo({
        speaker: e.speaker === "user" ? Fkt.USER : Fkt.ASSISTANT,
        text: e.text,
        itemId: e.itemId
    });
}
function gg_(e) {
    switch(e.speaker){
        case Fkt.USER:
            return [
                {
                    speaker: "user",
                    text: e.text,
                    itemId: e.itemId
                }
            ];
        case Fkt.ASSISTANT:
            return [
                {
                    speaker: "assistant",
                    text: e.text,
                    itemId: e.itemId
                }
            ];
        case Fkt.UNSPECIFIED:
            return [];
        default:
            return e.speaker;
    }
}
function g7e({ agentId: e, callId: t }) {
    return `${e}/${t}`;
}
function Irr(e) {
    return `${UPo}${g7e(e)}`;
}
function d9n(e, t) {
    return e.agentId === t.agentId && e.callId === t.callId;
}
function U8h(e) {
    return typeof e == "object" && e !== null && typeof e.agentId == "string" && typeof e.callId == "string";
}
function fg_(e) {
    return e instanceof Error ? e.name : typeof e;
}
var $8h, UPo, h9n, Fzt, Arr, H8h;
export { $8h, Arr, Fzt, H8h, Irr, U8h, UPo, d9n, dg_, fg_, g7e, gg_, h9n, mg_, pg_, ug_ };
var __wakaru_W8h_initialized = false;
export function W8h() {
if (__wakaru_W8h_initialized) return;
__wakaru_W8h_initialized = true;
"use strict";
x(), nb(), bn(), Se(), hg(), hm(), xTe(), $8h = 3e4, UPo = "realtimeVoice.unclosedCloudCall:", h9n = "realtimeVoice.unclosedCloudCalls", Fzt = "realtimeVoice.removedCloudCalls", Arr = 1e3, H8h = class extends we {
    constructor(e, t, n, i, r = Date.now){
        super(), this.records = e, this.saveCall = t, this.storage = n, this.log = i, this.now = r, this.held = new Map, this.off = !1, this.closeLater = this._register(new cn), this.controllerRecords = {
            write: (s, o)=>{
                if (this.records.write(s, o), !Um(s.agentId) || s.connectedAtMs === void 0) return;
                const a = g7e(s), c = this.held.get(a);
                s.endedAtMs !== void 0 ? (this.held.delete(a), this.save(s)) : c === void 0 ? (this.held.set(a, this.now()), this.setUnclosed(s, !0), this.save(s)) : this.now() - c >= $8h && (this.held.set(a, this.now()), this.save(s));
            },
            remove: (s)=>{
                const o = g7e(s), a = this.held.delete(o) || this.isUnclosed(s), c = this.records.call(s);
                if (this.records.remove(s), !a || c === void 0) {
                    this.setUnclosed(s, !1), Um(s.agentId) && this.remember(Fzt, s, Arr);
                    return;
                }
                this.remember(Fzt, s, Arr), this.save({
                    ...c,
                    endedAtMs: c.endedAtMs ?? c.lastHeardAtMs,
                    turns: []
                });
            },
            move: (s)=>{
                const o = this.records.calls(s.fromAgentId).map((a)=>a.callId);
                this.records.move(s);
                for (const a of o){
                    const c = {
                        agentId: s.fromAgentId,
                        callId: a
                    }, l = {
                        agentId: s.toAgentId,
                        callId: a
                    };
                    Um(s.fromAgentId) && this.remember(Fzt, c, Arr);
                    const u = this.held.get(g7e(c)), p = this.held.delete(g7e(c)) || this.isUnclosed(c);
                    u !== void 0 && this.held.set(g7e(l), u), p && this.setUnclosed(c, !1);
                    const g = this.records.call(l);
                    g?.connectedAtMs !== void 0 && Um(s.toAgentId) && (p || g.endedAtMs !== void 0) && (g.endedAtMs === void 0 && this.setUnclosed(l, !0), this.save(g));
                }
            },
            read: (s, o)=>this.records.read(s, o)
        };
    }
    apply(e, t) {
        const n = this.unclosedRefs(), i = this.refs(Fzt);
        for (const s of t){
            const o = {
                agentId: e,
                callId: s.callId
            };
            if (this.held.has(g7e(o)) || n.some((l)=>d9n(l, o)) || i.some((l)=>d9n(l, o))) continue;
            const a = this.records.call(o), c = dg_(e, s, a);
            (a === void 0 || c.endedAtMs !== void 0 && a.endedAtMs === void 0 || (c.endedAtMs !== void 0 || a.endedAtMs === void 0) && c.turns.length > a.turns.length || c.endedAtMs === void 0 && a.endedAtMs === void 0 && c.lastHeardAtMs > a.lastHeardAtMs) && this.records.write(c, {
                evictOlder: !0
            });
        }
        const r = i.filter((s)=>s.agentId !== e || t.some((o)=>o.callId === s.callId));
        r.length !== i.length && this.storeRefs(Fzt, r);
    }
    closeUnclosed() {
        let e;
        for (const t of this.unclosedRefs()){
            if (this.held.has(g7e(t))) continue;
            const n = this.records.call(t);
            if (n === void 0 || !Um(t.agentId)) {
                this.setUnclosed(t, !1);
                continue;
            }
            if (n.endedAtMs !== void 0) {
                this.save(n);
                continue;
            }
            const i = Xir(n) ?? 0;
            if (i > this.now()) {
                e = Math.min(e ?? i, i);
                continue;
            }
            const r = {
                ...n,
                endedAtMs: n.lastHeardAtMs
            };
            this.records.write(r, {}), this.save(r);
        }
        this.closeLater.value = e === void 0 ? void 0 : Cl(()=>this.closeUnclosed(), e - this.now() + 1e3);
    }
    reset() {
        this.held.clear(), this.closeLater.clear(), this.off = !1, this.closeUnclosed();
    }
    save(e) {
        this.off || this.saveCall(e.agentId, ug_(e)).then(()=>{
            e.endedAtMs !== void 0 && this.setUnclosed(e, !1);
        }, (t)=>{
            if (Qo.from(t).code === Rs.Unimplemented) {
                this.off = !0;
                return;
            }
            this.log.warn("voice call sync: could not save a call", fg_(t));
        });
    }
    isUnclosed(e) {
        return this.unclosedRefs().some((t)=>d9n(t, e));
    }
    refs(e) {
        const t = this.storage.get(e, -1);
        if (t === void 0) return [];
        try {
            const n = JSON.parse(t);
            return Array.isArray(n) ? n.filter(U8h) : [];
        } catch  {
            return [];
        }
    }
    unclosedRefs() {
        const e = this.storage.keys(-1, 1).filter((n)=>n.startsWith(UPo)).flatMap((n)=>{
            try {
                const i = JSON.parse(this.storage.get(n, -1) ?? "null");
                return U8h(i) ? [
                    i
                ] : [];
            } catch  {
                return [];
            }
        }), t = new Map;
        for (const n of [
            ...e,
            ...this.refs(h9n)
        ])this.storage.get(Irr(n), -1) !== void 0 && t.set(g7e(n), n);
        return [
            ...t.values()
        ];
    }
    setUnclosed(e, t) {
        const n = this.refs(h9n).filter((i)=>!d9n(i, e));
        if (t) {
            const i = {
                agentId: e.agentId,
                callId: e.callId
            };
            this.storage.store(Irr(e), JSON.stringify(i), -1, 1), this.storeRefs(h9n, [
                ...n,
                e
            ]);
        } else this.storage.remove(Irr(e), -1), this.storeRefs(h9n, n);
    }
    remember(e, t, n) {
        const i = this.refs(e).filter((r)=>!d9n(r, t));
        this.storeRefs(e, [
            ...i,
            t
        ].slice(-n));
    }
    storeRefs(e, t) {
        if (t.length === 0) this.storage.remove(e, -1);
        else {
            const n = t.map(({ agentId: i, callId: r })=>({
                    agentId: i,
                    callId: r
                }));
            this.storage.store(e, JSON.stringify(n), -1, 1);
        }
    }
};

}
