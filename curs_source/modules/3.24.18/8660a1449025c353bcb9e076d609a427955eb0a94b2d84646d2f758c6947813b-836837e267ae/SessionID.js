import { r_t } from "./$_StatsigGlobal.js";
import { agr } from "./CacheKey.js";
import { Nde } from "./Log_2.js";
import { $yy, Hyy, Wyy } from "./SZu.js";
import { a_t } from "./StorageProvider.js";
import { lEo } from "./UUID.js";
import { E } from "./tslib.es6.js";
var yEo, SEo, LZn, kEo, Egr;
export { Egr, LZn, SEo, kEo, yEo };
var __wakaru_wEo_initialized = false;
export function wEo() {
if (__wakaru_wEo_initialized) return;
__wakaru_wEo_initialized = true;
"use strict";
E(), r_t(), agr(), Nde(), a_t(), lEo(), yEo = 1800 * 1e3, SEo = 14400 * 1e3, LZn = {}, kEo = {
    get: (t)=>Egr.get(t).data.sessionID
}, Egr = {
    get: (t)=>{
        LZn[t] == null && (LZn[t] = $yy(t));
        const e = LZn[t];
        return Wyy(e);
    },
    overrideInitialSessionID: (t, e)=>{
        LZn[e] = Hyy(t, e);
    }
};

}
