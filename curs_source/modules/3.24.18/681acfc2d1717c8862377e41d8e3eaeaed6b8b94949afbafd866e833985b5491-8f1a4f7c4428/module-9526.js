"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = [];
for(let e = 0; e < A.length; e++)n[A[e].charCodeAt(0)] = e;
n["-".charCodeAt(0)] = A.indexOf("+"), n["_".charCodeAt(0)] = A.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let t = 3 * e.length / 4;
        "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
        let A, r = new Uint8Array(t), o = 0, s = 0, i = 0;
        for(let t = 0; t < e.length; t++){
            if (A = n[e.charCodeAt(t)], void 0 === A) switch(e[t]){
                case "=":
                    s = 0;
                case "\n":
                case "\r":
                case "\t":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(s){
                case 0:
                    i = A, s = 1;
                    break;
                case 1:
                    r[o++] = i << 2 | (48 & A) >> 4, i = A, s = 2;
                    break;
                case 2:
                    r[o++] = (15 & i) << 4 | (60 & A) >> 2, i = A, s = 3;
                    break;
                case 3:
                    r[o++] = (3 & i) << 6 | A, s = 0;
            }
        }
        if (1 == s) throw Error("invalid base64 string.");
        return r.subarray(0, o);
    },
    enc (e) {
        let t, n = "", r = 0, o = 0;
        for(let s = 0; s < e.length; s++)switch(t = e[s], r){
            case 0:
                n += A[t >> 2], o = (3 & t) << 4, r = 1;
                break;
            case 1:
                n += A[o | t >> 4], o = (15 & t) << 2, r = 2;
                break;
            case 2:
                n += A[o | t >> 6], n += A[63 & t], r = 0;
        }
        return r && (n += A[o], n += "=", 1 == r && (n += "=")), n;
    }
};
