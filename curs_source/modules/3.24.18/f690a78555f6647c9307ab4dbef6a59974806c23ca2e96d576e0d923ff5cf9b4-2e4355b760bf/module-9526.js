"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = [];
for(let e = 0; e < t.length; e++)n[t[e].charCodeAt(0)] = e;
n["-".charCodeAt(0)] = t.indexOf("+"), n["_".charCodeAt(0)] = t.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let A = 3 * e.length / 4;
        "=" == e[e.length - 2] ? A -= 2 : "=" == e[e.length - 1] && (A -= 1);
        let t, r = new Uint8Array(A), o = 0, s = 0, a = 0;
        for(let A = 0; A < e.length; A++){
            if (t = n[e.charCodeAt(A)], void 0 === t) switch(e[A]){
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
                    a = t, s = 1;
                    break;
                case 1:
                    r[o++] = a << 2 | (48 & t) >> 4, a = t, s = 2;
                    break;
                case 2:
                    r[o++] = (15 & a) << 4 | (60 & t) >> 2, a = t, s = 3;
                    break;
                case 3:
                    r[o++] = (3 & a) << 6 | t, s = 0;
            }
        }
        if (1 == s) throw Error("invalid base64 string.");
        return r.subarray(0, o);
    },
    enc (e) {
        let A, n = "", r = 0, o = 0;
        for(let s = 0; s < e.length; s++)switch(A = e[s], r){
            case 0:
                n += t[A >> 2], o = (3 & A) << 4, r = 1;
                break;
            case 1:
                n += t[o | A >> 4], o = (15 & A) << 2, r = 2;
                break;
            case 2:
                n += t[o | A >> 6], n += t[63 & A], r = 0;
        }
        return r && (n += t[o], n += "=", 1 == r && (n += "=")), n;
    }
};
