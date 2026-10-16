import { Mto, Tfd, cyv, lyv, vHi } from "./A3u.js";
import { nHi } from "./CacheKey.js";
import { Pee } from "./Log_3.js";
import { VSt } from "./SafeJs.js";
import { DJe } from "./StorageProvider.js";
import { Dto } from "./UUID_2.js";
import { x } from "./tslib.es6.js";
var SHt, _Hi, Pto, QMe;
export { Pto, QMe, SHt, _Hi };
var __wakaru_bHi_initialized = false;
export function bHi() {
if (__wakaru_bHi_initialized) return;
__wakaru_bHi_initialized = true;
"use strict";
x(), nHi(), Pee(), VSt(), DJe(), Dto(), SHt = {}, _Hi = {}, Pto = {}, QMe = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (e)=>{
        if (Pto[e]) return null;
        if (SHt[e] != null) return SHt[e];
        let t = null;
        return t = lyv(e), t != null ? (SHt[e] = t, Mto(t, e), t) : (t = cyv(e), t == null && (t = vHi()), Mto(t, e), Tfd(t, e), SHt[e] = t, t);
    },
    setOverride: (e, t)=>{
        SHt[t] = e, Mto(e, t), Tfd(e, t);
    },
    _setCookiesEnabled: (e, t)=>{
        _Hi[e] = t;
    },
    _setDisabled: (e, t)=>{
        Pto[e] = t;
    }
};

}
