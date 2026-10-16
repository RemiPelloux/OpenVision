import { A4r, D4r, G4r, Ghe, L4r, LOt, N4r, T4r, TOt, U4r, U5i, W5i, ekr, s$, vRe, xRe } from "./Iwr.js";
import { i } from "./plugin-brand-icon.js";
import { CRe } from "./shiki-grammars.ts";
import { j4r, q5i } from "./shiki-incremental-tokenizer.ts";
var X4r, Y4r;
export { X4r, Y4r };
var __wakaru_H5i_initialized = false;
export function H5i() {
if (__wakaru_H5i_initialized) return;
__wakaru_H5i_initialized = true;
"use strict";
CRe(), q5i(), N4r(), U5i(), U4r(), W5i(), X4r = {
    support: LOt,
    tokenize: i((r, e)=>G4r().tokenizeStructured(r, e), "tokenize")
}, Y4r = {
    languageStatus (r) {
        const e = s$(r);
        return e === void 0 ? "no-grammar" : vRe(e) === void 0 ? "unloaded" : "loaded";
    },
    loadLanguage: xRe,
    onDidLoadLanguage: ekr,
    tokenizeSync: TOt,
    createIncrementalTokenizer: i((r)=>new j4r(r), "createIncrementalTokenizer"),
    warmup: {
        isWarm: A4r,
        warm: T4r
    },
    get offThread () {
        return Ghe() ? X4r : void 0;
    },
    cache: {
        read: L4r,
        write: D4r
    }
};

}
