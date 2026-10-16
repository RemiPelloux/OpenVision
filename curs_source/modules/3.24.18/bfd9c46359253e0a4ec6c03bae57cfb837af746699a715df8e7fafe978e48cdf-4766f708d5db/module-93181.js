"use strict";
require.d(exports, {
    $U: ()=>b,
    Bw: ()=>T,
    EG: ()=>B,
    Gm: ()=>J,
    KD: ()=>U,
    Mi: ()=>w,
    O9: ()=>x,
    Ob: ()=>P,
    Tj: ()=>$,
    Y: ()=>I,
    Zz: ()=>L,
    aJ: ()=>F,
    hJ: ()=>c,
    kL: ()=>v,
    pc: ()=>E,
    tN: ()=>C,
    y5: ()=>S
});
var n = require("./module-77598.js"), s = require("./module-73024.js"), o = require("./module-51455.js"), i = require("./module-76760.js"), a = require("./module-83737.js");
const c = 4194304, l = 384;
function u(e) {
    return (t, r)=>{
        e(t, function(e) {
            if (!(e instanceof Error)) return "string" == typeof e ? "<redacted>" : e;
            const t = e.code, r = new Error(void 0 !== t ? `${e.name}: ${t}` : e.name);
            return r.name = e.name, void 0 !== t && (r.code = t), r;
        }(r));
    };
}
const d = s.constants.O_NOFOLLOW;
function p() {
    return Date.now();
}
function m(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
function h(e) {
    return "string" == typeof e ? e : void 0;
}
function f(e) {
    return "number" == typeof e && Number.isFinite(e) ? e : void 0;
}
function g(e) {
    return "boolean" == typeof e ? e : void 0;
}
const y = new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded",
    "gap"
]);
function w(e) {
    if (!m(e)) return;
    const t = h(e.event_id), r = h(e.journal_epoch), n = h(e.kind), s = f(e.seq), o = f(e.ts_ms), i = f(e.v);
    if (void 0 === t || void 0 === r || void 0 === n || void 0 === s || void 0 === o || void 0 === i || !y.has(n)) return;
    const a = n, c = "local_sync" === h(e.source) ? "local_sync" : void 0, l = g(e.remote_only);
    return {
        v: i,
        event_id: t,
        journal_epoch: r,
        seq: s,
        ts_ms: o,
        kind: a,
        store_id: h(e.store_id),
        original_rel_path: h(e.original_rel_path),
        conflict_rel_path: h(e.conflict_rel_path),
        original_abs_path: h(e.original_abs_path),
        conflict_abs_path: h(e.conflict_abs_path),
        preserved_bytes: f(e.preserved_bytes),
        scope_kind: h(e.scope_kind),
        limit_bytes: f(e.limit_bytes),
        usage_bytes: f(e.usage_bytes),
        ...void 0 !== c ? {
            source: c
        } : {},
        ...!0 === l ? {
            remote_only: !0
        } : {}
    };
}
function v(e) {
    const t = [];
    for (const r of e.split("\n")){
        const e = r.trim();
        if (0 === e.length) continue;
        let n;
        try {
            n = JSON.parse(e);
        } catch  {
            continue;
        }
        const s = w(n);
        void 0 !== s && t.push(s);
    }
    return t;
}
function _(e) {
    return {
        journalEpoch: e.journal_epoch,
        seq: e.seq,
        lastEventId: e.event_id
    };
}
function b(e) {
    const { events: t, fullNextCursor: r, previousCursor: n, announced: s, leasedIds: o, isOwnLease: i, continuePastForeignLeases: a = !1 } = e;
    if (0 === t.length) return {
        deliverableEvents: [],
        nextCursor: r,
        stoppedAtForeignLease: !1
    };
    const c = [];
    let l, u = !1;
    for (const e of t)if (s.has(e.event_id)) l = e;
    else {
        if (o.has(e.event_id) && !i(e.event_id)) {
            if (a) continue;
            u = !0;
            break;
        }
        l = e, c.push(e);
    }
    if (!u) return {
        deliverableEvents: c,
        nextCursor: r,
        stoppedAtForeignLease: !1
    };
    return {
        deliverableEvents: c,
        nextCursor: void 0 !== l ? _(l) : n ?? {
            journalEpoch: "",
            seq: 0,
            lastEventId: ""
        },
        stoppedAtForeignLease: !0
    };
}
function S(e, t) {
    const r = t.journalEpoch.length > 0;
    let n = -1;
    if (r) for(let r = e.length - 1; r >= 0; r--){
        const s = e[r];
        if (void 0 !== s && (s.event_id === t.lastEventId || s.journal_epoch === t.journalEpoch && s.seq <= t.seq)) {
            n = r;
            break;
        }
    }
    const s = r ? e.slice(n + 1) : [
        ...e
    ], o = s.some((e)=>"gap" === e.kind) || r && -1 === n && e.length > 0, i = new Set, a = [];
    for (const e of s)"gap" !== e.kind && (i.has(e.event_id) || (i.add(e.event_id), a.push(e)));
    const c = s[s.length - 1];
    return {
        events: a,
        nextCursor: void 0 !== c ? _(c) : t,
        gap: o
    };
}
function k(e, t, r) {
    return e ? t > 0 || 0 === r.preserved_bytes : !0 === r.remote_only;
}
async function x(e) {
    const t = e.conflict_abs_path;
    if (void 0 === t || 0 === t.length) return !0;
    try {
        const r = await o.lstat(t);
        return k(r.isFile(), r.size, e);
    } catch (t) {
        return !G(t) || !0 === e.remote_only;
    }
}
function E(e) {
    const t = e.conflict_abs_path;
    if (void 0 === t || 0 === t.length) return !0;
    try {
        const r = s.lstatSync(t);
        return k(r.isFile(), r.size, e);
    } catch (t) {
        return !G(t) || !0 === e.remote_only;
    }
}
async function I(e) {
    return x({
        conflict_abs_path: e
    });
}
function T(e) {
    return E({
        conflict_abs_path: e
    });
}
function C(e, t) {
    return e.filter((e)=>e.ts_ms >= t);
}
async function P(e) {
    const t = e.cursor ?? {
        journalEpoch: "",
        seq: 0,
        lastEventId: ""
    };
    let r;
    try {
        r = await async function(e) {
            return N(e);
        }(e.journalPath);
    } catch (e) {
        if ("object" == typeof e && null !== e && "code" in e && "ENOENT" === e.code) return {
            events: [],
            nextCursor: t,
            gap: !1
        };
        throw e;
    }
    let n = S(v(r), t);
    if (void 0 !== e.sessionStartedAtMs && (n = {
        ...n,
        events: C(n.events, e.sessionStartedAtMs)
    }), !0 === e.applyResolvedFilter) {
        const e = [];
        for (const t of n.events)await x(t) && e.push(t);
        n = {
            ...n,
            events: e
        };
    }
    return n;
}
function A(e) {
    const t = {
        v: e.v,
        event_id: e.event_id,
        journal_epoch: e.journal_epoch,
        seq: e.seq,
        ts_ms: e.ts_ms,
        kind: e.kind
    };
    return void 0 !== e.store_id && (t.store_id = e.store_id), void 0 !== e.original_rel_path && (t.original_rel_path = e.original_rel_path), void 0 !== e.conflict_rel_path && (t.conflict_rel_path = e.conflict_rel_path), void 0 !== e.original_abs_path && (t.original_abs_path = e.original_abs_path), void 0 !== e.conflict_abs_path && (t.conflict_abs_path = e.conflict_abs_path), void 0 !== e.scope_kind && (t.scope_kind = e.scope_kind), void 0 !== e.limit_bytes && (t.limit_bytes = e.limit_bytes), void 0 !== e.usage_bytes && (t.usage_bytes = e.usage_bytes), void 0 !== e.preserved_bytes && (t.preserved_bytes = e.preserved_bytes), void 0 !== e.source && (t.source = e.source), !0 === e.remote_only && (t.remote_only = !0), `${JSON.stringify(t)}\n`;
}
function R(e) {
    if (void 0 !== e.conflictRelPath) return `${e.storeId}\0${e.conflictRelPath}`;
    if ("truncate_conflict_failed" === e.kind) return `${e.storeId}\0\0truncate:${e.originalRelPath}`;
    if ("conflict_fallback_failed" === e.kind) return `${e.storeId}\0\0fallback:${e.originalRelPath}`;
    if ("quota_exceeded" === e.kind) {
        const t = e.scopeKind ?? "store";
        return `${e.storeId}\0\0quota:${t}`;
    }
}
function M(e) {
    if (void 0 !== e.store_id) {
        if (void 0 !== e.conflict_rel_path) return `${e.store_id}\0${e.conflict_rel_path}`;
        if ("quota_exceeded" === e.kind) {
            const t = e.scope_kind ?? "store";
            return `${e.store_id}\0\0quota:${t}`;
        }
        if (void 0 !== e.original_rel_path) return "truncate_conflict_failed" === e.kind ? `${e.store_id}\0\0truncate:${e.original_rel_path}` : "conflict_fallback_failed" === e.kind ? `${e.store_id}\0\0fallback:${e.original_rel_path}` : void 0;
    }
}
function J(e) {
    return [
        e.storeId,
        e.kind,
        e.originalRelPath,
        e.conflictRelPath ?? ""
    ].join("\0");
}
const O = new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded"
]);
function B(e) {
    if (!m(e)) return;
    const t = h(e.kind), r = h(e.storeId), n = h(e.originalRelPath), s = h(e.originalAbsPath);
    if (void 0 === t || void 0 === r || void 0 === n || void 0 === s || !O.has(t)) return;
    const o = h(e.source), i = g(e.remoteOnly);
    return {
        kind: t,
        storeId: r,
        originalRelPath: n,
        conflictRelPath: h(e.conflictRelPath),
        originalAbsPath: s,
        conflictAbsPath: h(e.conflictAbsPath),
        preservedBytes: f(e.preservedBytes),
        scopeKind: h(e.scopeKind),
        limitBytes: f(e.limitBytes),
        usageBytes: f(e.usageBytes),
        ..."local_sync" === o ? {
            source: "local_sync"
        } : {},
        ...!0 === i ? {
            remoteOnly: !0
        } : {}
    };
}
function D(e) {
    const t = {
        kind: e.kind,
        storeId: e.storeId,
        originalRelPath: e.originalRelPath,
        originalAbsPath: e.originalAbsPath
    };
    return void 0 !== e.conflictRelPath && (t.conflictRelPath = e.conflictRelPath), void 0 !== e.conflictAbsPath && (t.conflictAbsPath = e.conflictAbsPath), void 0 !== e.preservedBytes && (t.preservedBytes = e.preservedBytes), void 0 !== e.scopeKind && (t.scopeKind = e.scopeKind), void 0 !== e.limitBytes && (t.limitBytes = e.limitBytes), void 0 !== e.usageBytes && (t.usageBytes = e.usageBytes), void 0 !== e.source && (t.source = e.source), !0 === e.remoteOnly && (t.remoteOnly = !0), `${JSON.stringify(t)}\n`;
}
function q(e, t) {
    const { baseFlags: r, mode: n, nofollowFlag: o } = t;
    if ("number" == typeof o) return s.openSync(e, r | o, n);
    let i;
    try {
        i = s.lstatSync(e);
    } catch (e) {
        if (!G(e)) throw e;
    }
    if (!0 === i?.isSymbolicLink()) {
        const t = new Error(`refusing to open symlinked journal path: ${e}`);
        throw t.code = "ELOOP", t;
    }
    return s.openSync(e, r, n);
}
function N(e) {
    const t = q(e, {
        baseFlags: s.constants.O_RDONLY,
        mode: l,
        nofollowFlag: d
    });
    try {
        return s.readFileSync(t, "utf8");
    } finally{
        s.closeSync(t);
    }
}
class F {
    constructor(e, t){
        this.nextSeq = 1, this.appendFailures = 0, this.rotations = 0, this.emittedConflicts = new Set, this.path = e, this.epoch = (0, n.randomUUID)(), this.warn = u(t?.warn ?? ((e, t)=>{})), this.hydrateDedupFromDisk();
    }
    hydrateDedupFromDisk() {
        const e = this.readDedupKeysFromDisk();
        void 0 !== e && this.replaceDedupKeys(e);
    }
    readDedupKeysFromDisk() {
        let e;
        try {
            e = N(this.path);
        } catch (e) {
            return G(e) ? [] : void this.warn("conflict journal dedup hydrate failed", e);
        }
        const t = [];
        for (const r of v(e)){
            const e = M(r);
            void 0 !== e && t.push(e);
        }
        return t;
    }
    replaceDedupKeys(e) {
        this.emittedConflicts.clear();
        for (const t of e)this.emittedConflicts.size >= 65536 && this.emittedConflicts.clear(), this.emittedConflicts.add(t);
    }
    refreshDedupFromDisk() {
        const e = this.readDedupKeysFromDisk();
        return void 0 !== e && (this.replaceDedupKeys(e), !0);
    }
    appendFailureCount() {
        return this.appendFailures;
    }
    rotationCount() {
        return this.rotations;
    }
    wouldDedup(e) {
        const t = R(e);
        return void 0 !== t && this.emittedConflicts.has(t);
    }
    emit(e) {
        const t = R(e);
        if (void 0 !== t && this.emittedConflicts.has(t)) return !0;
        try {
            return this.appendEmit(e, t), !0;
        } catch (e) {
            return this.appendFailures += 1, this.warn(`conflict journal append failed; sync round still succeeded (failures=${this.appendFailures})`, e), !1;
        }
    }
    appendEmit(e, t) {
        if (void 0 !== t && this.emittedConflicts.has(t)) return;
        const r = i.dirname(this.path);
        r.length > 0 && (0, a.Ew)(r), this.maybeRotateLocked();
        const s = this.nextSeq, o = {
            v: 1,
            event_id: (0, n.randomUUID)(),
            journal_epoch: this.epoch,
            seq: s,
            ts_ms: p(),
            kind: e.kind,
            store_id: e.storeId,
            original_rel_path: e.originalRelPath,
            conflict_rel_path: e.conflictRelPath,
            original_abs_path: e.originalAbsPath,
            conflict_abs_path: e.conflictAbsPath,
            preserved_bytes: e.preservedBytes,
            scope_kind: e.scopeKind,
            limit_bytes: e.limitBytes,
            usage_bytes: e.usageBytes,
            ...void 0 !== e.source ? {
                source: e.source
            } : {},
            ...!0 === e.remoteOnly ? {
                remote_only: !0
            } : {}
        };
        this.writeJsonlLine(o), this.nextSeq = s + 1, void 0 !== t && (this.emittedConflicts.size >= 65536 && this.emittedConflicts.clear(), this.emittedConflicts.add(t));
    }
    writeJsonlLine(e) {
        const t = A(e), r = q(this.path, {
            baseFlags: s.constants.O_WRONLY | s.constants.O_CREAT | s.constants.O_APPEND,
            mode: l,
            nofollowFlag: d
        });
        try {
            try {
                s.fchmodSync(r, l);
            } catch  {}
            s.writeSync(r, t);
            try {
                s.fsyncSync(r);
            } catch  {}
        } finally{
            s.closeSync(r);
        }
    }
    maybeRotateLocked() {
        let e;
        try {
            e = s.statSync(this.path).size;
        } catch (e) {
            if ("object" == typeof e && null !== e && "code" in e && "ENOENT" === e.code) return;
            return void this.warn("conflict journal metadata failed; skipping rotate", e);
        }
        if (!(e < c)) try {
            this.forceGapRewriteLocked();
        } catch (e) {
            this.warn("conflict journal rotate rewrite failed; appending onto oversized journal", e);
        }
    }
    forceGapRewriteLocked() {
        const e = this.nextSeq, t = A({
            v: 1,
            event_id: (0, n.randomUUID)(),
            journal_epoch: this.epoch,
            seq: e,
            ts_ms: p(),
            kind: "gap"
        }), r = `${this.path}.rotate-tmp`;
        try {
            s.unlinkSync(r);
        } catch (e) {
            if (!G(e)) throw e;
        }
        const o = q(r, {
            baseFlags: s.constants.O_WRONLY | s.constants.O_CREAT | s.constants.O_EXCL,
            mode: l,
            nofollowFlag: d
        });
        try {
            try {
                s.fchmodSync(o, l);
            } catch  {}
            s.writeSync(o, t);
            try {
                s.fsyncSync(o);
            } catch  {}
        } finally{
            s.closeSync(o);
        }
        s.renameSync(r, this.path), this.nextSeq = e + 1, this.emittedConflicts.clear(), this.rotations += 1;
    }
}
function U(e) {
    return i.join(i.dirname(i.resolve(e)), a.kR, a.Ai);
}
function L(e) {
    return i.join(i.dirname(i.resolve(e)), a.kR, a.Wi);
}
class $ {
    constructor(e, t){
        this.pending = [], this.keys = new Set, this.persistFailures = 0, this.dirty = !1, this.loadFailed = !1, this.path = e, this.warn = u(t?.warn ?? ((e, t)=>{}));
        const r = this.tryReadDisk();
        void 0 !== r ? (this.pending = r.pending, this.keys = r.keys) : this.loadFailed = !0;
    }
    size() {
        return this.pending.length;
    }
    isEmpty() {
        return 0 === this.pending.length;
    }
    list() {
        return [
            ...this.pending
        ];
    }
    persistFailureCount() {
        return this.persistFailures;
    }
    reload() {
        const e = this.tryReadDisk();
        if (void 0 === e) return;
        if (this.loadFailed = !1, !this.dirty) return this.pending = e.pending, void (this.keys = e.keys);
        const t = new Map;
        for (const r of e.pending)t.set(J(r), r);
        for (const e of this.pending)t.set(J(e), e);
        const r = [
            ...t.values()
        ];
        this.pending = r, this.keys = new Set(t.keys()), this.dirty = !this.persistPending(r);
    }
    enqueue(e) {
        const t = J(e);
        this.keys.has(t) ? (this.dirty || this.loadFailed) && (this.dirty = !this.persistPending(this.pending)) : (this.keys.add(t), this.pending.push(e), this.dirty = !this.persistPending(this.pending));
    }
    replaceAll(e) {
        const t = [], r = new Set;
        for (const n of e){
            const e = J(n);
            r.has(e) || (r.add(e), t.push(n));
        }
        const n = this.loadFailed;
        this.persistPending(t) && (n || (this.pending = t, this.keys = r), this.dirty = !1);
    }
    tryReadDisk() {
        let e;
        try {
            e = N(this.path);
        } catch (e) {
            return G(e) ? {
                pending: [],
                keys: new Set
            } : void this.warn("conflict pending journal load failed", e);
        }
        const t = [], r = new Set;
        for (const n of e.split("\n")){
            const e = n.trim();
            if (0 === e.length) continue;
            let s;
            try {
                s = JSON.parse(e);
            } catch  {
                continue;
            }
            const o = B(s);
            if (void 0 === o) continue;
            const i = J(o);
            r.has(i) || (r.add(i), t.push(o));
        }
        return {
            pending: t,
            keys: r
        };
    }
    persistPending(e) {
        if (this.loadFailed) {
            const t = this.tryReadDisk();
            if (void 0 === t) return this.persistFailures += 1, this.warn(`conflict pending journal persist skipped; sidecar still unreadable (failures=${this.persistFailures})`, void 0), !1;
            this.loadFailed = !1;
            const r = new Map;
            for (const e of t.pending)r.set(J(e), e);
            for (const t of e)r.set(J(t), t);
            const n = [
                ...r.values()
            ];
            return this.pending = n, this.keys = new Set(r.keys()), this.persistPending(n);
        }
        try {
            if (0 === e.length) return this.removeFile(), !0;
            const t = i.dirname(this.path);
            t.length > 0 && (0, a.Ew)(t);
            const r = e.map(D).join("");
            return this.atomicRewrite(r), !0;
        } catch (e) {
            return this.persistFailures += 1, this.warn(`conflict pending journal persist failed (failures=${this.persistFailures})`, e), !1;
        }
    }
    atomicRewrite(e) {
        const t = `${this.path}.pending-tmp`;
        try {
            s.unlinkSync(t);
        } catch (e) {
            if (!G(e)) throw e;
        }
        const r = q(t, {
            baseFlags: s.constants.O_WRONLY | s.constants.O_CREAT | s.constants.O_EXCL,
            mode: j,
            nofollowFlag: d
        });
        try {
            try {
                s.fchmodSync(r, j);
            } catch  {}
            s.writeSync(r, e);
            try {
                s.fsyncSync(r);
            } catch  {}
        } finally{
            s.closeSync(r);
        }
        s.renameSync(t, this.path);
    }
    removeFile() {
        try {
            s.unlinkSync(this.path);
        } catch (e) {
            if (!G(e)) throw e;
        }
    }
}
const j = 384;
function G(e) {
    return "object" == typeof e && null !== e && "code" in e && "ENOENT" === e.code;
}
