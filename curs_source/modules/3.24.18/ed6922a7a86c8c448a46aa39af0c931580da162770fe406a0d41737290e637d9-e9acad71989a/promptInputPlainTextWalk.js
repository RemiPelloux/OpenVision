import { PVf } from "./promptInputListMarkers.js";
import { x } from "./tslib.es6.js";
var FNs, $iu;
export { $iu, FNs };
var __wakaru_BNs_initialized = false;
export function BNs() {
if (__wakaru_BNs_initialized) return;
__wakaru_BNs_initialized = true;
"use strict";
x(), PVf(), FNs = {
    typeName (e) {
        return e.type.name;
    },
    attrs (e) {
        return e.attrs;
    },
    forEachChild (e, t) {
        e.forEach((n, i)=>{
            t(n, i);
        });
    }
}, $iu = {
    typeName (e) {
        return e.type ?? "";
    },
    attrs (e) {
        return e.attrs;
    },
    forEachChild (e, t) {
        for (const n of e.content ?? [])t(n, 0);
    }
};

}
