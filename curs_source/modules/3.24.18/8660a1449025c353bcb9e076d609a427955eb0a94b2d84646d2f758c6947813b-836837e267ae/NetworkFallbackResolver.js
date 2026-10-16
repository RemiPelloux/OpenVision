import { Oyy } from "./DnsTxtQuery.js";
import { Ydn } from "./Hashing.js";
import { Nde } from "./Log_2.js";
import { Byy, Fyy, Nyy, Uyy, fEo } from "./SZu.js";
import { a_t } from "./StorageProvider.js";
import { E } from "./tslib.es6.js";
var vEo, MJu, DJu;
export { DJu, MJu, vEo };
var __wakaru_jyy_initialized = false;
export function jyy() {
if (__wakaru_jyy_initialized) return;
__wakaru_jyy_initialized = true;
"use strict";
E(), Oyy(), Ydn(), Nde(), a_t(), vEo = 10080 * 60 * 1e3, MJu = 14400 * 1e3, DJu = class {
    constructor(t){
        this._fallbackInfo = null, this._errorBoundary = null, this._dnsQueryCooldowns = {}, this._networkOverrideFunc = t.networkConfig?.networkOverrideFunc;
    }
    setErrorBoundary(t) {
        this._errorBoundary = t;
    }
    tryBumpExpiryTime(t, e) {
        const n = this._fallbackInfo?.[e.endpoint];
        n && (n.expiryTime = Date.now() + vEo, fEo(t, {
            ...this._fallbackInfo,
            [e.endpoint]: n
        }));
    }
    getActiveFallbackUrl(t, e) {
        if (e.customUrl != null && e.fallbackUrls != null) return null;
        let n = this._fallbackInfo;
        n == null && (n = Byy(t) ?? {}, this._fallbackInfo = n);
        const i = n[e.endpoint];
        return !i || Date.now() > (i.expiryTime ?? 0) || e.getChecksum() !== i.urlConfigChecksum ? (delete n[e.endpoint], this._fallbackInfo = n, fEo(t, this._fallbackInfo), null) : i.url ? i.url : null;
    }
    async tryFetchUpdatedFallbackInfo(t, e, n, i) {
        try {
            if (!Fyy(n, i)) return !1;
            const s = e.customUrl == null && e.fallbackUrls == null ? await this._tryFetchFallbackUrlsFromNetwork(e) : e.fallbackUrls, o = this._pickNewFallbackUrl(this._fallbackInfo?.[e.endpoint], s);
            return o ? (this._updateFallbackInfoWithNewUrl(t, e, o), !0) : !1;
        } catch (r) {
            return this._errorBoundary?.logError("tryFetchUpdatedFallbackInfo", r), !1;
        }
    }
    _updateFallbackInfoWithNewUrl(t, e, n) {
        const i = {
            urlConfigChecksum: e.getChecksum(),
            url: n,
            expiryTime: Date.now() + vEo,
            previous: []
        }, r = e.endpoint, s = this._fallbackInfo?.[r];
        s && i.previous.push(...s.previous), i.previous.length > 10 && (i.previous = []);
        const o = this._fallbackInfo?.[r]?.url;
        o != null && i.previous.push(o), this._fallbackInfo = {
            ...this._fallbackInfo,
            [r]: i
        }, fEo(t, this._fallbackInfo);
    }
    async _tryFetchFallbackUrlsFromNetwork(t) {
        const e = this._dnsQueryCooldowns[t.endpoint];
        if (e && Date.now() < e) return null;
        this._dnsQueryCooldowns[t.endpoint] = Date.now() + MJu;
        const n = [], i = await Nyy(this._networkOverrideFunc ?? fetch), r = Uyy(t.defaultUrl);
        for (const s of i){
            if (!s.startsWith(t.endpointDnsKey + "=")) continue;
            const o = s.split("=");
            if (o.length > 1) {
                let a = o[1];
                a.endsWith("/") && (a = a.slice(0, -1)), n.push(`https://${a}${r}`);
            }
        }
        return n;
    }
    _pickNewFallbackUrl(t, e) {
        if (e == null) return null;
        const n = new Set(t?.previous ?? []), i = t?.url;
        let r = null;
        for (const s of e){
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
