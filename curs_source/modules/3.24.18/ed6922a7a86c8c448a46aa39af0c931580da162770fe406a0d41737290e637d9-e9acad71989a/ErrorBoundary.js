import { Lfd, Pfd, hyv, myv, pyv } from "./A3u.js";
import { $E, Pee } from "./Log_3.js";
import { Fto, aLn } from "./SDKType.js";
import { Rto, fHi } from "./StatsigMetadata.js";
import { x } from "./tslib.es6.js";
var Nfd, Bto, Ofd;
export { Bto, Nfd, Ofd };
var __wakaru_Ffd_initialized = false;
export function Ffd() {
if (__wakaru_Ffd_initialized) return;
__wakaru_Ffd_initialized = true;
"use strict";
x(), Pee(), Fto(), fHi(), Nfd = "https://statsigapi.net/v1/sdk_exception", Bto = "[Statsig] UnknownError", Ofd = class {
    constructor(e, t, n, i){
        this._sdkKey = e, this._options = t, this._emitter = n, this._lastSeenError = i, this._seen = new Set;
    }
    wrap(e) {
        try {
            const t = e;
            pyv(t).forEach((n)=>{
                const i = t[n];
                "$EB" in i || (t[n] = (...r)=>this._capture(n, ()=>i.apply(e, r)), t[n].$EB = !0);
            });
        } catch (t) {
            this._onError("eb:wrap", t);
        }
    }
    logError(e, t) {
        this._onError(e, t);
    }
    getLastSeenErrorAndReset() {
        const e = this._lastSeenError;
        return this._lastSeenError = void 0, e ?? null;
    }
    attachErrorIfNoneExists(e) {
        this._lastSeenError || (this._lastSeenError = Lfd(Pfd(e)));
    }
    _capture(e, t) {
        try {
            const n = t();
            return n && n instanceof Promise ? n.catch((i)=>this._onError(e, i)) : n;
        } catch (n) {
            return this._onError(e, n), null;
        }
    }
    _onError(e, t) {
        try {
            $E.warn(`Caught error in ${e}`, {
                error: t
            }), (async ()=>{
                const i = t || Error(Bto), r = i instanceof Error, s = r ? i.name : "No Name";
                if (this._lastSeenError = Lfd(Pfd(i)), this._seen.has(s)) return;
                if (this._seen.add(s), this._options?.networkConfig?.preventAllNetworkTraffic) {
                    this._emitter?.({
                        name: "error",
                        error: t,
                        tag: e
                    });
                    return;
                }
                const o = aLn._get(this._sdkKey), a = Rto.get(), c = r ? i.stack : hyv(i), l = {
                    tag: e,
                    exception: s,
                    info: c,
                    statsigOptions: myv(this._options),
                    ...a,
                    sdkType: o
                };
                await (this._options?.networkConfig?.networkOverrideFunc ?? fetch)(Nfd, {
                    method: "POST",
                    headers: {
                        "STATSIG-API-KEY": this._sdkKey,
                        "STATSIG-SDK-TYPE": String(o),
                        "STATSIG-SDK-VERSION": String(a.sdkVersion),
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(l)
                }), this._emitter?.({
                    name: "error",
                    error: t,
                    tag: e
                });
            })().then(()=>{}).catch(()=>{});
        } catch  {}
    }
};

}
