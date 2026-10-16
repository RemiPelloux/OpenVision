import { Pym } from "./index_8.ts";
import { bQ } from "./subagents_pb.js";
import { E } from "./tslib.es6.js";
import { Rym } from "./yBp.js";
var r7a;
export { r7a };
var __wakaru_l61_initialized = false;
export function l61() {
if (__wakaru_l61_initialized) return;
__wakaru_l61_initialized = true;
"use strict";
E(), bQ(), Pym(), r7a = class {
    constructor(){
        this.pending = [], this.inFlightById = new Map, this.acceptedKeys = new Set, this.suppressedIdsByConversation = new Map, this.revision = 0;
    }
    acceptedKey(t, e) {
        return `${t}\0${e}`;
    }
    enqueue(t) {
        const e = t.id.trim(), n = this.acceptedKey(t.conversationId, e);
        if (e.length === 0 || this.acceptedKeys.has(n) || this.suppressedIdsByConversation.get(t.conversationId)?.has(e)) return;
        this.acceptedKeys.add(n);
        const { queue: i, replaced: r } = Rym(this.pending, {
            ...t,
            id: e
        });
        this.pending = i, r && this.acceptedKeys.delete(this.acceptedKey(r.conversationId, r.id)), this.revision++;
    }
    pull(t) {
        const e = this.suppressedIdsByConversation.get(t), n = [], i = [];
        let r = 0;
        for (const s of this.pending){
            if (s.conversationId !== t) {
                i.push(s);
                continue;
            }
            if (e?.has(s.id)) {
                this.acceptedKeys.delete(this.acceptedKey(t, s.id)), r++;
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
            ...new Set(this.pending.map((e)=>e.conversationId))
        ].flatMap((e)=>this.pull(e));
    }
    ack(t) {
        const e = [];
        for (const n of t){
            const i = n.trim(), r = this.inFlightById.get(i);
            r && (this.acceptedKeys.delete(this.acceptedKey(r.conversationId, i)), e.push(r)), this.inFlightById.delete(i);
        }
        return e;
    }
    nack(t, e) {
        const n = new Set(t.map((s)=>s.trim())), i = [];
        for (const [s, o] of this.inFlightById)n.has(s) && (i.push(o), this.inFlightById.delete(s));
        if (!e.requeue) {
            for (const s of i)this.acceptedKeys.delete(this.acceptedKey(s.conversationId, s.id));
            return;
        }
        if (i.length === 0) return;
        let r = i;
        for (const s of this.pending){
            const { queue: o, replaced: a } = Rym(r, s);
            r = o, a && this.acceptedKeys.delete(this.acceptedKey(a.conversationId, a.id));
        }
        this.pending = r, this.revision++;
    }
    suppress(t, e) {
        const n = e.trim();
        if (n.length === 0) return;
        const i = this.suppressedIdsByConversation.get(t) ?? new Set;
        i.add(n), this.suppressedIdsByConversation.set(t, i);
        let r = !1;
        const s = this.pending.length;
        this.pending = this.pending.filter((a)=>a.conversationId !== t || a.id !== n), this.pending.length !== s && (this.acceptedKeys.delete(this.acceptedKey(t, n)), r = !0);
        const o = this.inFlightById.get(n);
        o && o.conversationId === t && (this.inFlightById.delete(n), this.acceptedKeys.delete(this.acceptedKey(t, n)), r = !0), r && this.revision++;
    }
    unsuppress(t, e) {
        const n = this.suppressedIdsByConversation.get(t);
        n?.delete(e.trim()) && n.size === 0 && this.suppressedIdsByConversation.delete(t);
    }
    unsuppressId(t) {
        const e = t.trim();
        for (const n of this.suppressedIdsByConversation.keys())this.unsuppress(n, e);
    }
    clear(t) {
        let e = !1;
        const n = this.pending.length;
        this.pending = this.pending.filter((s)=>s.conversationId !== t), this.pending.length !== n && (e = !0);
        for (const [s, o] of this.inFlightById)o.conversationId === t && (this.inFlightById.delete(s), e = !0);
        const i = this.acceptedKey(t, "");
        for (const s of this.acceptedKeys)s.startsWith(i) && (this.acceptedKeys.delete(s), e = !0);
        const r = this.suppressedIdsByConversation.delete(t);
        (e || r) && this.revision++;
    }
    hasPending(t) {
        return t === void 0 ? this.pending.length > 0 : this.pending.some((e)=>e.conversationId === t);
    }
    hasPendingMatching(t, e) {
        return this.pending.some((n)=>n.conversationId === t && e(n.payload));
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
