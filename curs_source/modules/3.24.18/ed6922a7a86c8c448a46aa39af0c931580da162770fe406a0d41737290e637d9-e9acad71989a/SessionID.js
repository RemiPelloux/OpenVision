import { IJe } from "./$_StatsigGlobal.js";
import { Eyv, Iyv, xyv } from "./A3u.js";
import { nHi } from "./CacheKey.js";
import { Pee } from "./Log_3.js";
import { DJe } from "./StorageProvider.js";
import { Dto } from "./UUID_2.js";
import { x } from "./tslib.es6.js";
var Gto, Vto, cLn, jto, SHi;
export { Gto, SHi, Vto, cLn, jto };
var __wakaru_qto_initialized = false;
export function qto() {
if (__wakaru_qto_initialized) return;
__wakaru_qto_initialized = true;
"use strict";
x(), IJe(), nHi(), Pee(), DJe(), Dto(), Gto = 1800 * 1e3, Vto = 14400 * 1e3, cLn = {}, jto = {
    get: (e)=>SHi.get(e).data.sessionID
}, SHi = {
    get: (e)=>{
        cLn[e] == null && (cLn[e] = Eyv(e));
        const t = cLn[e];
        return Iyv(t);
    },
    overrideInitialSessionID: (e, t)=>{
        cLn[t] = xyv(e, t);
    }
};

}
