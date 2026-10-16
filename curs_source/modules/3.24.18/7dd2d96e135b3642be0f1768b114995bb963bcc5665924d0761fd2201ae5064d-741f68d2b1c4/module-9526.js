"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), a = [];
for(let e = 0; e < t.length; e++)a[t[e].charCodeAt(0)] = e;
a["-".charCodeAt(0)] = t.indexOf("+"), a["_".charCodeAt(0)] = t.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let n = 3 * e.length / 4;
        "=" == e[e.length - 2] ? n -= 2 : "=" == e[e.length - 1] && (n -= 1);
        let t, s = new Uint8Array(n), o = 0, r = 0, i = 0;
        for(let n = 0; n < e.length; n++){
            if (t = a[e.charCodeAt(n)], void 0 === t) switch(e[n]){
                case "=":
                    r = 0;
                case "\n":
                case "\r":
                case "\t":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(r){
                case 0:
                    i = t, r = 1;
                    break;
                case 1:
                    s[o++] = i << 2 | (48 & t) >> 4, i = t, r = 2;
                    break;
                case 2:
                    s[o++] = (15 & i) << 4 | (60 & t) >> 2, i = t, r = 3;
                    break;
                case 3:
                    s[o++] = (3 & i) << 6 | t, r = 0;
            }
        }
        if (1 == r) throw Error("invalid base64 string.");
        return s.subarray(0, o);
    },
    enc (e) {
        let n, a = "", s = 0, o = 0;
        for(let r = 0; r < e.length; r++)switch(n = e[r], s){
            case 0:
                a += t[n >> 2], o = (3 & n) << 4, s = 1;
                break;
            case 1:
                a += t[o | n >> 4], o = (15 & n) << 2, s = 2;
                break;
            case 2:
                a += t[o | n >> 6], a += t[63 & n], s = 0;
        }
        return s && (a += t[o], a += "=", 1 == s && (a += "=")), a;
    }
};
