import { vue } from "./InputGroup.js";
import { DDi } from "./intercept-text-editing-modifier-shortcut.js";
import { qRe } from "./popup-list.stylex.js";
import { E5 } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
var rBl, rTs, sBl, oBl, aBl;
export { aBl, oBl, rBl, rTs, sBl };
var __wakaru_cBl_initialized = false;
export function cBl() {
if (__wakaru_cBl_initialized) return;
__wakaru_cBl_initialized = true;
"use strict";
x(), E5(), Oc(), qRe(), vue(), DDi(), rBl = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, rTs = {
    inputGroup: {
        kOIVth: "ui-xhr3t",
        $$css: !0
    },
    inputRow: {
        kkrTdU: "ui-1ed109x",
        $$css: !0
    }
}, sBl = new Set([
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "Tab",
    "Escape"
]), oBl = [
    '[role="menuitem"]:not([data-disabled])',
    '[role="menuitemcheckbox"]:not([data-disabled])',
    '[role="menuitemradio"]:not([data-disabled])'
].join(","), aBl = '[role="menuitem"],[role="menuitemcheckbox"],[role="menuitemradio"]';

}
