import { Lto, Rfd, cHi, iLn, jSt, oLn } from "./A3u.js";
import { $E, Pee } from "./Log_3.js";
import { QMe, bHi } from "./StableID.js";
import { Ifd } from "./StatsigUser.js";
import { DJe, V3 } from "./StorageProvider.js";
import { Afd } from "./TypedJsonParse.js";
import { x } from "./tslib.es6.js";
var Nto, Dfd, Mfd;
export { Dfd, Mfd, Nto };
var __wakaru_uyv_initialized = false;
export function uyv() {
if (__wakaru_uyv_initialized) return;
__wakaru_uyv_initialized = true;
"use strict";
x(), Pee(), bHi(), Ifd(), DJe(), Afd(), Nto = 10, Dfd = class {
    constructor(e, t){
        this._adapterName = e, this._cacheSuffix = t, this._options = null, this._sdkKey = null, this._lastModifiedStoreKey = `statsig.last_modified_time.${t}`, this._inMemoryCache = new Mfd;
    }
    attach(e, t, n) {
        this._sdkKey = e, this._options = t;
    }
    getDataSync(e) {
        const t = e && oLn(e, this._options), n = this._getCacheKey(t), i = this._inMemoryCache.get(n, t);
        if (i && this._getIsCacheValueValid(i)) return i;
        const r = this._loadFromCache(n);
        return r && this._getIsCacheValueValid(r) ? (this._inMemoryCache.add(n, r), this._inMemoryCache.get(n, t)) : null;
    }
    setData(e, t) {
        const n = t && oLn(t, this._options), i = this._getCacheKey(n);
        this._inMemoryCache.add(i, Lto("Bootstrap", e, null, n));
    }
    _getIsCacheValueValid(e) {
        return e.stableID == null || e.stableID === QMe.get(this._getSdkKey());
    }
    async _getDataAsyncImpl(e, t, n) {
        V3.isReady() || await V3.isReadyResolver();
        const i = e ?? this.getDataSync(t), r = [
            this._fetchAndPrepFromNetwork(i, t, n)
        ];
        return n?.timeoutMs && r.push(new Promise((s)=>setTimeout(s, n.timeoutMs)).then(()=>($E.debug("Fetching latest value timed out"), null))), await Promise.race(r);
    }
    async _prefetchDataImpl(e, t) {
        const n = e && oLn(e, this._options), i = this._getCacheKey(n), r = await this._getDataAsyncImpl(null, n, t);
        r && this._inMemoryCache.add(i, {
            ...r,
            source: "Prefetch"
        });
    }
    async _fetchAndPrepFromNetwork(e, t, n) {
        const i = e?.data ?? null, r = e != null && this._isCachedResultValidFor204(e, t), s = await this._fetchFromNetwork(i, t, n, r);
        if (!s) return $E.debug("No response returned for latest value"), null;
        const o = jSt(s, "has_updates", "Response"), a = this._getSdkKey(), c = QMe.get(a);
        let l = null;
        if (o?.has_updates === !0) l = Lto("Network", s, c, t);
        else if (i && o?.has_updates === !1) l = Lto("NetworkNotModified", i, c, t);
        else return null;
        const u = this._getCacheKey(t);
        return this._inMemoryCache.add(u, l), this._writeToCache(u, l), l;
    }
    _getSdkKey() {
        return this._sdkKey != null ? this._sdkKey : ($E.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(e) {
        const t = V3.getItem?.(e);
        if (t == null) return null;
        const n = jSt(t, "source", "Cached Result");
        return n ? {
            ...n,
            source: "Cache"
        } : null;
    }
    _writeToCache(e, t) {
        V3.setItem(e, JSON.stringify(t)), this._runLocalStorageCacheEviction(e);
    }
    _runLocalStorageCacheEviction(e) {
        const t = iLn(this._lastModifiedStoreKey) ?? {};
        t[e] = Date.now();
        const n = Rfd(t, Nto);
        n && (delete t[n], V3.removeItem(n)), cHi(this._lastModifiedStoreKey, t);
    }
}, Mfd = class {
    constructor(){
        this._data = {};
    }
    get(e, t) {
        const n = this._data[e], i = n?.stableID, r = t?.customIDs?.stableID;
        return r && i && r !== i ? ($E.warn("'StatsigUser.customIDs.stableID' mismatch"), null) : n;
    }
    add(e, t) {
        const n = Rfd(this._data, Nto - 1);
        n && delete this._data[n], this._data[e] = t;
    }
    merge(e) {
        this._data = {
            ...this._data,
            ...e
        };
    }
};

}
