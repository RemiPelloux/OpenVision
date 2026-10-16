import { Ovw, iDf, nDf } from "./BA.js";
import { kl } from "./browser.ts";
import { d_ } from "./index_205.js";
import { Hst, gFp } from "./ipa.js";
import { DMf, r5l } from "./menuAccessTelemetry.js";
import { E } from "./tslib.es6.js";
var rDf, sDf, oDf;
export { oDf, rDf, sDf };
var __wakaru_aDf_initialized = false;
export function aDf() {
if (__wakaru_aDf_initialized) return;
__wakaru_aDf_initialized = true;
"use strict";
E(), kl(), d_(), DMf(), rDf = "recency-type-alpha-v1", sDf = 20, oDf = class {
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
        const n = iDf(e);
        this.session = {
            sessionId: Ovw(),
            rankerVersion: e.rankerVersion,
            queryChangeCount: 0,
            lastRawQuery: e.query,
            lastRanked: n,
            openedEmitted: !1
        }, this.accessTracker.begin(), this.accessTracker.observeSources(n.availableSources, n.visibleItemCount > 0), this.maybeEmitOpened();
    }
    updateUnsafe(t) {
        const e = this.session;
        e !== null && (t.query !== e.lastRawQuery && (e.lastRawQuery = t.query, e.queryChangeCount++), e.lastRanked = iDf(t), this.accessTracker.observeSources(e.lastRanked.availableSources, e.lastRanked.visibleItemCount > 0), this.maybeEmitOpened());
    }
    notifySelectUnsafe(t, e, n) {
        const i = this.session;
        if (i === null || this.accessTracker.isSelected) return;
        if (this.updateUnsafe(n), !i.openedEmitted) {
            this.accessTracker.select();
            return;
        }
        this.accessTracker.select();
        const r = i.lastRanked, s = t.slashSubject === void 0 ? void 0 : Hst(t.slashSubject), o = s === void 0 ? -1 : r.rankBySubjectKey.get(s), a = t.slashSubject === void 0 ? {
            syncEligible: !1
        } : gFp(t.slashSubject);
        this.emitSafely({
            kind: "selected",
            sessionId: i.sessionId,
            rankerVersion: i.rankerVersion,
            itemId: t.id,
            itemKey: nDf(t.name),
            itemType: t.type ?? "command",
            sectionTitle: t.sectionTitle,
            rank: o ?? -1,
            queryLength: r.queryLength,
            queryChangeCount: i.queryChangeCount,
            timeToSelectMs: this.accessTracker.elapsedMs(),
            selectionMethod: e,
            itemCount: r.itemCount,
            visibleItemCount: r.visibleItemCount,
            visibleItemsJson: JSON.stringify(r.visibleItems),
            ...a
        });
    }
    maybeEmitOpened() {
        const t = this.session;
        if (t === null || t.openedEmitted) return;
        const e = t.lastRanked;
        e.visibleItemCount !== 0 && (t.openedEmitted = !0, this.emitSafely({
            kind: "opened",
            sessionId: t.sessionId,
            rankerVersion: t.rankerVersion,
            itemCount: e.itemCount,
            visibleItemCount: e.visibleItemCount,
            visibleItemsJson: JSON.stringify(e.visibleItems)
        }));
    }
    endSession() {
        const t = this.session;
        if (this.session = null, t === null) return;
        const e = this.accessTracker.elapsedMs();
        if (t.openedEmitted && !this.accessTracker.isSelected) {
            const n = t.lastRanked, i = JSON.stringify([
                ...this.accessTracker.availableSources
            ]);
            this.emitSafely({
                kind: "abandoned",
                sessionId: t.sessionId,
                rankerVersion: t.rankerVersion,
                queryLength: n.queryLength,
                queryChangeCount: t.queryChangeCount,
                openDurationMs: e,
                itemCount: n.itemCount,
                visibleItemCount: n.visibleItemCount,
                visibleItemsJson: JSON.stringify(n.visibleItems),
                availableSourcesJson: i
            });
        }
        this.accessTracker.end();
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
