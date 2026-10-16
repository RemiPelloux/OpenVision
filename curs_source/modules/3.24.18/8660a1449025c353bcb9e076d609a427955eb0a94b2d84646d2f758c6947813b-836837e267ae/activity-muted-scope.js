import { qu } from "./attach.js";
import { E } from "./tslib.es6.js";
import { createContext as hDS } from "./react-runtime/react/esm-index-production.js";
var gba, fba;
export { fba, gba };
var __wakaru_vba_initialized = false;
export function vba() {
if (__wakaru_vba_initialized) return;
__wakaru_vba_initialized = true;
"use strict";
E(), qu(), gba = {
    outer: {
        "--cursor-text-secondary": "ui-141d2oo",
        $$css: !0
    },
    inner: {
        "--cursor-text-tertiary": "ui-7osuvz",
        $$css: !0
    }
}, fba = hDS(!1);

}
