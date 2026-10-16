import { kYg } from "./Ycg.js";
import { gs } from "./codicons.js";
import { ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var mms, CYg, TYg, _Lk;
export { CYg, TYg, _Lk, mms };
var __wakaru_Ykl_initialized = false;
export function Ykl() {
if (__wakaru_Ykl_initialized) return;
__wakaru_Ykl_initialized = true;
"use strict";
E(), gs(), ta(), fn(), mms = {
    id: "loading~spin"
}, CYg = kYg("#424242"), TYg = kYg("#cccccc"), _Lk = {
    dark: rt.parse(`data:image/svg+xml;utf8,${encodeURIComponent(TYg)}`),
    light: rt.parse(`data:image/svg+xml;utf8,${encodeURIComponent(CYg)}`)
};

}
