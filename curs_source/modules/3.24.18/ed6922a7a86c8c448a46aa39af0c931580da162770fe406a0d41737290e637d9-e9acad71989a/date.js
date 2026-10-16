import { K3e, jn } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var zht, Kht, tze, oXr, aXr, cXr, nze;
export { Kht, aXr, cXr, nze, oXr, tze, zht };
var __wakaru_X9_initialized = false;
export function X9() {
if (__wakaru_X9_initialized) return;
__wakaru_X9_initialized = true;
"use strict";
x(), rt(), jn(), zht = 60, Kht = zht * 60, tze = Kht * 24, oXr = tze * 7, aXr = tze * 30, cXr = tze * 365, nze = {
    DateTimeFormat (e, t) {
        try {
            return new Intl.DateTimeFormat(e, t);
        } catch  {
            return new Intl.DateTimeFormat(void 0, t);
        }
    },
    Collator (e, t) {
        try {
            return new Intl.Collator(e, t);
        } catch  {
            return new Intl.Collator(void 0, t);
        }
    },
    Segmenter (e, t) {
        try {
            return new Intl.Segmenter(e, t);
        } catch  {
            return new Intl.Segmenter(void 0, t);
        }
    },
    Locale (e, t) {
        try {
            return new Intl.Locale(e, t);
        } catch  {
            return new Intl.Locale(K3e, t);
        }
    }
};

}
