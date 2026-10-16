import { E } from "./tslib.es6.js";
import { AC, fP, pi } from "./ze.js";
var kus, t1;
export { kus, t1 };
var __wakaru_cI_initialized = false;
export function cI() {
if (__wakaru_cI_initialized) return;
__wakaru_cI_initialized = true;
"use strict";
E(), pi(), kus = fP(null), t1 = ()=>{
    const t = AC(kus);
    if (!t) throw Error("useLexicalComposerContext: cannot find a LexicalComposerContext");
    return t;
};

}
