import { Ec, Qe, Vn, st } from "./Iwo.js";
import { pc } from "./LYd.js";
import { C8k, R8k, Rgs, T8k, Xlt, isf, ufs, yPi } from "./Ycg.js";
import { qn } from "./async.js";
import { pd } from "./background_composer_pb.js";
import { rp } from "./bcIdFromAuthority.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { aBe } from "./index_20.ts";
import { E } from "./tslib.es6.js";
var rsf, QTl, SPi, aMn, dfs, ssf;
export { QTl, SPi, aMn, dfs, rsf, ssf };
var __wakaru_osf_initialized = false;
export function osf() {
if (__wakaru_osf_initialized) return;
__wakaru_osf_initialized = true;
"use strict";
E(), rp(), qn(), Qe(), dp(), pd(), aBe(), rsf = 3e4, QTl = "realtimeVoice.unclosedCloudCall:", SPi = "realtimeVoice.unclosedCloudCalls", aMn = "realtimeVoice.removedCloudCalls", dfs = 1e3, ssf = class extends st {
    constructor(t, e, n, i, r = Date.now){
        super(), this.records = t, this.saveCall = e, this.storage = n, this.log = i, this.now = r, this.held = new Map, this.off = !1, this.closeLater = this._register(new Vn), this.controllerRecords = {
            write: (s, o)=>{
                if (this.records.write(s, o), !pc(s.agentId) || s.connectedAtMs === void 0) return;
                const a = Xlt(s), l = this.held.get(a);
                s.endedAtMs !== void 0 ? (this.held.delete(a), this.save(s)) : l === void 0 ? (this.held.set(a, this.now()), this.setUnclosed(s, !0), this.save(s)) : this.now() - l >= rsf && (this.held.set(a, this.now()), this.save(s));
            },
            remove: (s)=>{
                const o = Xlt(s), a = this.held.delete(o) || this.isUnclosed(s), l = this.records.call(s);
                if (this.records.remove(s), !a || l === void 0) {
                    this.setUnclosed(s, !1), pc(s.agentId) && this.remember(aMn, s, dfs);
                    return;
                }
                this.remember(aMn, s, dfs), this.save({
                    ...l,
                    endedAtMs: l.endedAtMs ?? l.lastHeardAtMs,
                    turns: []
                });
            },
            move: (s)=>{
                const o = this.records.calls(s.fromAgentId).map((a)=>a.callId);
                this.records.move(s);
                for (const a of o){
                    const l = {
                        agentId: s.fromAgentId,
                        callId: a
                    }, c = {
                        agentId: s.toAgentId,
                        callId: a
                    };
                    pc(s.fromAgentId) && this.remember(aMn, l, dfs);
                    const u = this.held.get(Xlt(l)), h = this.held.delete(Xlt(l)) || this.isUnclosed(l);
                    u !== void 0 && this.held.set(Xlt(c), u), h && this.setUnclosed(l, !1);
                    const p = this.records.call(c);
                    p?.connectedAtMs !== void 0 && pc(s.toAgentId) && (h || p.endedAtMs !== void 0) && (p.endedAtMs === void 0 && this.setUnclosed(c, !0), this.save(p));
                }
            },
            read: (s, o)=>this.records.read(s, o)
        };
    }
    apply(t, e) {
        const n = this.unclosedRefs(), i = this.refs(aMn);
        for (const s of e){
            const o = {
                agentId: t,
                callId: s.callId
            };
            if (this.held.has(Xlt(o)) || n.some((c)=>yPi(c, o)) || i.some((c)=>yPi(c, o))) continue;
            const a = this.records.call(o), l = T8k(t, s, a);
            (a === void 0 || l.endedAtMs !== void 0 && a.endedAtMs === void 0 || (l.endedAtMs !== void 0 || a.endedAtMs === void 0) && l.turns.length > a.turns.length || l.endedAtMs === void 0 && a.endedAtMs === void 0 && l.lastHeardAtMs > a.lastHeardAtMs) && this.records.write(l, {
                evictOlder: !0
            });
        }
        const r = i.filter((s)=>s.agentId !== t || e.some((o)=>o.callId === s.callId));
        r.length !== i.length && this.storeRefs(aMn, r);
    }
    closeUnclosed() {
        let t;
        for (const e of this.unclosedRefs()){
            if (this.held.has(Xlt(e))) continue;
            const n = this.records.call(e);
            if (n === void 0 || !pc(e.agentId)) {
                this.setUnclosed(e, !1);
                continue;
            }
            if (n.endedAtMs !== void 0) {
                this.save(n);
                continue;
            }
            const i = Rgs(n) ?? 0;
            if (i > this.now()) {
                t = Math.min(t ?? i, i);
                continue;
            }
            const r = {
                ...n,
                endedAtMs: n.lastHeardAtMs
            };
            this.records.write(r, {}), this.save(r);
        }
        this.closeLater.value = t === void 0 ? void 0 : Ec(()=>this.closeUnclosed(), t - this.now() + 1e3);
    }
    reset() {
        this.held.clear(), this.closeLater.clear(), this.off = !1, this.closeUnclosed();
    }
    save(t) {
        this.off || this.saveCall(t.agentId, C8k(t)).then(()=>{
            t.endedAtMs !== void 0 && this.setUnclosed(t, !1);
        }, (e)=>{
            if (Us.from(e).code === pr.Unimplemented) {
                this.off = !0;
                return;
            }
            this.log.warn("voice call sync: could not save a call", R8k(e));
        });
    }
    isUnclosed(t) {
        return this.unclosedRefs().some((e)=>yPi(e, t));
    }
    refs(t) {
        const e = this.storage.get(t, -1);
        if (e === void 0) return [];
        try {
            const n = JSON.parse(e);
            return Array.isArray(n) ? n.filter(isf) : [];
        } catch  {
            return [];
        }
    }
    unclosedRefs() {
        const t = this.storage.keys(-1, 1).filter((n)=>n.startsWith(QTl)).flatMap((n)=>{
            try {
                const i = JSON.parse(this.storage.get(n, -1) ?? "null");
                return isf(i) ? [
                    i
                ] : [];
            } catch  {
                return [];
            }
        }), e = new Map;
        for (const n of [
            ...t,
            ...this.refs(SPi)
        ])this.storage.get(ufs(n), -1) !== void 0 && e.set(Xlt(n), n);
        return [
            ...e.values()
        ];
    }
    setUnclosed(t, e) {
        const n = this.refs(SPi).filter((i)=>!yPi(i, t));
        if (e) {
            const i = {
                agentId: t.agentId,
                callId: t.callId
            };
            this.storage.store(ufs(t), JSON.stringify(i), -1, 1), this.storeRefs(SPi, [
                ...n,
                t
            ]);
        } else this.storage.remove(ufs(t), -1), this.storeRefs(SPi, n);
    }
    remember(t, e, n) {
        const i = this.refs(t).filter((r)=>!yPi(r, e));
        this.storeRefs(t, [
            ...i,
            e
        ].slice(-n));
    }
    storeRefs(t, e) {
        if (e.length === 0) this.storage.remove(t, -1);
        else {
            const n = e.map(({ agentId: i, callId: r })=>({
                    agentId: i,
                    callId: r
                }));
            this.storage.store(t, JSON.stringify(n), -1, 1);
        }
    }
};

}
