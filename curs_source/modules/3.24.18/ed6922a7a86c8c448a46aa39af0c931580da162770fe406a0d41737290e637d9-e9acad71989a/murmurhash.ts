import { x } from "./tslib.es6.js";
var ehe;
export { ehe };
var __wakaru_KCt_initialized = false;
export function KCt() {
if (__wakaru_KCt_initialized) return;
__wakaru_KCt_initialized = true;
"use strict";
x(), ehe = class {
    static hash(e, t) {
        let n, i, r, a, c;
        n = e.length & 3;
        const l = e.length - n;
        for(i = t, c = 0; c < l;)a = e.charCodeAt(c) & 255 | (e.charCodeAt(++c) & 255) << 8 | (e.charCodeAt(++c) & 255) << 16 | (e.charCodeAt(++c) & 255) << 24, ++c, a = ((a & 65535) * 3432918353 + (((a >>> 16) * 3432918353 & 65535) << 16) & 4294967295) >>> 0, a = a << 15 | a >>> 17, a = ((a & 65535) * 461845907 + (((a >>> 16) * 461845907 & 65535) << 16) & 4294967295) >>> 0, i ^= a, i = i << 13 | i >>> 19, r = ((i & 65535) * 5 + (((i >>> 16) * 5 & 65535) << 16) & 4294967295) >>> 0, i = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16) >>> 0;
        return a = 0, n >= 3 && (a ^= (e.charCodeAt(c + 2) & 255) << 16), n >= 2 && (a ^= (e.charCodeAt(c + 1) & 255) << 8), n >= 1 && (a ^= e.charCodeAt(c) & 255, a = ((a & 65535) * 3432918353 + (((a >>> 16) * 3432918353 & 65535) << 16) & 4294967295) >>> 0, a = a << 15 | a >>> 17, a = ((a & 65535) * 461845907 + (((a >>> 16) * 461845907 & 65535) << 16) & 4294967295) >>> 0, i ^= a), i ^= e.length, i ^= i >>> 16, i = ((i & 65535) * 2246822507 + (((i >>> 16) * 2246822507 & 65535) << 16) & 4294967295) >>> 0, i ^= i >>> 13, i = ((i & 65535) * 3266489909 + (((i >>> 16) * 3266489909 & 65535) << 16) & 4294967295) >>> 0, i ^= i >>> 16, (i >>> 0).toString(16);
    }
};

}
