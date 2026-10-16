import { h } from "./tslib.es6.js";
var ji, Eh, zd;
export { Eh, ji, zd };
var __wakaru_IM_initialized = false;
export function IM() {
if (__wakaru_IM_initialized) return;
__wakaru_IM_initialized = true;
"use strict";
h(), ji = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Eh = [];
for(let e = 0; e < ji.length; e++)Eh[ji[e].charCodeAt(0)] = e;
Eh[45] = ji.indexOf("+"), Eh[95] = ji.indexOf("/"), zd = {
    dec (e) {
        let t = e.length * 3 / 4;
        e[e.length - 2] == "=" ? t -= 2 : e[e.length - 1] == "=" && (t -= 1);
        let n = new Uint8Array(t), r = 0, s = 0, i, a = 0;
        for(let o = 0; o < e.length; o++){
            if (i = Eh[e.charCodeAt(o)], i === void 0) switch(e[o]){
                case "=":
                    s = 0;
                case `
`:
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(s){
                case 0:
                    a = i, s = 1;
                    break;
                case 1:
                    n[r++] = a << 2 | (i & 48) >> 4, a = i, s = 2;
                    break;
                case 2:
                    n[r++] = (a & 15) << 4 | (i & 60) >> 2, a = i, s = 3;
                    break;
                case 3:
                    n[r++] = (a & 3) << 6 | i, s = 0;
                    break;
            }
        }
        if (s == 1) throw Error("invalid base64 string.");
        return n.subarray(0, r);
    },
    enc (e) {
        let t = "", n = 0, r, s = 0;
        for(let i = 0; i < e.length; i++)switch(r = e[i], n){
            case 0:
                t += ji[r >> 2], s = (r & 3) << 4, n = 1;
                break;
            case 1:
                t += ji[s | r >> 4], s = (r & 15) << 2, n = 2;
                break;
            case 2:
                t += ji[s | r >> 6], t += ji[r & 63], n = 0;
                break;
        }
        return n && (t += ji[s], t += "=", n == 1 && (t += "=")), t;
    }
};

}
