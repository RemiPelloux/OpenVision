import { Qe, Wd, st } from "./Iwo.js";
import { aa, bn, jn } from "./SZu.js";
import { sCk } from "./Ycg.js";
import { qn } from "./async.js";
import { TEn, pd, qGt } from "./background_composer_pb.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { hr } from "./protobuf.js";
import { Zi, ki } from "./storage_2.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Hu, jke, xj } from "./utils_pb.js";
var gls, YAn, nSg, iSg, cEt;
export { YAn, cEt, gls, iSg, nSg };
var __wakaru_thl_initialized = false;
export function thl() {
if (__wakaru_thl_initialized) return;
__wakaru_thl_initialized = true;
"use strict";
E(), It(), Qe(), Rn(), Zi(), __(), qn(), Hu(), pd(), hr(), gls = jn("backgroundComposerCachedDetailsStorageService"), YAn = "bcCachedDetails", nSg = 10, iSg = TEn.fields.findJsonName("detailedDiff")?.no, cEt = class extends st {
    constructor(t){
        super(), this._storageService = t, this._storeGenerations = new Map;
    }
    _bumpStoreGeneration(t) {
        const e = (this._storeGenerations.get(t) ?? 0) + 1;
        return this._storeGenerations.set(t, e), e;
    }
    async storeCachedDetails(t, e) {
        if (!t) throw new Error("[backgroundComposer] bcId is undefined");
        const n = this._bumpStoreGeneration(t);
        try {
            const i = new TEn({
                diffChangesHash: e.diffChangesHash ?? "",
                detailedDiff: e.detailedDiff ? new jke(e.detailedDiff) : void 0,
                bc: e.bc
            }), r = await this._encodeInSlices(i);
            if (await this._pendingClearAll, this._storeGenerations.get(t) !== n) return;
            await this._storageService.cursorDiskKVSetBinary(`${YAn}:${t}`, r);
        } catch (i) {
            console.error("[backgroundComposer] Failed to store cached details as binary, skipping cache write", i);
        }
    }
    async _encodeInSlices(t) {
        const e = t.detailedDiff, n = e?.diff, i = n?.diffs ?? [];
        if (!e || !n || i.length <= 1) return t.toBinary();
        const r = [];
        let s = 0;
        const o = (h)=>{
            r.push(h), s += h.byteLength;
        }, a = new TEn;
        a.diffChangesHash = t.diffChangesHash, a.bc = t.bc, a.detailedDiff = new jke(e), a.detailedDiff.diff = new xj({
            diffType: n.diffType,
            fileContentsOmitted: n.fileContentsOmitted
        }), o(a.toBinary());
        const l = new TEn;
        l.detailedDiff = new jke, l.detailedDiff.diff = new xj;
        let c = performance.now();
        for (const h of i)performance.now() - c > nSg && (await Wd(0), c = performance.now()), l.detailedDiff.diff.diffs = [
            h
        ], o(l.toBinary());
        const u = new Uint8Array(s);
        let d = 0;
        for (const h of r)u.set(h, d), d += h.byteLength;
        return u;
    }
    async getCachedDetails(t, e) {
        if (!t) throw new Error("[backgroundComposer] bcId is undefined");
        try {
            const n = await this._storageService.cursorDiskKVGetBinary(`${YAn}:${t}`);
            if (n) return this._readBinaryFormat(n, e?.skipDetailedDiff);
        } catch (n) {
            console.error("[backgroundComposer] Failed to read binary cached details", n);
        }
        try {
            const n = await this._storageService.cursorDiskKVGet(`${YAn}:${t}`);
            if (n) return this._readLegacyJsonFormat(n, e?.skipDetailedDiff);
        } catch (n) {
            console.error("[backgroundComposer] Failed to read legacy cached details", n);
        }
    }
    _readBinaryFormat(t, e) {
        const n = TEn.fromBinary(e ? sCk(t) : t);
        return {
            bc: n.bc,
            detailedDiff: n.detailedDiff ? {
                ...n.detailedDiff
            } : void 0,
            diffChangesHash: n.diffChangesHash || void 0
        };
    }
    _readLegacyJsonFormat(t, e) {
        const n = JSON.parse(t), i = n.bc ? new qGt().fromJsonString(n.bc, {
            ignoreUnknownFields: !0
        }) : void 0, r = n.detailedDiff && !e ? {
            ...jke.fromJsonString(n.detailedDiff, {
                ignoreUnknownFields: !0
            })
        } : void 0;
        return {
            ...n,
            bc: i,
            detailedDiff: r
        };
    }
    async deleteCachedDetails(t) {
        if (!t) throw new Error("[backgroundComposer] bcId is undefined");
        this._bumpStoreGeneration(t), await this._storageService.cursorDiskKVSet(`${YAn}:${t}`, void 0);
    }
    async clearAll() {
        for (const e of this._storeGenerations.keys())this._bumpStoreGeneration(e);
        const t = this._storageService.cursorDiskKVClearPrefix(`${YAn}:`).catch((e)=>{
            console.error("[backgroundComposer] Failed to clear cached details", e);
        });
        this._pendingClearAll = t;
        try {
            await t;
        } finally{
            this._pendingClearAll === t && (this._pendingClearAll = void 0);
        }
    }
}, Re([
    aa("BackgroundComposerCachedDetailsStorageService.storeCachedDetails")
], cEt.prototype, "storeCachedDetails", null), Re([
    aa("BackgroundComposerCachedDetailsStorageService.getCachedDetails")
], cEt.prototype, "getCachedDetails", null), Re([
    aa("BackgroundComposerCachedDetailsStorageService.deleteCachedDetails")
], cEt.prototype, "deleteCachedDetails", null), Re([
    aa("BackgroundComposerCachedDetailsStorageService.clearAll")
], cEt.prototype, "clearAll", null), cEt = Re([
    F(0, ki)
], cEt), bn(gls, cEt, 2);

}
