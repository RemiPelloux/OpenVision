import { ARh, CRh, Kla, Q3r, SlS, TlS, cUt, eUt, fIh, hUt, kRh, kdi, l3r, tNr, xit, ylS } from "./KTh.js";
import { tUt } from "./shiki-grammars.js";
import { J3r, Wla } from "./shiki-incremental-tokenizer.js";
import { E } from "./tslib.es6.js";
var ORh, FRh;
export { FRh, ORh };
var __wakaru_MlS_initialized = false;
export function MlS() {
if (__wakaru_MlS_initialized) return;
__wakaru_MlS_initialized = true;
"use strict";
E(), tUt(), Wla(), Q3r(), CRh(), Kla(), tNr(), ORh = {
    support: ARh,
    tokenize: (t, e)=>hUt().tokenizeStructured(t, e)
}, FRh = {
    languageStatus (t) {
        const e = xit(t);
        return e === void 0 ? "no-grammar" : l3r(e) === void 0 ? "unloaded" : "loaded";
    },
    loadLanguage: eUt,
    onDidLoadLanguage: fIh,
    tokenizeSync: cUt,
    createIncrementalTokenizer: (t)=>new J3r(t),
    warmup: {
        isWarm: ylS,
        warm: SlS
    },
    get offThread () {
        return kdi() ? ORh : void 0;
    },
    cache: {
        read: kRh,
        write: TlS
    }
};

}
