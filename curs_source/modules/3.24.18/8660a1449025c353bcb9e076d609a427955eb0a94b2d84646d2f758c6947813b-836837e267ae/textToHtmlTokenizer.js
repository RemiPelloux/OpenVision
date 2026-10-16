import { Fa } from "./Iwo.js";
import { Cw } from "./charCode.js";
import { Iy } from "./languages.js";
import { SY } from "./lineTokens.js";
import { d$o, u$o } from "./nullTokenize.js";
import { E } from "./tslib.es6.js";
import { c$o } from "./ze.js";
var $$o;
export { $$o };
var __wakaru_rUd_initialized = false;
export function rUd() {
if (__wakaru_rUd_initialized) return;
__wakaru_rUd_initialized = true;
"use strict";
E(), Cw(), Fa(), SY(), Iy(), d$o(), $$o = {
    getInitialState: ()=>u$o,
    tokenizeEncoded: (t, e, n)=>c$o(0, n)
};

}
