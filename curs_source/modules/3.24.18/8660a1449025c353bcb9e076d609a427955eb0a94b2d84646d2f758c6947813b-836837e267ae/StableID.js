import { agr } from "./CacheKey.js";
import { Nde } from "./Log_2.js";
import { Cyy, cEo, dJu, kgr, wyy } from "./SZu.js";
import { I6t } from "./SafeJs.js";
import { a_t } from "./StorageProvider.js";
import { lEo } from "./UUID.js";
import { E } from "./tslib.es6.js";
var Jdn, wgr, uEo, h$e;
export { Jdn, h$e, uEo, wgr };
var __wakaru_Cgr_initialized = false;
export function Cgr() {
if (__wakaru_Cgr_initialized) return;
__wakaru_Cgr_initialized = true;
"use strict";
E(), agr(), Nde(), I6t(), a_t(), lEo(), Jdn = {}, wgr = {}, uEo = {}, h$e = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (t)=>{
        if (uEo[t]) return null;
        if (Jdn[t] != null) return Jdn[t];
        let e = null;
        return e = Cyy(t), e != null ? (Jdn[t] = e, cEo(e, t), e) : (e = wyy(t), e == null && (e = kgr()), cEo(e, t), dJu(e, t), Jdn[t] = e, e);
    },
    setOverride: (t, e)=>{
        Jdn[e] = t, cEo(t, e), dJu(t, e);
    },
    _setCookiesEnabled: (t, e)=>{
        wgr[t] = e;
    },
    _setDisabled: (t, e)=>{
        uEo[t] = e;
    }
};

}
