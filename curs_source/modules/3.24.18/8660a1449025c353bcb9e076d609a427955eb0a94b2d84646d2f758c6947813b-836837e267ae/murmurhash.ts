import { E } from "./tslib.es6.js";
var tTe;
export { tTe };
var __wakaru_wVt_initialized = false;
export function wVt() {
if (__wakaru_wVt_initialized) return;
__wakaru_wVt_initialized = true;
"use strict";
E(), tTe = class {
    static hash(t, e) {
        let n, i, r, a, l;
        n = t.length & 3;
        const c = t.length - n;
        for(i = e, l = 0; l < c;)a = t.charCodeAt(l) & 255 | (t.charCodeAt(++l) & 255) << 8 | (t.charCodeAt(++l) & 255) << 16 | (t.charCodeAt(++l) & 255) << 24, ++l, a = ((a & 65535) * 3432918353 + (((a >>> 16) * 3432918353 & 65535) << 16) & 4294967295) >>> 0, a = a << 15 | a >>> 17, a = ((a & 65535) * 461845907 + (((a >>> 16) * 461845907 & 65535) << 16) & 4294967295) >>> 0, i ^= a, i = i << 13 | i >>> 19, r = ((i & 65535) * 5 + (((i >>> 16) * 5 & 65535) << 16) & 4294967295) >>> 0, i = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16) >>> 0;
        return a = 0, n >= 3 && (a ^= (t.charCodeAt(l + 2) & 255) << 16), n >= 2 && (a ^= (t.charCodeAt(l + 1) & 255) << 8), n >= 1 && (a ^= t.charCodeAt(l) & 255, a = ((a & 65535) * 3432918353 + (((a >>> 16) * 3432918353 & 65535) << 16) & 4294967295) >>> 0, a = a << 15 | a >>> 17, a = ((a & 65535) * 461845907 + (((a >>> 16) * 461845907 & 65535) << 16) & 4294967295) >>> 0, i ^= a), i ^= t.length, i ^= i >>> 16, i = ((i & 65535) * 2246822507 + (((i >>> 16) * 2246822507 & 65535) << 16) & 4294967295) >>> 0, i ^= i >>> 13, i = ((i & 65535) * 3266489909 + (((i >>> 16) * 3266489909 & 65535) << 16) & 4294967295) >>> 0, i ^= i >>> 16, (i >>> 0).toString(16);
    }
};

}
