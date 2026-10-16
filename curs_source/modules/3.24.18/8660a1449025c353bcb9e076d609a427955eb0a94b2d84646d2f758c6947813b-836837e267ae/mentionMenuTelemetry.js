import { OMf, dvw, s5l } from "./BA.js";
import { d_ } from "./index_205.js";
import { DMf, r5l } from "./menuAccessTelemetry.js";
import { E } from "./tslib.es6.js";
var FMf, BMf, UMf, jMf;
export { BMf, FMf, UMf, jMf };
var __wakaru_o5l_initialized = false;
export function o5l() {
if (__wakaru_o5l_initialized) return;
__wakaru_o5l_initialized = true;
"use strict";
E(), d_(), DMf(), FMf = "mention-menu-alpha-v2", BMf = 20, UMf = new Set([
    "mode",
    "action",
    "branch",
    "browser",
    "mcp"
]), jMf = class {
    constructor(t, e){
        this.emit = t, this.session = null, this.accessTracker = new r5l((n)=>this.emitSafely(n), e);
    }
    handleOpenChange(t, e) {
        try {
            this.handleOpenChangeUnsafe(t, e);
        } catch  {
            this.abortSession();
        }
    }
    update(t) {
        try {
            this.updateUnsafe(t);
        } catch  {
            this.abortSession();
        }
    }
    notifySelect(t, e, n) {
        try {
            this.notifySelectUnsafe(t, e, n);
        } catch  {
            this.abortSession();
        }
    }
    dispose() {
        try {
            this.endSession();
        } catch  {
            this.abortSession();
        }
    }
    handleOpenChangeUnsafe(t, e) {
        if (!t) {
            this.endSession();
            return;
        }
        if (this.session !== null) return;
        const n = OMf(e), i = {
            sessionId: dvw(),
            queryChangeCount: 0,
            lastRawQuery: e.query,
            lastRanked: n,
            lastMode: e.mode,
            openedEmitted: !1,
            typedResult: {
                kind: "not_typed"
            }
        };
        this.session = i, this.accessTracker.begin(), this.accessTracker.observeSources(n.availableSources, n.visibleItemCount > 0), this.observeTypedResult(i), this.maybeEmitOpened();
    }
    updateUnsafe(t) {
        const e = this.session;
        e !== null && (t.query !== e.lastRawQuery && (e.lastRawQuery = t.query, e.queryChangeCount++), e.lastRanked = OMf(t), e.lastMode = t.mode, this.accessTracker.observeSources(e.lastRanked.availableSources, e.lastRanked.visibleItemCount > 0), this.observeTypedResult(e), this.maybeEmitOpened());
    }
    observeTypedResult(t) {
        const e = t.typedResult;
        if (e.kind === "emitted" || t.lastRanked.queryLength === 0) return;
        const n = this.accessTracker.elapsedMs(), i = e.kind === "waiting" ? e.typedAtMs : n, r = [
            ...t.lastRanked.availableSources
        ].find(s5l);
        if (r === void 0) {
            t.typedResult = {
                kind: "waiting",
                typedAtMs: i
            };
            return;
        }
        t.typedResult = {
            kind: "emitted"
        }, this.emitSafely({
            kind: "typed_result",
            outcome: "result",
            source: r,
            timeSinceTypedMs: n - i
        });
    }
    notifySelectUnsafe(t, e, n) {
        const i = this.session;
        if (i === null || this.accessTracker.isSelected) return;
        if (this.updateUnsafe(n), !i.openedEmitted) {
            this.accessTracker.select();
            return;
        }
        this.accessTracker.select();
        const r = i.lastRanked;
        this.emitSafely({
            kind: "selected",
            ...this.sharedFields(i),
            itemType: t.type,
            rank: r.rankByItemId.get(t.id) ?? -1,
            queryLength: r.queryLength,
            queryChangeCount: i.queryChangeCount,
            timeToSelectMs: this.accessTracker.elapsedMs(),
            selectionMethod: e
        });
    }
    maybeEmitOpened() {
        const t = this.session;
        t === null || t.openedEmitted || t.lastRanked.visibleItemCount !== 0 && (t.openedEmitted = !0, this.emitSafely({
            kind: "opened",
            ...this.sharedFields(t)
        }));
    }
    endSession() {
        const t = this.session;
        if (this.session = null, t === null) return;
        const e = this.accessTracker.elapsedMs();
        if (t.typedResult.kind === "waiting" && this.emitSafely({
            kind: "typed_result",
            outcome: "no_result",
            timeSinceTypedMs: e - t.typedResult.typedAtMs
        }), t.openedEmitted && !this.accessTracker.isSelected) {
            const n = JSON.stringify([
                ...this.accessTracker.availableSources
            ]);
            this.emitSafely({
                kind: "abandoned",
                ...this.sharedFields(t),
                queryLength: t.lastRanked.queryLength,
                queryChangeCount: t.queryChangeCount,
                openDurationMs: e,
                availableSourcesJson: n
            });
        }
        this.accessTracker.end();
    }
    sharedFields(t) {
        const e = t.lastRanked;
        return {
            sessionId: t.sessionId,
            rankerVersion: FMf,
            scope: t.lastMode,
            itemCount: e.itemCount,
            visibleItemCount: e.visibleItemCount,
            visibleItemTypesJson: JSON.stringify(e.visibleItems)
        };
    }
    abortSession() {
        this.session = null, this.accessTracker.abort();
    }
    emitSafely(t) {
        try {
            this.emit(t);
        } catch  {}
    }
};

}
