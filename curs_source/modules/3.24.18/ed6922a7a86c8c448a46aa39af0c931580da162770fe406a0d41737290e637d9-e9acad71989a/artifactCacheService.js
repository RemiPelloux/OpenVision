import { $Vd, GVd, HVd, Sdo, WVd, _xv, bxv, fxv, kdo, vxv, yet, yxv } from "./A3u.js";
import { Cl, Ct, Se, bt, po, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { XMe, ub } from "./async.cursor.js";
import { bn } from "./async.js";
import { nb } from "./bcIdFromAuthority.js";
import { BU, qYs } from "./composerBlobStore.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Um, mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
var VVd, jVd, $kt, wdo, uji, qVd, zVd, KVd, Cdo, Tdo, dji, YVd, XVd, ZVd, FWt, QVd, hji, JVd;
export { $kt, Cdo, FWt, JVd, KVd, QVd, Tdo, VVd, XVd, YVd, ZVd, dji, hji, jVd, qVd, uji, wdo, zVd };
var __wakaru_c2n_initialized = false;
export function c2n() {
if (__wakaru_c2n_initialized) return;
__wakaru_c2n_initialized = true;
"use strict";
x(), bt(), bn(), ub(), Se(), nb(), Ze(), Pn(), Vn(), im(), Sg(), BU(), VVd = "backgroundComposerArtifactCache", jVd = 1, $kt = "artifacts", wdo = 7200 * 60 * 1e3, uji = 32 * 1024 * 1024, qVd = 128 * 1024 * 1024, zVd = 512 * 1024, KVd = 3e4, Cdo = 4 * 1024 * 1024, Tdo = 100 * 1024, dji = 6e4, YVd = 3e4, XVd = 300 * 1e3, ZVd = 8, FWt = vn("artifactCacheService"), QVd = class {
    constructor(e, t){
        this._url = e, this._onDidChange = new ve({
            onDidRemoveLastListener: t
        }), this.onDidChange = this._onDidChange.event;
    }
    get url() {
        return this._url;
    }
    get isObserved() {
        return this._onDidChange.hasListeners();
    }
    update(e) {
        e !== this._url && (this._url = e, this._onDidChange.fire(e));
    }
    dispose() {
        this._onDidChange.dispose();
    }
}, hji = class extends we {
    constructor(e, t, n){
        super(), this._aiService = e, this._storageService = t, this._structuredLogService = n, this._activeBlobUrls = new Map, this._activeBlobUrlTotalBytes = 0, this._activeBlobUrlMaxTotalBytes = qVd, this._inflightFetches = new Map, this._inflightRevalidations = new Set, this._presignedUrlCache = new Map, this._presignedUrlRefreshTimers = this._register(new po), this._lastFetchedAt = new Map, this._contentVersions = new Map, this._artifactListGenerations = new XMe, this._relistOnNextUse = new Set, this._handles = new Map, this._artifactListCache = new Map, this._artifactListInflight = new Map, this._smallArtifactMemoryCache = new Map, this._smallArtifactMemoryCacheTotalBytes = 0, this._releaseEpochs = new Map;
    }
    async resolveArtifactUrl(e, t, n) {
        const i = yet(e, t), r = this._activeBlobUrls.get(i);
        if (r) return this._activeBlobUrls.delete(i), this._activeBlobUrls.set(i, r), this._maybeRevalidateInBackground(e, t, i), this._checkFreshnessInBackground(e), this._getOrCreateHandle(i, r.url);
        if (!Sdo(t)) {
            if (!Um(e)) {
                const a = await this._resolveFromLocalStore(e, t);
                if (a) return this._setActiveBlobUrl(i, a.blobUrl, a.sizeBytes), this._lastFetchedAt.set(i, Date.now()), this._getOrCreateHandle(i, a.blobUrl);
            }
            return this._resolvePresignedUrlWithCache(e, t, i, n);
        }
        const s = this._inflightFetches.get(i);
        if (s) return s;
        const o = this._resolveWithDiskCache(e, t, i, n);
        return this._inflightFetches.set(i, o), o.finally(()=>{
            this._inflightFetches.delete(i);
        }), o;
    }
    getArtifactBytes(e, t) {
        const n = yet(e, t), i = this._getSmallArtifactMemoryCache(n);
        if (i) return {
            content: i.content,
            contentType: i.contentType
        };
    }
    async fetchArtifactBytes(e, t, n) {
        const i = Date.now(), r = yet(e, t), s = Sdo(t), o = !0, a = this._releaseFence(e), c = (h, p)=>{
            this._structuredLogService.info("background_composer", "ArtifactCacheService.fetchArtifactBytes completed", {
                agentId: e,
                absolutePath: t,
                cacheKey: r,
                cacheSource: h,
                cacheHit: h !== "network" && h !== "network_error",
                diskCachingEligible: s,
                memoryCachingEligible: o,
                memoryCacheBudgetBytes: Cdo,
                memoryCacheMaxItemBytes: Tdo,
                memoryCacheTotalBytes: this._smallArtifactMemoryCacheTotalBytes,
                durationMs: Date.now() - i,
                ...p
            });
        }, l = this._getSmallArtifactMemoryCache(r);
        if (l) return c("memory_lru", {
            contentType: l.contentType,
            contentSizeBytes: l.sizeBytes
        }), {
            content: l.content,
            contentType: l.contentType
        };
        const u = await this._getLocalStoreBytes(e, t);
        if (u) {
            const h = GVd(t);
            return a() || this._setSmallArtifactMemoryCache(r, u, h), c("local_store", {
                contentType: h,
                contentSizeBytes: u.byteLength
            }), {
                content: u,
                contentType: h
            };
        }
        if (s) {
            const h = await this._idbGet(r);
            if (h) {
                const p = new Uint8Array(h.content), g = h.contentType || "application/octet-stream";
                return a() || this._setSmallArtifactMemoryCache(r, p, g), c("idb", {
                    contentType: g,
                    contentSizeBytes: h.content.byteLength
                }), {
                    content: p,
                    contentType: g
                };
            }
        }
        try {
            const { arrayBuffer: h, contentType: p, totalSize: g } = await this._streamArtifact(e, t, n), f = s && g <= uji;
            return f && this._idbPut(r, {
                content: h,
                contentType: p,
                savedAt: Date.now()
            }).catch(()=>{}), a() || (this._setSmallArtifactMemoryCache(r, new Uint8Array(h), p), this._lastFetchedAt.set(r, Date.now())), c("network", {
                cachedInIdb: f,
                contentType: p,
                contentSizeBytes: h.byteLength,
                totalSize: g
            }), {
                content: new Uint8Array(h),
                contentType: p
            };
        } catch (h) {
            c("network_error", {
                errorMessage: h instanceof Error ? h.message : String(h)
            });
            return;
        }
    }
    async listArtifactsCached(e, t) {
        const n = Date.now(), i = this._artifactListCache.get(e);
        if (i && n - i.fetchedAt <= KVd) return i.artifacts;
        const r = this._artifactListInflight.get(e);
        if (r) return r;
        const s = this._fetchArtifactList(e, t).finally(()=>{
            this._artifactListInflight.get(e) === s && this._artifactListInflight.delete(e);
        });
        this._artifactListInflight.set(e, s);
        try {
            return await s;
        } catch (o) {
            if (i) return i.artifacts;
            throw o;
        }
    }
    async warmArtifactList(e, t) {
        try {
            const n = await this._fetchArtifactList(e, t);
            await this._warmVideoArtifactUrls(e, n, t);
        } catch  {}
    }
    invalidateArtifactListing(e) {
        this._holdsArtifactState(e) && (this._dropArtifactListing(e), this._relistOnNextUse.add(e), this._hasObservedArtifact(e) && this.listArtifactsCached(e).catch(()=>{}));
    }
    _dropArtifactListing(e) {
        this._artifactListGenerations.bump(e), this._artifactListCache.delete(e), this._artifactListInflight.delete(e);
    }
    _holdsArtifactState(e) {
        if (this._artifactListCache.has(e) || this._artifactListInflight.has(e)) return !0;
        const t = yet(e, "");
        for (const n of this._handles.keys())if (n.startsWith(t)) return !0;
        for (const n of this._contentVersions.keys())if (n.startsWith(t)) return !0;
        return !1;
    }
    _hasObservedArtifact(e) {
        const t = yet(e, "");
        for (const [n, i] of this._handles)if (i.isObserved && n.startsWith(t)) return !0;
        return !1;
    }
    releaseAgent(e) {
        this._releaseEpochs.set(e, (this._releaseEpochs.get(e) ?? 0) + 1), this._artifactListGenerations.delete(e), this._relistOnNextUse.delete(e);
        const t = yet(e, "");
        for (const n of [
            ...this._presignedUrlRefreshTimers.keys()
        ])n.startsWith(t) && this._presignedUrlRefreshTimers.deleteAndDispose(n);
        for (const n of this._presignedUrlCache.keys())n.startsWith(t) && this._presignedUrlCache.delete(n);
        for (const n of this._lastFetchedAt.keys())n.startsWith(t) && this._lastFetchedAt.delete(n);
        for (const n of this._contentVersions.keys())n.startsWith(t) && this._contentVersions.delete(n);
        for (const n of this._smallArtifactMemoryCache.keys())n.startsWith(t) && this._deleteSmallArtifactMemoryCache(n);
        for (const [n, i] of this._activeBlobUrls)!n.startsWith(t) || this._handles.get(n)?.isObserved || (this._activeBlobUrls.delete(n), this._activeBlobUrlTotalBytes -= i.sizeBytes, URL.revokeObjectURL(i.url));
        for (const [n, i] of this._handles)!n.startsWith(t) || this._activeBlobUrls.has(n) || (i.dispose(), this._handles.delete(n));
        this._artifactListCache.delete(e), this._artifactListInflight.delete(e);
    }
    _getOrCreateHandle(e, t) {
        let n = this._handles.get(e);
        return n ? (n.update(t), n) : (n = new QVd(t, ()=>{
            queueMicrotask(()=>this._trimActiveBlobUrls());
        }), this._handles.set(e, n), n);
    }
    async _fetchArtifactList(e, t) {
        const n = this._artifactListGenerations.capture(e), s = (await (await this._aiService.backgroundComposerClient()).listBackgroundComposerArtifacts({
            bcId: e
        }, t ? {
            signal: t
        } : void 0)).artifacts.map((o)=>({
                absolutePath: o.absolutePath,
                sizeBytes: Number(o.sizeBytes),
                updatedAtUnixMs: Number(o.updatedAtUnixMs)
            }));
        return n.isCurrent() && !this._store.isDisposed && (this._artifactListCache.set(e, {
            artifacts: s,
            fetchedAt: Date.now()
        }), this._refreshChangedArtifacts(e, s)), s;
    }
    _checkFreshnessInBackground(e) {
        if (!Um(e)) return;
        this._relistOnNextUse.delete(e) && this._dropArtifactListing(e);
        const t = this._artifactListCache.get(e);
        if (t) {
            this._refreshChangedArtifacts(e, t.artifacts);
            return;
        }
        this.listArtifactsCached(e).catch(()=>{});
    }
    _markContentFetched(e, t, n, i) {
        const r = this._artifactListCache.get(e), s = r && r.fetchedAt <= i ? r.artifacts.find((o)=>o.absolutePath === t) : void 0;
        this._contentVersions.set(n, {
            fetchedAtMs: i,
            fingerprint: s ? $Vd(s) : void 0
        });
    }
    _refreshChangedArtifacts(e, t) {
        for (const n of t){
            const i = yet(e, n.absolutePath), r = this._contentVersions.get(i);
            if (!r) continue;
            const s = $Vd(n);
            (r.fingerprint === void 0 ? n.updatedAtUnixMs >= Math.floor(r.fetchedAtMs / 1e3) * 1e3 : r.fingerprint !== s) ? this._refreshChangedArtifact(e, n.absolutePath, i) : r.fingerprint = s;
        }
    }
    _refreshChangedArtifact(e, t, n) {
        if (this._deleteSmallArtifactMemoryCache(n), Sdo(t)) {
            this._revalidate(e, t, n, this._releaseFence(e));
            return;
        }
        this._presignedUrlCache.delete(n), this._presignedUrlRefreshTimers.deleteAndDispose(n), this._handles.has(n) && this._refreshPresignedUrlInBackground(e, t, n);
    }
    async _warmVideoArtifactUrls(e, t, n) {
        if (n?.aborted) return;
        const i = t.filter((r)=>HVd(r.absolutePath)).slice(0, ZVd);
        await Promise.allSettled(i.map((r)=>this._resolvePresignedUrlWithCache(e, r.absolutePath, yet(e, r.absolutePath), n)));
    }
    async _resolveFromLocalStore(e, t) {
        const n = await this._getLocalStoreBytes(e, t);
        if (!n) return;
        const i = new Uint8Array(n.byteLength);
        return i.set(n), {
            blobUrl: URL.createObjectURL(new Blob([
                i
            ], {
                type: GVd(t)
            })),
            sizeBytes: n.byteLength
        };
    }
    async _getLocalStoreBytes(e, t) {
        try {
            const n = `${qYs}${e}:${t}`, i = await this._storageService.cursorDiskKVGetBinary(n);
            return i || void 0;
        } catch  {
            return;
        }
    }
    async _resolveWithDiskCache(e, t, n, i) {
        const r = this._releaseFence(e), s = await this._idbGet(n);
        if (s) {
            const l = kdo(s.content, s.contentType);
            return r() ? {
                url: l,
                onDidChange: Ct.None
            } : (this._setActiveBlobUrl(n, l, s.content.byteLength), this._contentVersions.has(n) || this._contentVersions.set(n, {
                fetchedAtMs: s.savedAt
            }), WVd(s) ? this._revalidate(e, t, n, r) : this._checkFreshnessInBackground(e), this._getOrCreateHandle(n, l));
        }
        const o = await this._resolveFromLocalStore(e, t);
        if (o) return r() ? {
            url: o.blobUrl,
            onDidChange: Ct.None
        } : (this._setActiveBlobUrl(n, o.blobUrl, o.sizeBytes), this._lastFetchedAt.set(n, Date.now()), this._getOrCreateHandle(n, o.blobUrl));
        const a = await this._fetchAndCache(e, t, n, r, i), c = this._handles.get(n);
        return c || {
            url: kdo(a.arrayBuffer, a.contentType),
            onDidChange: Ct.None
        };
    }
    async _fetchAndCache(e, t, n, i, r) {
        const s = Date.now(), { arrayBuffer: o, contentType: a, totalSize: c } = await this._streamArtifact(e, t, r);
        if (this._activeBlobUrls.get(n)?.url) {
            const h = await this._idbGet(n);
            if (h && bxv(h.content, o)) return c <= uji && this._idbPut(n, {
                content: h.content,
                contentType: a,
                savedAt: Date.now()
            }).catch(()=>{}), i() || (this._lastFetchedAt.set(n, Date.now()), this._markContentFetched(e, t, n, s)), {
                arrayBuffer: o,
                contentType: a
            };
        }
        if (c <= uji && this._idbPut(n, {
            content: o,
            contentType: a,
            savedAt: Date.now()
        }).catch(()=>{}), i()) return {
            arrayBuffer: o,
            contentType: a
        };
        const u = kdo(o, a);
        return this._setActiveBlobUrl(n, u, o.byteLength), this._lastFetchedAt.set(n, Date.now()), this._markContentFetched(e, t, n, s), this._getOrCreateHandle(n, u), {
            arrayBuffer: o,
            contentType: a
        };
    }
    _setActiveBlobUrl(e, t, n) {
        const i = this._activeBlobUrls.get(e);
        i && (this._activeBlobUrls.delete(e), this._activeBlobUrlTotalBytes -= i.sizeBytes, URL.revokeObjectURL(i.url)), this._activeBlobUrls.set(e, {
            url: t,
            sizeBytes: n
        }), this._activeBlobUrlTotalBytes += n, this._trimActiveBlobUrls(e);
    }
    _trimActiveBlobUrls(e) {
        for (const [t, n] of this._activeBlobUrls){
            if (this._activeBlobUrlTotalBytes <= this._activeBlobUrlMaxTotalBytes) break;
            t === e || this._handles.get(t)?.isObserved || (this._activeBlobUrls.delete(t), this._activeBlobUrlTotalBytes -= n.sizeBytes, URL.revokeObjectURL(n.url));
        }
    }
    async _streamArtifact(e, t, n) {
        const i = await this._aiService.backgroundComposerClient();
        try {
            const r = i.streamBackgroundComposerArtifact({
                bcId: e,
                absolutePath: t
            }, n ? {
                signal: n
            } : void 0);
            let s = "application/octet-stream", o = 0;
            const a = [];
            for await (const l of r)l.contentType && (s = l.contentType), l.totalSize && (o = Number(l.totalSize)), l.contentChunk.length > 0 && a.push(l.contentChunk);
            const c = yxv(a, o);
            return o === 0 && (o = c.byteLength), {
                arrayBuffer: c,
                contentType: s,
                totalSize: o
            };
        } catch  {
            try {
                const r = await i.getBackgroundComposerArtifactBytes({
                    bcId: e,
                    absolutePath: t
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
    _maybeRevalidateInBackground(e, t, n) {
        if (this._inflightRevalidations.has(n)) return;
        const i = this._releaseFence(e);
        this._idbGet(n).then((r)=>{
            if (i()) return;
            if (r) {
                WVd(r) && this._revalidate(e, t, n, i);
                return;
            }
            const s = this._lastFetchedAt.get(n);
            (!s || Date.now() - s > wdo) && this._revalidate(e, t, n, i);
        }).catch(()=>{});
    }
    _revalidate(e, t, n, i) {
        this._inflightRevalidations.has(n) || (this._inflightRevalidations.add(n), this._fetchAndCache(e, t, n, i, void 0).catch(()=>{}).finally(()=>{
            this._inflightRevalidations.delete(n);
        }));
    }
    _releaseFence(e) {
        const t = this._releaseEpochs.get(e) ?? 0;
        return ()=>(this._releaseEpochs.get(e) ?? 0) !== t;
    }
    async _resolveViaPresignedUrl(e, t, n) {
        const r = await (await this._aiService.backgroundComposerClient()).getBackgroundComposerArtifact({
            bcId: e,
            absolutePath: t
        }, n ? {
            signal: n
        } : void 0);
        return {
            url: r.url,
            expiresAtMs: fxv(r.expiresAt)
        };
    }
    async _resolvePresignedUrlWithCache(e, t, n, i) {
        const r = this._presignedUrlCache.get(n);
        if (r && !_xv(r)) {
            const a = this._getOrCreateHandle(n, r.url);
            return vxv(r) ? this._refreshPresignedUrlInBackground(e, t, n) : this._checkFreshnessInBackground(e), a;
        }
        const s = this._inflightFetches.get(n);
        if (s) return s;
        const o = this._fetchAndCachePresignedUrl(e, t, n, i);
        return this._inflightFetches.set(n, o), o.finally(()=>{
            this._inflightFetches.delete(n);
        }), o;
    }
    async _fetchAndCachePresignedUrl(e, t, n, i) {
        const r = this._releaseEpochs.get(e) ?? 0, s = Date.now(), o = await this._resolveViaPresignedUrl(e, t, i);
        return (this._releaseEpochs.get(e) ?? 0) !== r ? {
            url: o.url,
            onDidChange: Ct.None
        } : (this._presignedUrlCache.set(n, o), this._markContentFetched(e, t, n, s), this._schedulePresignedUrlRefresh(e, t, n, o), this._getOrCreateHandle(n, o.url));
    }
    _schedulePresignedUrlRefresh(e, t, n, i) {
        this._presignedUrlRefreshTimers.deleteAndDispose(n);
        const r = Math.max(0, i.expiresAtMs - Date.now() - dji);
        this._presignedUrlRefreshTimers.set(n, Cl(()=>{
            this._presignedUrlRefreshTimers.deleteAndDispose(n), this._refreshPresignedUrlInBackground(e, t, n);
        }, r));
    }
    _refreshPresignedUrlInBackground(e, t, n) {
        if (this._inflightFetches.has(n)) return;
        const i = this._fetchAndCachePresignedUrl(e, t, n, void 0);
        this._inflightFetches.set(n, i), i.catch(()=>{
            const r = this._presignedUrlCache.get(n);
            r && this._schedulePresignedUrlRefresh(e, t, n, {
                ...r,
                expiresAtMs: Date.now() + dji + YVd
            });
        }).finally(()=>{
            this._inflightFetches.delete(n);
        });
    }
    _getDb() {
        if (!this._dbPromise) {
            const e = new Promise((t, n)=>{
                const i = indexedDB.open(VVd, jVd);
                i.onupgradeneeded = ()=>{
                    const r = i.result;
                    r.objectStoreNames.contains($kt) || r.createObjectStore($kt);
                }, i.onsuccess = ()=>t(i.result), i.onerror = ()=>n(i.error);
            }).then((t)=>{
                const n = ()=>{
                    this._dbPromise === e && (this._dbPromise = void 0);
                };
                return t.addEventListener("close", n), t.addEventListener("versionchange", ()=>{
                    n(), t.close();
                }), t;
            });
            e.catch(()=>{
                this._dbPromise === e && (this._dbPromise = void 0);
            }), this._dbPromise = e;
        }
        return this._dbPromise;
    }
    async _idbGet(e) {
        const t = await this._getDb();
        return new Promise((n, i)=>{
            const o = t.transaction($kt, "readonly").objectStore($kt).get(e);
            o.onsuccess = ()=>n(o.result), o.onerror = ()=>i(o.error);
        });
    }
    async _idbPut(e, t) {
        const n = await this._getDb();
        return new Promise((i, r)=>{
            const a = n.transaction($kt, "readwrite").objectStore($kt).put(t, e);
            a.onsuccess = ()=>i(), a.onerror = ()=>r(a.error);
        });
    }
    _getSmallArtifactMemoryCache(e) {
        const t = this._smallArtifactMemoryCache.get(e);
        if (t) return this._smallArtifactMemoryCache.delete(e), this._smallArtifactMemoryCache.set(e, t), t;
    }
    _setSmallArtifactMemoryCache(e, t, n) {
        const i = t.byteLength;
        if (i >= Tdo) {
            this._deleteSmallArtifactMemoryCache(e);
            return;
        }
        this._deleteSmallArtifactMemoryCache(e);
        const r = new Uint8Array(i);
        for(r.set(t), this._smallArtifactMemoryCache.set(e, {
            content: r,
            contentType: n,
            sizeBytes: i
        }), this._smallArtifactMemoryCacheTotalBytes += i; this._smallArtifactMemoryCacheTotalBytes > Cdo;){
            const s = this._smallArtifactMemoryCache.keys().next().value;
            if (s === void 0) break;
            this._deleteSmallArtifactMemoryCache(s);
        }
    }
    _deleteSmallArtifactMemoryCache(e) {
        const t = this._smallArtifactMemoryCache.get(e);
        t && (this._smallArtifactMemoryCache.delete(e), this._smallArtifactMemoryCacheTotalBytes -= t.sizeBytes, this._smallArtifactMemoryCacheTotalBytes < 0 && (this._smallArtifactMemoryCacheTotalBytes = 0));
    }
    dispose() {
        super.dispose();
        for (const e of this._activeBlobUrls.values())URL.revokeObjectURL(e.url);
        this._activeBlobUrls.clear(), this._activeBlobUrlTotalBytes = 0;
        for (const e of this._handles.values())e.dispose();
        this._handles.clear(), this._presignedUrlCache.clear(), this._contentVersions.clear(), this._relistOnNextUse.clear(), this._releaseEpochs.clear(), this._smallArtifactMemoryCache.clear(), this._smallArtifactMemoryCacheTotalBytes = 0, this._dbPromise?.then((e)=>e.close()).catch(()=>{}), this._dbPromise = void 0;
    }
}, hji = ie([
    C(0, jp),
    C(1, yn),
    C(2, Xh)
], hji), JVd = {
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
}, mn(FWt, hji, 1);

}
