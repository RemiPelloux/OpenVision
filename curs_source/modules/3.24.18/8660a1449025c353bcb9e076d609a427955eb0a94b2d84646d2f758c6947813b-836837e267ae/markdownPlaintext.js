import { Fa } from "./Iwo.js";
import { ES, hP } from "./lazy.js";
import { E } from "./tslib.es6.js";
import { KWd, eTr, lGo } from "./ze.js";
var ZWd, QWd, JWd, eGd, tGd;
export { JWd, QWd, ZWd, eGd, tGd };
var __wakaru_Gsi_initialized = false;
export function Gsi() {
if (__wakaru_Gsi_initialized) return;
__wakaru_Gsi_initialized = true;
"use strict";
E(), hP(), lGo(), Fa(), ZWd = new Map([
    [
        "&quot;",
        '"'
    ],
    [
        "&nbsp;",
        " "
    ],
    [
        "&amp;",
        "&"
    ],
    [
        "&#39;",
        "'"
    ],
    [
        "&lt;",
        "<"
    ],
    [
        "&gt;",
        ">"
    ]
]), QWd = new ES(()=>eTr(!1)), JWd = new ES(()=>KWd(eTr(!1))), eGd = new ES(()=>eTr(!0)), tGd = new ES(()=>KWd(eTr(!0)));

}
