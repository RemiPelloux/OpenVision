import { x } from "./tslib.es6.js";
var _Re, k_n, PKe;
export { PKe, _Re, k_n };
var __wakaru_hSi_initialized = false;
export function hSi() {
if (__wakaru_hSi_initialized) return;
__wakaru_hSi_initialized = true;
"use strict";
x(), _Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), k_n = [];
for(let e = 0; e < _Re.length; e++)k_n[_Re[e].charCodeAt(0)] = e;
k_n[45] = _Re.indexOf("+"), k_n[95] = _Re.indexOf("/"), PKe = {
    dec (e) {
        let t = e.length * 3 / 4;
        e[e.length - 2] == "=" ? t -= 2 : e[e.length - 1] == "=" && (t -= 1);
        let n = new Uint8Array(t), i = 0, r = 0, s, o = 0;
        for(let a = 0; a < e.length; a++){
            if (s = k_n[e.charCodeAt(a)], s === void 0) switch(e[a]){
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
    enc (e) {
        let t = "", n = 0, i, r = 0;
        for(let s = 0; s < e.length; s++)switch(i = e[s], n){
            case 0:
                t += _Re[i >> 2], r = (i & 3) << 4, n = 1;
                break;
            case 1:
                t += _Re[r | i >> 4], r = (i & 15) << 2, n = 2;
                break;
            case 2:
                t += _Re[r | i >> 6], t += _Re[i & 63], n = 0;
                break;
        }
        return n && (t += _Re[r], t += "=", n == 1 && (t += "=")), t;
    }
};

}
