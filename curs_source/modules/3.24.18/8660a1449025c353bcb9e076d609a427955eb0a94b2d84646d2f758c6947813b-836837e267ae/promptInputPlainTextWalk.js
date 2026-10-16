import { jo1 } from "./promptInputListMarkers.js";
import { E } from "./tslib.es6.js";
var bIa, yIa;
export { bIa, yIa };
var __wakaru_SIa_initialized = false;
export function SIa() {
if (__wakaru_SIa_initialized) return;
__wakaru_SIa_initialized = true;
"use strict";
E(), jo1(), bIa = {
    typeName (t) {
        return t.type.name;
    },
    attrs (t) {
        return t.attrs;
    },
    forEachChild (t, e) {
        t.forEach((n, i)=>{
            e(n, i);
        });
    }
}, yIa = {
    typeName (t) {
        return t.type ?? "";
    },
    attrs (t) {
        return t.attrs;
    },
    forEachChild (t, e) {
        for (const n of t.content ?? [])e(n, 0);
    }
};

}
