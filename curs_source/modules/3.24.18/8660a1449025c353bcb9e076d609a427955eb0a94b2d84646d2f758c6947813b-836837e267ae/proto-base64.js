import { E } from "./tslib.es6.js";
var T$e, MJn, N_t;
export { MJn, N_t, T$e };
var __wakaru_V_r_initialized = false;
export function V_r() {
if (__wakaru_V_r_initialized) return;
__wakaru_V_r_initialized = true;
"use strict";
E(), T$e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), MJn = [];
for(let t = 0; t < T$e.length; t++)MJn[T$e[t].charCodeAt(0)] = t;
MJn[45] = T$e.indexOf("+"), MJn[95] = T$e.indexOf("/"), N_t = {
    dec (t) {
        let e = t.length * 3 / 4;
        t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
        let n = new Uint8Array(e), i = 0, r = 0, s, o = 0;
        for(let a = 0; a < t.length; a++){
            if (s = MJn[t.charCodeAt(a)], s === void 0) switch(t[a]){
                case "=":
                    r = 0;
                case `
`:
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(r){
                case 0:
                    o = s, r = 1;
                    break;
                case 1:
                    n[i++] = o << 2 | (s & 48) >> 4, o = s, r = 2;
                    break;
                case 2:
                    n[i++] = (o & 15) << 4 | (s & 60) >> 2, o = s, r = 3;
                    break;
                case 3:
                    n[i++] = (o & 3) << 6 | s, r = 0;
                    break;
            }
        }
        if (r == 1) throw Error("invalid base64 string.");
        return n.subarray(0, i);
    },
    enc (t) {
        let e = "", n = 0, i, r = 0;
        for(let s = 0; s < t.length; s++)switch(i = t[s], n){
            case 0:
                e += T$e[i >> 2], r = (i & 3) << 4, n = 1;
                break;
            case 1:
                e += T$e[r | i >> 4], r = (i & 15) << 2, n = 2;
                break;
            case 2:
                e += T$e[r | i >> 6], e += T$e[i & 63], n = 0;
                break;
        }
        return n && (e += T$e[r], e += "=", n == 1 && (e += "=")), e;
    }
};

}
