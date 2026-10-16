import { IJe, uto } from "./$_StatsigGlobal.js";
import { Fyv, Jfd, Lyv, Nyv, Oyv, Pyv } from "./A3u.js";
import { gto } from "./Diagnostics.js";
import { $E, Pee } from "./Log_3.js";
import { Q4e, bde, iHi } from "./NetworkConfig.js";
import { Tyv, zfd } from "./NetworkFallbackResolver.js";
import { Kfd } from "./SDKFlags.js";
import { Fto, aLn } from "./SDKType.js";
import { GSt, VSt } from "./SafeJs.js";
import { jto, qto } from "./SessionID.js";
import { QMe, bHi } from "./StableID.js";
import { Qfd, Zfd } from "./StatsigClientEventEmitter.js";
import { Rto, fHi, mHi } from "./StatsigMetadata.js";
import { RJe, nLn } from "./StatsigOptionsCommon.js";
import { Ito, rLn } from "./VisibilityObserving.js";
import { x } from "./tslib.es6.js";
var evd, tvd, nvd, ivd, zto, rvd, svd, ovd, Kto, avd;
export { Kto, avd, evd, ivd, nvd, ovd, rvd, svd, tvd, zto };
var __wakaru_Byv_initialized = false;
export function Byv() {
if (__wakaru_Byv_initialized) return;
__wakaru_Byv_initialized = true;
"use strict";
x(), IJe(), IJe(), gto(), Pee(), iHi(), Tyv(), Kfd(), Fto(), VSt(), qto(), bHi(), Qfd(), fHi(), nLn(), Ito(), evd = 1e4, tvd = 500, nvd = 3e4, ivd = 1e3, zto = 50, rvd = zto / ivd, svd = new Set([
    408,
    500,
    502,
    503,
    504,
    522,
    524,
    599
]), ovd = class {
    constructor(e, t){
        this._emitter = t, this._errorBoundary = null, this._timeout = evd, this._netConfig = {}, this._options = {}, this._leakyBucket = {}, this._lastUsedInitUrl = null, e && (this._options = e), this._options.networkConfig && (this._netConfig = this._options.networkConfig), this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs), this._fallbackResolver = new zfd(this._options), this.setLogEventCompressionMode(this._getLogEventCompressionMode(e));
    }
    setLogEventCompressionMode(e) {
        this._options.logEventCompressionMode = e;
    }
    setErrorBoundary(e) {
        this._errorBoundary = e, this._errorBoundary.wrap(this), this._errorBoundary.wrap(this._fallbackResolver), this._fallbackResolver.setErrorBoundary(e);
    }
    isBeaconSupported() {
        return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
        const e = this._lastUsedInitUrl;
        return this._lastUsedInitUrl = null, e;
    }
    beacon(e) {
        if (!Kto(e)) return !1;
        const t = this._getInternalRequestArgs("POST", e), n = this._getPopulatedURL(t), i = navigator;
        return i.sendBeacon.bind(i)(n, t.body);
    }
    async post(e) {
        const t = this._getInternalRequestArgs("POST", e);
        return this._tryEncodeBody(t), await this._tryToCompressBody(t), this._sendRequest(t);
    }
    get(e) {
        const t = this._getInternalRequestArgs("GET", e);
        return this._sendRequest(t);
    }
    async _sendRequest(e) {
        if (!Kto(e) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: t, body: n, retries: i, attempt: r } = e, s = e.urlConfig.endpoint;
        if (this._isRateLimited(s)) return $E.warn(`Request to ${s} was blocked because you are making requests too frequently.`), null;
        const o = r ?? 1, a = typeof AbortController < "u" ? new AbortController : null, c = setTimeout(()=>{
            a?.abort(`Timeout of ${this._timeout}ms expired.`);
        }, this._timeout), l = this._getPopulatedURL(e);
        let u = null;
        const h = rLn();
        try {
            const p = {
                method: t,
                body: n,
                headers: {
                    ...e.headers
                },
                signal: a?.signal,
                priority: e.priority,
                keepalive: h
            };
            Oyv(e, o);
            const g = this._leakyBucket[s];
            if (g && (g.lastRequestTime = Date.now(), this._leakyBucket[s] = g), u = await (this._netConfig.networkOverrideFunc ?? fetch)(l, p), clearTimeout(c), !u.ok) {
                const b = await u.text().catch(()=>"No Text"), y = new Error(`NetworkError: ${l} ${b}`);
                throw y.name = "NetworkError", y;
            }
            const v = await u.text();
            return Jfd(e, u, o, v), this._fallbackResolver.tryBumpExpiryTime(e.sdkKey, e.urlConfig), {
                body: v,
                code: u.status
            };
        } catch (p) {
            const g = Lyv(a, p), f = Nyv(a);
            if (Jfd(e, u, o, "", p), await this._fallbackResolver.tryFetchUpdatedFallbackInfo(e.sdkKey, e.urlConfig, g, f) && (e.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(e.sdkKey, e.urlConfig)), !i || o > i || !svd.has(u?.status ?? 500)) {
                this._emitter?.({
                    name: "error",
                    error: p,
                    tag: Zfd.NetworkError,
                    requestArgs: e
                });
                const b = `A networking error occurred during ${t} request to ${l}.`;
                return $E.error(b, g, p), this._errorBoundary?.attachErrorIfNoneExists(b), null;
            }
            return await Fyv(o), this._sendRequest({
                ...e,
                retries: i,
                attempt: o + 1
            });
        }
    }
    _getLogEventCompressionMode(e) {
        let t = e?.logEventCompressionMode;
        return !t && e?.disableCompression === !0 && (t = RJe.Disabled), t || (t = RJe.Enabled), t;
    }
    _isRateLimited(e) {
        const t = Date.now(), n = this._leakyBucket[e] ?? {
            count: 0,
            lastRequestTime: t
        }, i = t - n.lastRequestTime, r = Math.floor(i * rvd);
        return n.count = Math.max(0, n.count - r), n.count >= zto ? !0 : (n.count += 1, n.lastRequestTime = t, this._leakyBucket[e] = n, !1);
    }
    _getPopulatedURL(e) {
        const t = e.fallbackUrl ?? e.urlConfig.getUrl();
        (e.urlConfig.endpoint === bde._initialize || e.urlConfig.endpoint === bde._download_config_specs) && (this._lastUsedInitUrl = t);
        const n = {
            [Q4e.SdkKey]: e.sdkKey,
            [Q4e.SdkType]: aLn._get(e.sdkKey),
            [Q4e.SdkVersion]: mHi,
            [Q4e.Time]: String(Date.now()),
            [Q4e.SessionID]: jto.get(e.sdkKey),
            ...e.params
        }, i = Object.keys(n).map((r)=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&");
        return `${t}${i ? `?${i}` : ""}`;
    }
    _tryEncodeBody(e) {
        const t = GSt(), n = e.body;
        if (!(!e.isStatsigEncodable || this._options.disableStatsigEncoding || typeof n != "string" || uto("no-encode") != null || !t?.btoa)) try {
            e.body = t.btoa(n).split("").reverse().join(""), e.params = {
                ...e.params ?? {},
                [Q4e.StatsigEncoded]: "1"
            };
        } catch (i) {
            $E.warn(`Request encoding failed for ${e.urlConfig.getUrl()}`, i);
        }
    }
    async _tryToCompressBody(e) {
        const t = e.body;
        if (!(typeof t != "string" || !Pyv(e, this._options))) try {
            const n = new TextEncoder().encode(t), i = new CompressionStream("gzip"), r = i.writable.getWriter();
            r.write(n).catch($E.error), r.close().catch($E.error);
            const s = i.readable.getReader(), o = [];
            let a;
            for(; !(a = await s.read()).done;)o.push(a.value);
            const c = o.reduce((h, p)=>h + p.length, 0), l = new Uint8Array(c);
            let u = 0;
            for (const h of o)l.set(h, u), u += h.length;
            e.body = l, e.params = {
                ...e.params ?? {},
                [Q4e.IsGzipped]: "1"
            };
        } catch (n) {
            $E.warn(`Request compression failed for ${e.urlConfig.getUrl()}`, n);
        }
    }
    _getInternalRequestArgs(e, t) {
        const n = this._fallbackResolver.getActiveFallbackUrl(t.sdkKey, t.urlConfig), i = {
            ...t,
            method: e,
            fallbackUrl: n
        };
        return "data" in t && avd(i, t.data), i;
    }
}, Kto = (e)=>e.sdkKey ? !0 : ($E.warn("Unable to make request without an SDK key"), !1), avd = (e, t)=>{
    const { sdkKey: n, fallbackUrl: i } = e, r = QMe.get(n), s = jto.get(n), o = aLn._get(n);
    e.body = JSON.stringify({
        ...t,
        statsigMetadata: {
            ...Rto.get(),
            stableID: r,
            sessionID: s,
            sdkType: o,
            fallbackUrl: i
        }
    });
};

}
