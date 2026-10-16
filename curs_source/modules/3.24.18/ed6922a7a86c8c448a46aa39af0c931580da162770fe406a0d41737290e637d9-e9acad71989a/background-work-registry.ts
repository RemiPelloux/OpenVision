import { XDd } from "./A3u.js";
import { ZDd } from "./index_8.ts";
import { Pj } from "./subagents_pb.js";
import { x } from "./tslib.es6.js";
var QDd;
export { QDd };
var __wakaru_lkv_initialized = false;
export function lkv() {
if (__wakaru_lkv_initialized) return;
__wakaru_lkv_initialized = true;
"use strict";
x(), Pj(), ZDd(), QDd = class {
    constructor(){
        this.pending = [], this.inFlightById = new Map, this.acceptedKeys = new Set, this.suppressedIdsByConversation = new Map, this.revision = 0;
    }
    acceptedKey(e, t) {
        return `${e}\0${t}`;
    }
    enqueue(e) {
        const t = e.id.trim(), n = this.acceptedKey(e.conversationId, t);
        if (t.length === 0 || this.acceptedKeys.has(n) || this.suppressedIdsByConversation.get(e.conversationId)?.has(t)) return;
        this.acceptedKeys.add(n);
        const { queue: i, replaced: r } = XDd(this.pending, {
            ...e,
            id: t
        });
        this.pending = i, r && this.acceptedKeys.delete(this.acceptedKey(r.conversationId, r.id)), this.revision++;
    }
    pull(e) {
        const t = this.suppressedIdsByConversation.get(e), n = [], i = [];
        let r = 0;
        for (const s of this.pending){
            if (s.conversationId !== e) {
                i.push(s);
                continue;
            }
            if (t?.has(s.id)) {
                this.acceptedKeys.delete(this.acceptedKey(e, s.id)), r++;
                continue;
            }
            n.push(s), this.inFlightById.set(s.id, s);
        }
        return (n.length > 0 || r > 0) && (this.pending = i, this.revision++), n.map((s)=>({
                ...s
            }));
    }
    pullAll() {
        return [
            ...new Set(this.pending.map((t)=>t.conversationId))
        ].flatMap((t)=>this.pull(t));
    }
    ack(e) {
        const t = [];
        for (const n of e){
            const i = n.trim(), r = this.inFlightById.get(i);
            r && (this.acceptedKeys.delete(this.acceptedKey(r.conversationId, i)), t.push(r)), this.inFlightById.delete(i);
        }
        return t;
    }
    nack(e, t) {
        const n = new Set(e.map((s)=>s.trim())), i = [];
        for (const [s, o] of this.inFlightById)n.has(s) && (i.push(o), this.inFlightById.delete(s));
        if (!t.requeue) {
            for (const s of i)this.acceptedKeys.delete(this.acceptedKey(s.conversationId, s.id));
            return;
        }
        if (i.length === 0) return;
        let r = i;
        for (const s of this.pending){
            const { queue: o, replaced: a } = XDd(r, s);
            r = o, a && this.acceptedKeys.delete(this.acceptedKey(a.conversationId, a.id));
        }
        this.pending = r, this.revision++;
    }
    suppress(e, t) {
        const n = t.trim();
        if (n.length === 0) return;
        const i = this.suppressedIdsByConversation.get(e) ?? new Set;
        i.add(n), this.suppressedIdsByConversation.set(e, i);
        let r = !1;
        const s = this.pending.length;
        this.pending = this.pending.filter((a)=>a.conversationId !== e || a.id !== n), this.pending.length !== s && (this.acceptedKeys.delete(this.acceptedKey(e, n)), r = !0);
        const o = this.inFlightById.get(n);
        o && o.conversationId === e && (this.inFlightById.delete(n), this.acceptedKeys.delete(this.acceptedKey(e, n)), r = !0), r && this.revision++;
    }
    unsuppress(e, t) {
        const n = this.suppressedIdsByConversation.get(e);
        n?.delete(t.trim()) && n.size === 0 && this.suppressedIdsByConversation.delete(e);
    }
    unsuppressId(e) {
        const t = e.trim();
        for (const n of this.suppressedIdsByConversation.keys())this.unsuppress(n, t);
    }
    clear(e) {
        let t = !1;
        const n = this.pending.length;
        this.pending = this.pending.filter((s)=>s.conversationId !== e), this.pending.length !== n && (t = !0);
        for (const [s, o] of this.inFlightById)o.conversationId === e && (this.inFlightById.delete(s), t = !0);
        const i = this.acceptedKey(e, "");
        for (const s of this.acceptedKeys)s.startsWith(i) && (this.acceptedKeys.delete(s), t = !0);
        const r = this.suppressedIdsByConversation.delete(e);
        (t || r) && this.revision++;
    }
    hasPending(e) {
        return e === void 0 ? this.pending.length > 0 : this.pending.some((t)=>t.conversationId === e);
    }
    hasPendingMatching(e, t) {
        return this.pending.some((n)=>n.conversationId === e && t(n.payload));
    }
    getPendingCount() {
        return this.pending.length;
    }
    getUnsettledCount() {
        return this.acceptedKeys.size;
    }
    getRevision() {
        return this.revision;
    }
};

}
