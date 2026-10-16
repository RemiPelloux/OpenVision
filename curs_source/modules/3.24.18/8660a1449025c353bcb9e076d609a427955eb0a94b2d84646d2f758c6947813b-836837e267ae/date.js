import { Di, met } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var x9t, A9t, Nbt, J7o, eUo, tUo, R9t;
export { A9t, J7o, Nbt, R9t, eUo, tUo, x9t };
var __wakaru_yY_initialized = false;
export function yY() {
if (__wakaru_yY_initialized) return;
__wakaru_yY_initialized = true;
"use strict";
E(), Bt(), Di(), x9t = 60, A9t = x9t * 60, Nbt = A9t * 24, J7o = Nbt * 7, eUo = Nbt * 30, tUo = Nbt * 365, R9t = {
    DateTimeFormat (t, e) {
        try {
            return new Intl.DateTimeFormat(t, e);
        } catch  {
            return new Intl.DateTimeFormat(void 0, e);
        }
    },
    Collator (t, e) {
        try {
            return new Intl.Collator(t, e);
        } catch  {
            return new Intl.Collator(void 0, e);
        }
    },
    Segmenter (t, e) {
        try {
            return new Intl.Segmenter(t, e);
        } catch  {
            return new Intl.Segmenter(void 0, e);
        }
    },
    Locale (t, e) {
        try {
            return new Intl.Locale(t, e);
        } catch  {
            return new Intl.Locale(met, e);
        }
    }
};

}
