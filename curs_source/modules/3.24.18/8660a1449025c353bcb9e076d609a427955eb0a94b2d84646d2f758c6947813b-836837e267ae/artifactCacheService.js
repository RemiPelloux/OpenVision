import { Ec, Gt, Qe, da, en, st, tt } from "./Iwo.js";
import { pc } from "./LYd.js";
import { bn, jn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { G6e, c_ } from "./async.cursor.js";
import { qn } from "./async.js";
import { rp } from "./bcIdFromAuthority.js";
import { N0t, zW } from "./composerBlobStore.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AOm, IOm, ROm, TCt, aj1, aqa, ij1, oj1, oqa, rj1, sj1, xOm } from "./yBp.js";
var POm, MOm, YGt, lqa, ZZr, DOm, NOm, LOm, cqa, uqa, QZr, OOm, FOm, BOm, XGt, UOm, JZr, jOm;
export { BOm, DOm, FOm, JZr, LOm, MOm, NOm, OOm, POm, QZr, UOm, XGt, YGt, ZZr, cqa, jOm, lqa, uqa };
var __wakaru_xEn_initialized = false;
export function xEn() {
if (__wakaru_xEn_initialized) return;
__wakaru_xEn_initialized = true;
"use strict";
E(), Gt(), qn(), c_(), Qe(), rp(), It(), Rn(), Zi(), Cm(), Dc(), zW(), POm = "backgroundComposerArtifactCache", MOm = 1, YGt = "artifacts", lqa = 7200 * 60 * 1e3, ZZr = 32 * 1024 * 1024, DOm = 128 * 1024 * 1024, NOm = 512 * 1024, LOm = 3e4, cqa = 4 * 1024 * 1024, uqa = 100 * 1024, QZr = 6e4, OOm = 3e4, FOm = 300 * 1e3, BOm = 8, XGt = jn("artifactCacheService"), UOm = class {
    constructor(t, e){
        this._url = t, this._onDidChange = new tt({
            onDidRemoveLastListener: e
        }), this.onDidChange = this._onDidChange.event;
    }
    get url() {
        return this._url;
    }
    get isObserved() {
        return this._onDidChange.hasListeners();
    }
    update(t) {
        t !== this._url && (this._url = t, this._onDidChange.fire(t));
    }
    dispose() {
        this._onDidChange.dispose();
    }
}, JZr = class extends st {
    constructor(t, e, n){
        super(), this._aiService = t, this._storageService = e, this._structuredLogService = n, this._activeBlobUrls = new Map, this._activeBlobUrlTotalBytes = 0, this._activeBlobUrlMaxTotalBytes = DOm, this._inflightFetches = new Map, this._inflightRevalidations = new Set, this._presignedUrlCache = new Map, this._presignedUrlRefreshTimers = this._register(new da), this._lastFetchedAt = new Map, this._contentVersions = new Map, this._artifactListGenerations = new G6e, this._relistOnNextUse = new Set, this._handles = new Map, this._artifactListCache = new Map, this._artifactListInflight = new Map, this._smallArtifactMemoryCache = new Map, this._smallArtifactMemoryCacheTotalBytes = 0, this._releaseEpochs = new Map;
    }
    async resolveArtifactUrl(t, e, n) {
        const i = TCt(t, e), r = this._activeBlobUrls.get(i);
        if (r) return this._activeBlobUrls.delete(i), this._activeBlobUrls.set(i, r), this._maybeRevalidateInBackground(t, e, i), this._checkFreshnessInBackground(t), this._getOrCreateHandle(i, r.url);
        if (!oqa(e)) {
            if (!pc(t)) {
                const a = await this._resolveFromLocalStore(t, e);
                if (a) return this._setActiveBlobUrl(i, a.blobUrl, a.sizeBytes), this._lastFetchedAt.set(i, Date.now()), this._getOrCreateHandle(i, a.blobUrl);
            }
            return this._resolvePresignedUrlWithCache(t, e, i, n);
        }
        const s = this._inflightFetches.get(i);
        if (s) return s;
        const o = this._resolveWithDiskCache(t, e, i, n);
        return this._inflightFetches.set(i, o), o.finally(()=>{
            this._inflightFetches.delete(i);
        }), o;
    }
    getArtifactBytes(t, e) {
        const n = TCt(t, e), i = this._getSmallArtifactMemoryCache(n);
        if (i) return {
            content: i.content,
            contentType: i.contentType
        };
    }
    async fetchArtifactBytes(t, e, n) {
        const i = Date.now(), r = TCt(t, e), s = oqa(e), o = !0, a = this._releaseFence(t), l = (d, h)=>{
            this._structuredLogService.info("background_composer", "ArtifactCacheService.fetchArtifactBytes completed", {
                agentId: t,
                absolutePath: e,
                cacheKey: r,
                cacheSource: d,
                cacheHit: d !== "network" && d !== "network_error",
                diskCachingEligible: s,
                memoryCachingEligible: o,
                memoryCacheBudgetBytes: cqa,
                memoryCacheMaxItemBytes: uqa,
                memoryCacheTotalBytes: this._smallArtifactMemoryCacheTotalBytes,
                durationMs: Date.now() - i,
                ...h
            });
        }, c = this._getSmallArtifactMemoryCache(r);
        if (c) return l("memory_lru", {
            contentType: c.contentType,
            contentSizeBytes: c.sizeBytes
        }), {
            content: c.content,
            contentType: c.contentType
        };
        const u = await this._getLocalStoreBytes(t, e);
        if (u) {
            const d = ROm(e);
            return a() || this._setSmallArtifactMemoryCache(r, u, d), l("local_store", {
                contentType: d,
                contentSizeBytes: u.byteLength
            }), {
                content: u,
                contentType: d
            };
        }
        if (s) {
            const d = await this._idbGet(r);
            if (d) {
                const h = new Uint8Array(d.content), p = d.contentType || "application/octet-stream";
                return a() || this._setSmallArtifactMemoryCache(r, h, p), l("idb", {
                    contentType: p,
                    contentSizeBytes: d.content.byteLength
                }), {
                    content: h,
                    contentType: p
                };
            }
        }
        try {
            const { arrayBuffer: d, contentType: h, totalSize: p } = await this._streamArtifact(t, e, n), g = s && p <= ZZr;
            return g && this._idbPut(r, {
                content: d,
                contentType: h,
                savedAt: Date.now()
            }).catch(()=>{}), a() || (this._setSmallArtifactMemoryCache(r, new Uint8Array(d), h), this._lastFetchedAt.set(r, Date.now())), l("network", {
                cachedInIdb: g,
                contentType: h,
                contentSizeBytes: d.byteLength,
                totalSize: p
            }), {
                content: new Uint8Array(d),
                contentType: h
            };
        } catch (d) {
            l("network_error", {
                errorMessage: d instanceof Error ? d.message : String(d)
            });
            return;
        }
    }
    async listArtifactsCached(t, e) {
        const n = Date.now(), i = this._artifactListCache.get(t);
        if (i && n - i.fetchedAt <= LOm) return i.artifacts;
        const r = this._artifactListInflight.get(t);
        if (r) return r;
        const s = this._fetchArtifactList(t, e).finally(()=>{
            this._artifactListInflight.get(t) === s && this._artifactListInflight.delete(t);
        });
        this._artifactListInflight.set(t, s);
        try {
            return await s;
        } catch (o) {
            if (i) return i.artifacts;
            throw o;
        }
    }
    async warmArtifactList(t, e) {
        try {
            const n = await this._fetchArtifactList(t, e);
            await this._warmVideoArtifactUrls(t, n, e);
        } catch  {}
    }
    invalidateArtifactListing(t) {
        this._holdsArtifactState(t) && (this._dropArtifactListing(t), this._relistOnNextUse.add(t), this._hasObservedArtifact(t) && this.listArtifactsCached(t).catch(()=>{}));
    }
    _dropArtifactListing(t) {
        this._artifactListGenerations.bump(t), this._artifactListCache.delete(t), this._artifactListInflight.delete(t);
    }
    _holdsArtifactState(t) {
        if (this._artifactListCache.has(t) || this._artifactListInflight.has(t)) return !0;
        const e = TCt(t, "");
        for (const n of this._handles.keys())if (n.startsWith(e)) return !0;
        for (const n of this._contentVersions.keys())if (n.startsWith(e)) return !0;
        return !1;
    }
    _hasObservedArtifact(t) {
        const e = TCt(t, "");
        for (const [n, i] of this._handles)if (i.isObserved && n.startsWith(e)) return !0;
        return !1;
    }
    releaseAgent(t) {
        this._releaseEpochs.set(t, (this._releaseEpochs.get(t) ?? 0) + 1), this._artifactListGenerations.delete(t), this._relistOnNextUse.delete(t);
        const e = TCt(t, "");
        for (const n of [
            ...this._presignedUrlRefreshTimers.keys()
        ])n.startsWith(e) && this._presignedUrlRefreshTimers.deleteAndDispose(n);
        for (const n of this._presignedUrlCache.keys())n.startsWith(e) && this._presignedUrlCache.delete(n);
        for (const n of this._lastFetchedAt.keys())n.startsWith(e) && this._lastFetchedAt.delete(n);
        for (const n of this._contentVersions.keys())n.startsWith(e) && this._contentVersions.delete(n);
        for (const n of this._smallArtifactMemoryCache.keys())n.startsWith(e) && this._deleteSmallArtifactMemoryCache(n);
        for (const [n, i] of this._activeBlobUrls)!n.startsWith(e) || this._handles.get(n)?.isObserved || (this._activeBlobUrls.delete(n), this._activeBlobUrlTotalBytes -= i.sizeBytes, URL.revokeObjectURL(i.url));
        for (const [n, i] of this._handles)!n.startsWith(e) || this._activeBlobUrls.has(n) || (i.dispose(), this._handles.delete(n));
        this._artifactListCache.delete(t), this._artifactListInflight.delete(t);
    }
    _getOrCreateHandle(t, e) {
        let n = this._handles.get(t);
        return n ? (n.update(e), n) : (n = new UOm(e, ()=>{
            queueMicrotask(()=>this._trimActiveBlobUrls());
        }), this._handles.set(t, n), n);
    }
    async _fetchArtifactList(t, e) {
        const n = this._artifactListGenerations.capture(t), s = (await (await this._aiService.backgroundComposerClient()).listBackgroundComposerArtifacts({
            bcId: t
        }, e ? {
            signal: e
        } : void 0)).artifacts.map((o)=>({
                absolutePath: o.absolutePath,
                sizeBytes: Number(o.sizeBytes),
                updatedAtUnixMs: Number(o.updatedAtUnixMs)
            }));
        return n.isCurrent() && !this._store.isDisposed && (this._artifactListCache.set(t, {
            artifacts: s,
            fetchedAt: Date.now()
        }), this._refreshChangedArtifacts(t, s)), s;
    }
    _checkFreshnessInBackground(t) {
        if (!pc(t)) return;
        this._relistOnNextUse.delete(t) && this._dropArtifactListing(t);
        const e = this._artifactListCache.get(t);
        if (e) {
            this._refreshChangedArtifacts(t, e.artifacts);
            return;
        }
        this.listArtifactsCached(t).catch(()=>{});
    }
    _markContentFetched(t, e, n, i) {
        const r = this._artifactListCache.get(t), s = r && r.fetchedAt <= i ? r.artifacts.find((o)=>o.absolutePath === e) : void 0;
        this._contentVersions.set(n, {
            fetchedAtMs: i,
            fingerprint: s ? IOm(s) : void 0
        });
    }
    _refreshChangedArtifacts(t, e) {
        for (const n of e){
            const i = TCt(t, n.absolutePath), r = this._contentVersions.get(i);
            if (!r) continue;
            const s = IOm(n);
            (r.fingerprint === void 0 ? n.updatedAtUnixMs >= Math.floor(r.fetchedAtMs / 1e3) * 1e3 : r.fingerprint !== s) ? this._refreshChangedArtifact(t, n.absolutePath, i) : r.fingerprint = s;
        }
    }
    _refreshChangedArtifact(t, e, n) {
        if (this._deleteSmallArtifactMemoryCache(n), oqa(e)) {
            this._revalidate(t, e, n, this._releaseFence(t));
            return;
        }
        this._presignedUrlCache.delete(n), this._presignedUrlRefreshTimers.deleteAndDispose(n), this._handles.has(n) && this._refreshPresignedUrlInBackground(t, e, n);
    }
    async _warmVideoArtifactUrls(t, e, n) {
        if (n?.aborted) return;
        const i = e.filter((r)=>xOm(r.absolutePath)).slice(0, BOm);
        await Promise.allSettled(i.map((r)=>this._resolvePresignedUrlWithCache(t, r.absolutePath, TCt(t, r.absolutePath), n)));
    }
    async _resolveFromLocalStore(t, e) {
        const n = await this._getLocalStoreBytes(t, e);
        if (!n) return;
        const i = new Uint8Array(n.byteLength);
        return i.set(n), {
            blobUrl: URL.createObjectURL(new Blob([
                i
            ], {
                type: ROm(e)
            })),
            sizeBytes: n.byteLength
        };
    }
    async _getLocalStoreBytes(t, e) {
        try {
            const n = `${N0t}${t}:${e}`, i = await this._storageService.cursorDiskKVGetBinary(n);
            return i || void 0;
        } catch  {
            return;
        }
    }
    async _resolveWithDiskCache(t, e, n, i) {
        const r = this._releaseFence(t), s = await this._idbGet(n);
        if (s) {
            const c = aqa(s.content, s.contentType);
            return r() ? {
                url: c,
                onDidChange: en.None
            } : (this._setActiveBlobUrl(n, c, s.content.byteLength), this._contentVersions.has(n) || this._contentVersions.set(n, {
                fetchedAtMs: s.savedAt
            }), AOm(s) ? this._revalidate(t, e, n, r) : this._checkFreshnessInBackground(t), this._getOrCreateHandle(n, c));
        }
        const o = await this._resolveFromLocalStore(t, e);
        if (o) return r() ? {
            url: o.blobUrl,
            onDidChange: en.None
        } : (this._setActiveBlobUrl(n, o.blobUrl, o.sizeBytes), this._lastFetchedAt.set(n, Date.now()), this._getOrCreateHandle(n, o.blobUrl));
        const a = await this._fetchAndCache(t, e, n, r, i), l = this._handles.get(n);
        return l || {
            url: aqa(a.arrayBuffer, a.contentType),
            onDidChange: en.None
        };
    }
    async _fetchAndCache(t, e, n, i, r) {
        const s = Date.now(), { arrayBuffer: o, contentType: a, totalSize: l } = await this._streamArtifact(t, e, r);
        if (this._activeBlobUrls.get(n)?.url) {
            const d = await this._idbGet(n);
            if (d && oj1(d.content, o)) return l <= ZZr && this._idbPut(n, {
                content: d.content,
                contentType: a,
                savedAt: Date.now()
            }).catch(()=>{}), i() || (this._lastFetchedAt.set(n, Date.now()), this._markContentFetched(t, e, n, s)), {
                arrayBuffer: o,
                contentType: a
            };
        }
        if (l <= ZZr && this._idbPut(n, {
            content: o,
            contentType: a,
            savedAt: Date.now()
        }).catch(()=>{}), i()) return {
            arrayBuffer: o,
            contentType: a
        };
        const u = aqa(o, a);
        return this._setActiveBlobUrl(n, u, o.byteLength), this._lastFetchedAt.set(n, Date.now()), this._markContentFetched(t, e, n, s), this._getOrCreateHandle(n, u), {
            arrayBuffer: o,
            contentType: a
        };
    }
    _setActiveBlobUrl(t, e, n) {
        const i = this._activeBlobUrls.get(t);
        i && (this._activeBlobUrls.delete(t), this._activeBlobUrlTotalBytes -= i.sizeBytes, URL.revokeObjectURL(i.url)), this._activeBlobUrls.set(t, {
            url: e,
            sizeBytes: n
        }), this._activeBlobUrlTotalBytes += n, this._trimActiveBlobUrls(t);
    }
    _trimActiveBlobUrls(t) {
        for (const [e, n] of this._activeBlobUrls){
            if (this._activeBlobUrlTotalBytes <= this._activeBlobUrlMaxTotalBytes) break;
            e === t || this._handles.get(e)?.isObserved || (this._activeBlobUrls.delete(e), this._activeBlobUrlTotalBytes -= n.sizeBytes, URL.revokeObjectURL(n.url));
        }
    }
    async _streamArtifact(t, e, n) {
        const i = await this._aiService.backgroundComposerClient();
        try {
            const r = i.streamBackgroundComposerArtifact({
                bcId: t,
                absolutePath: e
            }, n ? {
                signal: n
            } : void 0);
            let s = "application/octet-stream", o = 0;
            const a = [];
            for await (const c of r)c.contentType && (s = c.contentType), c.totalSize && (o = Number(c.totalSize)), c.contentChunk.length > 0 && a.push(c.contentChunk);
            const l = aj1(a, o);
            return o === 0 && (o = l.byteLength), {
                arrayBuffer: l,
                contentType: s,
                totalSize: o
            };
        } catch  {
            try {
                const r = await i.getBackgroundComposerArtifactBytes({
                    bcId: t,
                    absolutePath: e
                }, n ? {
                    signal: n
                } : void 0), s = r.content.buffer.slice(r.content.byteOffset, r.content.byteOffset + r.content.byteLength), o = r.contentType || "application/octet-stream";
                return {
                    arrayBuffer: s,
                    contentType: o,
                    totalSize: s.byteLength
                };
            } catch (r) {
                throw r;
            }
        }
    }
    _maybeRevalidateInBackground(t, e, n) {
        if (this._inflightRevalidations.has(n)) return;
        const i = this._releaseFence(t);
        this._idbGet(n).then((r)=>{
            if (i()) return;
            if (r) {
                AOm(r) && this._revalidate(t, e, n, i);
                return;
            }
            const s = this._lastFetchedAt.get(n);
            (!s || Date.now() - s > lqa) && this._revalidate(t, e, n, i);
        }).catch(()=>{});
    }
    _revalidate(t, e, n, i) {
        this._inflightRevalidations.has(n) || (this._inflightRevalidations.add(n), this._fetchAndCache(t, e, n, i, void 0).catch(()=>{}).finally(()=>{
            this._inflightRevalidations.delete(n);
        }));
    }
    _releaseFence(t) {
        const e = this._releaseEpochs.get(t) ?? 0;
        return ()=>(this._releaseEpochs.get(t) ?? 0) !== e;
    }
    async _resolveViaPresignedUrl(t, e, n) {
        const r = await (await this._aiService.backgroundComposerClient()).getBackgroundComposerArtifact({
            bcId: t,
            absolutePath: e
        }, n ? {
            signal: n
        } : void 0);
        return {
            url: r.url,
            expiresAtMs: ij1(r.expiresAt)
        };
    }
    async _resolvePresignedUrlWithCache(t, e, n, i) {
        const r = this._presignedUrlCache.get(n);
        if (r && !sj1(r)) {
            const a = this._getOrCreateHandle(n, r.url);
            return rj1(r) ? this._refreshPresignedUrlInBackground(t, e, n) : this._checkFreshnessInBackground(t), a;
        }
        const s = this._inflightFetches.get(n);
        if (s) return s;
        const o = this._fetchAndCachePresignedUrl(t, e, n, i);
        return this._inflightFetches.set(n, o), o.finally(()=>{
            this._inflightFetches.delete(n);
        }), o;
    }
    async _fetchAndCachePresignedUrl(t, e, n, i) {
        const r = this._releaseEpochs.get(t) ?? 0, s = Date.now(), o = await this._resolveViaPresignedUrl(t, e, i);
        return (this._releaseEpochs.get(t) ?? 0) !== r ? {
            url: o.url,
            onDidChange: en.None
        } : (this._presignedUrlCache.set(n, o), this._markContentFetched(t, e, n, s), this._schedulePresignedUrlRefresh(t, e, n, o), this._getOrCreateHandle(n, o.url));
    }
    _schedulePresignedUrlRefresh(t, e, n, i) {
        this._presignedUrlRefreshTimers.deleteAndDispose(n);
        const r = Math.max(0, i.expiresAtMs - Date.now() - QZr);
        this._presignedUrlRefreshTimers.set(n, Ec(()=>{
            this._presignedUrlRefreshTimers.deleteAndDispose(n), this._refreshPresignedUrlInBackground(t, e, n);
        }, r));
    }
    _refreshPresignedUrlInBackground(t, e, n) {
        if (this._inflightFetches.has(n)) return;
        const i = this._fetchAndCachePresignedUrl(t, e, n, void 0);
        this._inflightFetches.set(n, i), i.catch(()=>{
            const r = this._presignedUrlCache.get(n);
            r && this._schedulePresignedUrlRefresh(t, e, n, {
                ...r,
                expiresAtMs: Date.now() + QZr + OOm
            });
        }).finally(()=>{
            this._inflightFetches.delete(n);
        });
    }
    _getDb() {
        if (!this._dbPromise) {
            const t = new Promise((e, n)=>{
                const i = indexedDB.open(POm, MOm);
                i.onupgradeneeded = ()=>{
                    const r = i.result;
                    r.objectStoreNames.contains(YGt) || r.createObjectStore(YGt);
                }, i.onsuccess = ()=>e(i.result), i.onerror = ()=>n(i.error);
            }).then((e)=>{
                const n = ()=>{
                    this._dbPromise === t && (this._dbPromise = void 0);
                };
                return e.addEventListener("close", n), e.addEventListener("versionchange", ()=>{
                    n(), e.close();
                }), e;
            });
            t.catch(()=>{
                this._dbPromise === t && (this._dbPromise = void 0);
            }), this._dbPromise = t;
        }
        return this._dbPromise;
    }
    async _idbGet(t) {
        const e = await this._getDb();
        return new Promise((n, i)=>{
            const o = e.transaction(YGt, "readonly").objectStore(YGt).get(t);
            o.onsuccess = ()=>n(o.result), o.onerror = ()=>i(o.error);
        });
    }
    async _idbPut(t, e) {
        const n = await this._getDb();
        return new Promise((i, r)=>{
            const a = n.transaction(YGt, "readwrite").objectStore(YGt).put(e, t);
            a.onsuccess = ()=>i(), a.onerror = ()=>r(a.error);
        });
    }
    _getSmallArtifactMemoryCache(t) {
        const e = this._smallArtifactMemoryCache.get(t);
        if (e) return this._smallArtifactMemoryCache.delete(t), this._smallArtifactMemoryCache.set(t, e), e;
    }
    _setSmallArtifactMemoryCache(t, e, n) {
        const i = e.byteLength;
        if (i >= uqa) {
            this._deleteSmallArtifactMemoryCache(t);
            return;
        }
        this._deleteSmallArtifactMemoryCache(t);
        const r = new Uint8Array(i);
        for(r.set(e), this._smallArtifactMemoryCache.set(t, {
            content: r,
            contentType: n,
            sizeBytes: i
        }), this._smallArtifactMemoryCacheTotalBytes += i; this._smallArtifactMemoryCacheTotalBytes > cqa;){
            const s = this._smallArtifactMemoryCache.keys().next().value;
            if (s === void 0) break;
            this._deleteSmallArtifactMemoryCache(s);
        }
    }
    _deleteSmallArtifactMemoryCache(t) {
        const e = this._smallArtifactMemoryCache.get(t);
        e && (this._smallArtifactMemoryCache.delete(t), this._smallArtifactMemoryCacheTotalBytes -= e.sizeBytes, this._smallArtifactMemoryCacheTotalBytes < 0 && (this._smallArtifactMemoryCacheTotalBytes = 0));
    }
    dispose() {
        super.dispose();
        for (const t of this._activeBlobUrls.values())URL.revokeObjectURL(t.url);
        this._activeBlobUrls.clear(), this._activeBlobUrlTotalBytes = 0;
        for (const t of this._handles.values())t.dispose();
        this._handles.clear(), this._presignedUrlCache.clear(), this._contentVersions.clear(), this._relistOnNextUse.clear(), this._releaseEpochs.clear(), this._smallArtifactMemoryCache.clear(), this._smallArtifactMemoryCacheTotalBytes = 0, this._dbPromise?.then((t)=>t.close()).catch(()=>{}), this._dbPromise = void 0;
    }
}, JZr = Re([
    F(0, jl),
    F(1, ki),
    F(2, wh)
], JZr), jOm = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mov": "video/quicktime",
    ".txt": "text/plain",
    ".log": "text/plain",
    ".md": "text/markdown",
    ".json": "application/json"
}, bn(XGt, JZr, 1);

}
