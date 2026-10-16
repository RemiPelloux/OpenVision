import { h } from "./tslib.es6.js";
var eE;
export { eE };
var __wakaru_ml_initialized = false;
export function ml() {
if (__wakaru_ml_initialized) return;
__wakaru_ml_initialized = true;
"use strict";
h(), eE = class {
    static hash(e, t) {
        let n, r, s, o, l;
        n = e.length & 3;
        const d = e.length - n;
        for(r = t, l = 0; l < d;)o = e.charCodeAt(l) & 255 | (e.charCodeAt(++l) & 255) << 8 | (e.charCodeAt(++l) & 255) << 16 | (e.charCodeAt(++l) & 255) << 24, ++l, o = ((o & 65535) * 3432918353 + (((o >>> 16) * 3432918353 & 65535) << 16) & 4294967295) >>> 0, o = o << 15 | o >>> 17, o = ((o & 65535) * 461845907 + (((o >>> 16) * 461845907 & 65535) << 16) & 4294967295) >>> 0, r ^= o, r = r << 13 | r >>> 19, s = ((r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295) >>> 0, r = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16) >>> 0;
        return o = 0, n >= 3 && (o ^= (e.charCodeAt(l + 2) & 255) << 16), n >= 2 && (o ^= (e.charCodeAt(l + 1) & 255) << 8), n >= 1 && (o ^= e.charCodeAt(l) & 255, o = ((o & 65535) * 3432918353 + (((o >>> 16) * 3432918353 & 65535) << 16) & 4294967295) >>> 0, o = o << 15 | o >>> 17, o = ((o & 65535) * 461845907 + (((o >>> 16) * 461845907 & 65535) << 16) & 4294967295) >>> 0, r ^= o), r ^= e.length, r ^= r >>> 16, r = ((r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295) >>> 0, r ^= r >>> 13, r = ((r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295) >>> 0, r ^= r >>> 16, (r >>> 0).toString(16);
    }
};

}
