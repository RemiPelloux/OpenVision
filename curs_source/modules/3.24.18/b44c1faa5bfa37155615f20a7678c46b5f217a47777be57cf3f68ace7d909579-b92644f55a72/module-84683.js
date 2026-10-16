"use strict";
require.d(exports, {
    MG: ()=>c,
    Ri: ()=>d,
    _G: ()=>l
});
var n = require("./module-51455.js"), s = require("./module-21180.js"), o = require("./module-93181.js"), i = require("./module-90393.js"), a = require("./module-75149.js");
const c = "agentStoreConflict";
function l(e) {
    const t = (0, a.dN)(e, {
        maxChars: a.HA
    });
    return void 0 === t || 0 === t.length ? [] : [
        new s.C({
            hookEventName: c,
            content: t
        })
    ];
}
async function u(e) {
    try {
        const t = await n.stat(e);
        return {
            mtimeMs: t.mtimeMs,
            size: t.size
        };
    } catch  {
        return;
    }
}
class d {
    constructor(e){
        this.lastStat = new Map, this.pending = new Map, this.leased = new Map, this.peekChain = Promise.resolve(), this.sources = e.sources, this.quotaNoticesEnabled = "function" == typeof e.quotaNoticesEnabled ? e.quotaNoticesEnabled : ()=>!0 === e.quotaNoticesEnabled, this.sessionStartedAtMs = e.sessionStartedAtMs, this.statJournal = e.statJournal ?? u, this.claimState = e.claimState, this.announced = e.claimState?.announced ?? e.announcedEventIds ?? new Set, this.leasedIds = e.claimState?.leasedIds ?? new Set, this.cursors = new Map, this.warn = e.warn ?? (()=>{});
    }
    async peek() {
        const e = this.claimState ?? {
            chain: this.peekChain
        }, t = e.chain.then(()=>this.peekUnlocked()), r = t.then(()=>{}, ()=>{});
        return e.chain = r, void 0 === this.claimState && (this.peekChain = r), t;
    }
    async peekUnlocked() {
        const e = await this.collectRefs(), t = new Set(e.map((e)=>e.journalPath));
        for (const t of e){
            const e = await this.drainOne(t.journalPath);
            for (const r of e)this.leased.has(r.event_id) || this.leasedIds.has(r.event_id) || this.pending.set(r.event_id, {
                event: r,
                journalPath: t.journalPath
            });
        }
        for (const e of [
            ...this.pending.keys()
        ])(this.announced.has(e) || this.leasedIds.has(e)) && this.pending.delete(e);
        const r = this.quotaNoticesEnabled(), n = [];
        for (const [e, s] of [
            ...this.pending
        ])t.has(s.journalPath) && (r || "quota_exceeded" !== s.event.kind) && (this.pending.delete(e), this.leased.set(e, s), this.leasedIds.add(e), n.push(s));
        if (0 === n.length) return {
            carriers: [],
            eventIds: []
        };
        const s = n.map((e)=>e.event);
        return {
            carriers: l(s),
            eventIds: s.map((e)=>e.event_id)
        };
    }
    ack(e) {
        const t = e.filter((e)=>this.leased.has(e));
        (0, i._3)(this.announced, t);
        for (const e of t)this.pending.delete(e), this.leased.delete(e), this.leasedIds.delete(e);
    }
    release(e) {
        for (const t of e){
            const e = this.leased.get(t);
            void 0 !== e && (this.leasedIds.delete(t), this.announced.has(t) || this.pending.set(t, e), this.leased.delete(t));
        }
    }
    releaseAllLeased() {
        this.release([
            ...this.leased.keys()
        ]);
    }
    ackAllLeased() {
        this.ack([
            ...this.leased.keys()
        ]);
    }
    async drain() {
        const e = await this.peek();
        return this.ack(e.eventIds), e.carriers;
    }
    async collectRefs() {
        const e = new Set, t = [];
        for (const r of this.sources){
            let n;
            try {
                n = await r.listJournalRefs();
            } catch (e) {
                this.warn("conflict notice source failed", e);
                continue;
            }
            for (const r of n)0 === r.journalPath.length || e.has(r.journalPath) || (e.add(r.journalPath), t.push(r));
        }
        return t;
    }
    async drainOne(e) {
        const t = this.cursors.get(e), r = await this.statJournal(e);
        if (void 0 === r) return [];
        const n = this.lastStat.get(e);
        if (void 0 !== t && void 0 !== n && n.mtimeMs === r.mtimeMs && n.size === r.size) return [];
        let s;
        try {
            s = await (0, o.Ob)({
                journalPath: e,
                cursor: t,
                sessionStartedAtMs: this.sessionStartedAtMs,
                applyResolvedFilter: !0
            });
        } catch (e) {
            return this.warn("conflict journal read failed", e), [];
        }
        const { deliverableEvents: i, nextCursor: a, stoppedAtForeignLease: c } = (0, o.$U)({
            events: s.events,
            fullNextCursor: s.nextCursor,
            previousCursor: t,
            announced: this.announced,
            leasedIds: this.leasedIds,
            isOwnLease: (e)=>this.leased.has(e)
        });
        return this.cursors.set(e, a), c || this.lastStat.set(e, r), i;
    }
}
