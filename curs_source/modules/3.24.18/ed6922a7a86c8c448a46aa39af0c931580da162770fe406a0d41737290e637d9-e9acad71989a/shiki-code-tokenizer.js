import { Cys, FIi, GYe, Jzg, Qzg, Tys, Yxl, Zxl, aKg, cIl, eKg, fVg, oIl, oKg, qzg, zzg } from "./I0l.js";
import { zxi } from "./shiki-grammars.js";
import { Zzg, nIl } from "./shiki-incremental-tokenizer.js";
import { x } from "./tslib.es6.js";
var fIl, vIl;
export { fIl, vIl };
var __wakaru_cKg_initialized = false;
export function cKg() {
if (__wakaru_cKg_initialized) return;
__wakaru_cKg_initialized = true;
"use strict";
x(), zxi(), Zzg(), Zxl(), eKg(), oIl(), aKg(), fIl = {
    support: cIl,
    tokenize: (e, t)=>oKg().tokenizeStructured(e, t)
}, vIl = {
    languageStatus (e) {
        const t = GYe(e);
        return t === void 0 ? "no-grammar" : Cys(t) === void 0 ? "unloaded" : "loaded";
    },
    loadLanguage: Tys,
    onDidLoadLanguage: fVg,
    tokenizeSync: Yxl,
    createIncrementalTokenizer: (e)=>new nIl(e),
    warmup: {
        isWarm: qzg,
        warm: zzg
    },
    get offThread () {
        return FIi() ? fIl : void 0;
    },
    cache: {
        read: Qzg,
        write: Jzg
    }
};

}
