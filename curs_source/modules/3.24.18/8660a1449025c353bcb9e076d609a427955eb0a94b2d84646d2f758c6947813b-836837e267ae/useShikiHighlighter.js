import { Q3r, cUt, tNr } from "./KTh.js";
import { Eit } from "./code-token.js";
import { RE1, i2p, n2p, t2p } from "./ipa.js";
import { tUt } from "./shiki-grammars.js";
import { E } from "./tslib.es6.js";
var KMa, r2p, s2p;
export { KMa, r2p, s2p };
var __wakaru_NE1_initialized = false;
export function NE1() {
if (__wakaru_NE1_initialized) return;
__wakaru_NE1_initialized = true;
"use strict";
E(), Eit(), tUt(), Q3r(), tNr(), KMa = {
    tokenize: t2p,
    tokenizeLines: n2p,
    tokenizeStructured: i2p,
    tokenizeStructuredSync: cUt,
    isAvailable: !1
}, Object.defineProperty(KMa, "isAvailable", {
    get: RE1,
    enumerable: !0,
    configurable: !0
}), r2p = {
    tokenize: t2p,
    tokenizeLines: n2p,
    tokenizeStructured: i2p,
    tokenizeStructuredSync: cUt,
    isAvailable: !1
}, s2p = ()=>{};

}
