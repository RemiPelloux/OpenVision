import { T1v } from "./A3u.js";
import { ZW } from "./index_12.ts";
import { coo, loo, uoo } from "./renderer-root-writer-diagnostic.ts";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var jNd, hoo, poo, qNd, HJe;
export { HJe, hoo, jNd, poo, qNd };
var __wakaru_zNd_initialized = false;
export function zNd() {
if (__wakaru_zNd_initialized) return;
__wakaru_zNd_initialized = true;
"use strict";
x(), ZW(), Js(), jNd = "renderer.composer.conversation_root_write", hoo = uoo, poo = 64, qNd = class {
    constructor(e){
        this.writerInstanceId = e, this.stateByComposerId = new Map;
    }
    record(e, t, n) {
        const i = this.state(e), r = n.fields.slice(0, loo);
        i.pending.push({
            sequence: i.nextSequence++,
            writer: {
                reason: t.reason,
                hostOwnedAtWrite: t.hostOwned,
                fields: r,
                fieldsOmitted: Math.max(0, n.fields.length - r.length)
            }
        }), i.pending.length > poo && i.pending.splice(0, i.pending.length - poo);
    }
    seedPersistedRoot(e, t) {
        const n = this.state(e);
        n.persistedRootBlobIdHex ??= t;
    }
    snapshot(e) {
        const t = this.state(e), n = t.nextSequence - 1, i = Math.max(0, n - t.acknowledgedThrough), r = t.pending.filter((s)=>s.sequence <= n).slice(-coo).map((s)=>s.writer);
        return {
            throughWriterSequence: n,
            previousRendererRootBlobIdHex: t.persistedRootBlobIdHex,
            writers: r,
            writersOmitted: Math.max(0, i - r.length)
        };
    }
    createDiagnostic(e, t, n) {
        const i = e.writers.length === 0 && e.previousRendererRootBlobIdHex !== void 0 && e.previousRendererRootBlobIdHex !== t ? [
            T1v()
        ] : e.writers;
        return {
            version: 1,
            ...e.previousRendererRootBlobIdHex === void 0 ? {} : {
                previousRendererRootBlobIdHex: e.previousRendererRootBlobIdHex
            },
            predecessorVerified: !1,
            rendererRootBlobIdHex: t,
            throughWriterSequence: e.throughWriterSequence,
            writers: i,
            writersOmitted: e.writersOmitted,
            writerInstanceId: this.writerInstanceId,
            writtenAtMs: n
        };
    }
    acknowledgePersisted(e, t, n) {
        const i = this.state(e);
        i.acknowledgedThrough = Math.max(i.acknowledgedThrough, t.throughWriterSequence), i.pending = i.pending.filter((r)=>r.sequence > i.acknowledgedThrough), i.persistedRootBlobIdHex = n;
    }
    forget(e) {
        this.stateByComposerId.delete(e);
    }
    state(e) {
        let t = this.stateByComposerId.get(e);
        return t === void 0 && (t = {
            nextSequence: 1,
            acknowledgedThrough: 0,
            persistedRootBlobIdHex: void 0,
            pending: []
        }, this.stateByComposerId.set(e, t)), t;
    }
}, HJe = new qNd(zn());

}
