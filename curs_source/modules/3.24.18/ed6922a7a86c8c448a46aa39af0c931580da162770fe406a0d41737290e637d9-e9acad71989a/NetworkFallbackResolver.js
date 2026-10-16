import { Cyv, Uto, byv, kyv, wyv } from "./A3u.js";
import { Syv } from "./DnsTxtQuery.js";
import { vHt } from "./Hashing.js";
import { Pee } from "./Log_3.js";
import { DJe } from "./StorageProvider.js";
import { x } from "./tslib.es6.js";
var $to, qfd, zfd;
export { $to, qfd, zfd };
var __wakaru_Tyv_initialized = false;
export function Tyv() {
if (__wakaru_Tyv_initialized) return;
__wakaru_Tyv_initialized = true;
"use strict";
x(), Syv(), vHt(), Pee(), DJe(), $to = 10080 * 60 * 1e3, qfd = 14400 * 1e3, zfd = class {
    constructor(e){
        this._fallbackInfo = null, this._errorBoundary = null, this._dnsQueryCooldowns = {}, this._networkOverrideFunc = e.networkConfig?.networkOverrideFunc;
    }
    setErrorBoundary(e) {
        this._errorBoundary = e;
    }
    tryBumpExpiryTime(e, t) {
        const n = this._fallbackInfo?.[t.endpoint];
        n && (n.expiryTime = Date.now() + $to, Uto(e, {
            ...this._fallbackInfo,
            [t.endpoint]: n
        }));
    }
    getActiveFallbackUrl(e, t) {
        if (t.customUrl != null && t.fallbackUrls != null) return null;
        let n = this._fallbackInfo;
        n == null && (n = wyv(e) ?? {}, this._fallbackInfo = n);
        const i = n[t.endpoint];
        return !i || Date.now() > (i.expiryTime ?? 0) || t.getChecksum() !== i.urlConfigChecksum ? (delete n[t.endpoint], this._fallbackInfo = n, Uto(e, this._fallbackInfo), null) : i.url ? i.url : null;
    }
    async tryFetchUpdatedFallbackInfo(e, t, n, i) {
        try {
            if (!kyv(n, i)) return !1;
            const s = t.customUrl == null && t.fallbackUrls == null ? await this._tryFetchFallbackUrlsFromNetwork(t) : t.fallbackUrls, o = this._pickNewFallbackUrl(this._fallbackInfo?.[t.endpoint], s);
            return o ? (this._updateFallbackInfoWithNewUrl(e, t, o), !0) : !1;
        } catch (r) {
            return this._errorBoundary?.logError("tryFetchUpdatedFallbackInfo", r), !1;
        }
    }
    _updateFallbackInfoWithNewUrl(e, t, n) {
        const i = {
            urlConfigChecksum: t.getChecksum(),
            url: n,
            expiryTime: Date.now() + $to,
            previous: []
        }, r = t.endpoint, s = this._fallbackInfo?.[r];
        s && i.previous.push(...s.previous), i.previous.length > 10 && (i.previous = []);
        const o = this._fallbackInfo?.[r]?.url;
        o != null && i.previous.push(o), this._fallbackInfo = {
            ...this._fallbackInfo,
            [r]: i
        }, Uto(e, this._fallbackInfo);
    }
    async _tryFetchFallbackUrlsFromNetwork(e) {
        const t = this._dnsQueryCooldowns[e.endpoint];
        if (t && Date.now() < t) return null;
        this._dnsQueryCooldowns[e.endpoint] = Date.now() + qfd;
        const n = [], i = await byv(this._networkOverrideFunc ?? fetch), r = Cyv(e.defaultUrl);
        for (const s of i){
            if (!s.startsWith(e.endpointDnsKey + "=")) continue;
            const o = s.split("=");
            if (o.length > 1) {
                let a = o[1];
                a.endsWith("/") && (a = a.slice(0, -1)), n.push(`https://${a}${r}`);
            }
        }
        return n;
    }
    _pickNewFallbackUrl(e, t) {
        if (t == null) return null;
        const n = new Set(e?.previous ?? []), i = e?.url;
        let r = null;
        for (const s of t){
            const o = s.endsWith("/") ? s.slice(0, -1) : s;
            if (!n.has(s) && o !== i) {
                r = o;
                break;
            }
        }
        return r;
    }
};

}
