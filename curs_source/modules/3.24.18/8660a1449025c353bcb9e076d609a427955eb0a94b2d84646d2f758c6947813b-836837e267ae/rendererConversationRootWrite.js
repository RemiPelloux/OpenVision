import { hX } from "./index_12.ts";
import { CUa, TUa, wUa } from "./renderer-root-writer-diagnostic.ts";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { w81 } from "./yBp.js";
var mwm, IUa, xUa, gwm, nCt;
export { IUa, gwm, mwm, nCt, xUa };
var __wakaru_fwm_initialized = false;
export function fwm() {
if (__wakaru_fwm_initialized) return;
__wakaru_fwm_initialized = true;
"use strict";
E(), hX(), Xo(), mwm = "renderer.composer.conversation_root_write", IUa = TUa, xUa = 64, gwm = class {
    constructor(t){
        this.writerInstanceId = t, this.stateByComposerId = new Map;
    }
    record(t, e, n) {
        const i = this.state(t), r = n.fields.slice(0, CUa);
        i.pending.push({
            sequence: i.nextSequence++,
            writer: {
                reason: e.reason,
                hostOwnedAtWrite: e.hostOwned,
                fields: r,
                fieldsOmitted: Math.max(0, n.fields.length - r.length)
            }
        }), i.pending.length > xUa && i.pending.splice(0, i.pending.length - xUa);
    }
    seedPersistedRoot(t, e) {
        const n = this.state(t);
        n.persistedRootBlobIdHex ??= e;
    }
    snapshot(t) {
        const e = this.state(t), n = e.nextSequence - 1, i = Math.max(0, n - e.acknowledgedThrough), r = e.pending.filter((s)=>s.sequence <= n).slice(-wUa).map((s)=>s.writer);
        return {
            throughWriterSequence: n,
            previousRendererRootBlobIdHex: e.persistedRootBlobIdHex,
            writers: r,
            writersOmitted: Math.max(0, i - r.length)
        };
    }
    createDiagnostic(t, e, n) {
        const i = t.writers.length === 0 && t.previousRendererRootBlobIdHex !== void 0 && t.previousRendererRootBlobIdHex !== e ? [
            w81()
        ] : t.writers;
        return {
            version: 1,
            ...t.previousRendererRootBlobIdHex === void 0 ? {} : {
                previousRendererRootBlobIdHex: t.previousRendererRootBlobIdHex
            },
            predecessorVerified: !1,
            rendererRootBlobIdHex: e,
            throughWriterSequence: t.throughWriterSequence,
            writers: i,
            writersOmitted: t.writersOmitted,
            writerInstanceId: this.writerInstanceId,
            writtenAtMs: n
        };
    }
    acknowledgePersisted(t, e, n) {
        const i = this.state(t);
        i.acknowledgedThrough = Math.max(i.acknowledgedThrough, e.throughWriterSequence), i.pending = i.pending.filter((r)=>r.sequence > i.acknowledgedThrough), i.persistedRootBlobIdHex = n;
    }
    forget(t) {
        this.stateByComposerId.delete(t);
    }
    state(t) {
        let e = this.stateByComposerId.get(t);
        return e === void 0 && (e = {
            nextSequence: 1,
            acknowledgedThrough: 0,
            persistedRootBlobIdHex: void 0,
            pending: []
        }, this.stateByComposerId.set(t, e)), e;
    }
}, nCt = new gwm(Ai());

}
