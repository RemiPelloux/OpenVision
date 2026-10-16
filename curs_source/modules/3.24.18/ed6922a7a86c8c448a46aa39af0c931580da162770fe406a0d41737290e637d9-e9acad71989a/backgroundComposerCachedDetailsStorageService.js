import { Kl, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn } from "./async.js";
import { LWt, Nkt, hm } from "./background_composer_pb.js";
import { uss } from "./binary-encoding.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { bi } from "./protobuf.js";
import { mn, vn, zs } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Wle, hu, y5 } from "./utils_pb.js";
function qr_(e) {
    const t = [];
    let n = 0;
    const i = new uss(e);
    for(; i.pos < i.len;){
        const o = i.pos, [a, c] = i.tag();
        i.skip(c, a), a !== mPh && (t.push([
            o,
            i.pos
        ]), n += i.pos - o);
    }
    if (n === e.byteLength) return e;
    const r = new Uint8Array(n);
    let s = 0;
    for (const [o, a] of t)r.set(e.subarray(o, a), s), s += a - o;
    return r;
}
var Oer, Qjt, pPh, mPh, jtt;
export { Oer, Qjt, jtt, mPh, pPh, qr_ };
var __wakaru_Pxo_initialized = false;
export function Pxo() {
if (__wakaru_Pxo_initialized) return;
__wakaru_Pxo_initialized = true;
"use strict";
x(), Ze(), Se(), Pn(), Vn(), yv(), bn(), hu(), hm(), bi(), Oer = vn("backgroundComposerCachedDetailsStorageService"), Qjt = "bcCachedDetails", pPh = 10, mPh = LWt.fields.findJsonName("detailedDiff")?.no, jtt = class extends we {
    constructor(e){
        super(), this._storageService = e, this._storeGenerations = new Map;
    }
    _bumpStoreGeneration(e) {
        const t = (this._storeGenerations.get(e) ?? 0) + 1;
        return this._storeGenerations.set(e, t), t;
    }
    async storeCachedDetails(e, t) {
        if (!e) throw new Error("[backgroundComposer] bcId is undefined");
        const n = this._bumpStoreGeneration(e);
        try {
            const i = new LWt({
                diffChangesHash: t.diffChangesHash ?? "",
                detailedDiff: t.detailedDiff ? new Wle(t.detailedDiff) : void 0,
                bc: t.bc
            }), r = await this._encodeInSlices(i);
            if (await this._pendingClearAll, this._storeGenerations.get(e) !== n) return;
            await this._storageService.cursorDiskKVSetBinary(`${Qjt}:${e}`, r);
        } catch (i) {
            console.error("[backgroundComposer] Failed to store cached details as binary, skipping cache write", i);
        }
    }
    async _encodeInSlices(e) {
        const t = e.detailedDiff, n = t?.diff, i = n?.diffs ?? [];
        if (!t || !n || i.length <= 1) return e.toBinary();
        const r = [];
        let s = 0;
        const o = (p)=>{
            r.push(p), s += p.byteLength;
        }, a = new LWt;
        a.diffChangesHash = e.diffChangesHash, a.bc = e.bc, a.detailedDiff = new Wle(t), a.detailedDiff.diff = new y5({
            diffType: n.diffType,
            fileContentsOmitted: n.fileContentsOmitted
        }), o(a.toBinary());
        const c = new LWt;
        c.detailedDiff = new Wle, c.detailedDiff.diff = new y5;
        let l = performance.now();
        for (const p of i)performance.now() - l > pPh && (await Kl(0), l = performance.now()), c.detailedDiff.diff.diffs = [
            p
        ], o(c.toBinary());
        const u = new Uint8Array(s);
        let h = 0;
        for (const p of r)u.set(p, h), h += p.byteLength;
        return u;
    }
    async getCachedDetails(e, t) {
        if (!e) throw new Error("[backgroundComposer] bcId is undefined");
        try {
            const n = await this._storageService.cursorDiskKVGetBinary(`${Qjt}:${e}`);
            if (n) return this._readBinaryFormat(n, t?.skipDetailedDiff);
        } catch (n) {
            console.error("[backgroundComposer] Failed to read binary cached details", n);
        }
        try {
            const n = await this._storageService.cursorDiskKVGet(`${Qjt}:${e}`);
            if (n) return this._readLegacyJsonFormat(n, t?.skipDetailedDiff);
        } catch (n) {
            console.error("[backgroundComposer] Failed to read legacy cached details", n);
        }
    }
    _readBinaryFormat(e, t) {
        const n = LWt.fromBinary(t ? qr_(e) : e);
        return {
            bc: n.bc,
            detailedDiff: n.detailedDiff ? {
                ...n.detailedDiff
            } : void 0,
            diffChangesHash: n.diffChangesHash || void 0
        };
    }
    _readLegacyJsonFormat(e, t) {
        const n = JSON.parse(e), i = n.bc ? new Nkt().fromJsonString(n.bc, {
            ignoreUnknownFields: !0
        }) : void 0, r = n.detailedDiff && !t ? {
            ...Wle.fromJsonString(n.detailedDiff, {
                ignoreUnknownFields: !0
            })
        } : void 0;
        return {
            ...n,
            bc: i,
            detailedDiff: r
        };
    }
    async deleteCachedDetails(e) {
        if (!e) throw new Error("[backgroundComposer] bcId is undefined");
        this._bumpStoreGeneration(e), await this._storageService.cursorDiskKVSet(`${Qjt}:${e}`, void 0);
    }
    async clearAll() {
        for (const t of this._storeGenerations.keys())this._bumpStoreGeneration(t);
        const e = this._storageService.cursorDiskKVClearPrefix(`${Qjt}:`).catch((t)=>{
            console.error("[backgroundComposer] Failed to clear cached details", t);
        });
        this._pendingClearAll = e;
        try {
            await e;
        } finally{
            this._pendingClearAll === e && (this._pendingClearAll = void 0);
        }
    }
}, ie([
    zs("BackgroundComposerCachedDetailsStorageService.storeCachedDetails")
], jtt.prototype, "storeCachedDetails", null), ie([
    zs("BackgroundComposerCachedDetailsStorageService.getCachedDetails")
], jtt.prototype, "getCachedDetails", null), ie([
    zs("BackgroundComposerCachedDetailsStorageService.deleteCachedDetails")
], jtt.prototype, "deleteCachedDetails", null), ie([
    zs("BackgroundComposerCachedDetailsStorageService.clearAll")
], jtt.prototype, "clearAll", null), jtt = ie([
    C(0, yn)
], jtt), mn(Oer, jtt, 2);

}
