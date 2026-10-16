"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), t = [];
for(let e = 0; e < a.length; e++)t[a[e].charCodeAt(0)] = e;
t["-".charCodeAt(0)] = a.indexOf("+"), t["_".charCodeAt(0)] = a.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let n = 3 * e.length / 4;
        "=" == e[e.length - 2] ? n -= 2 : "=" == e[e.length - 1] && (n -= 1);
        let a, s = new Uint8Array(n), o = 0, r = 0, i = 0;
        for(let n = 0; n < e.length; n++){
            if (a = t[e.charCodeAt(n)], void 0 === a) switch(e[n]){
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
                    i = a, r = 1;
                    break;
                case 1:
                    s[o++] = i << 2 | (48 & a) >> 4, i = a, r = 2;
                    break;
                case 2:
                    s[o++] = (15 & i) << 4 | (60 & a) >> 2, i = a, r = 3;
                    break;
                case 3:
                    s[o++] = (3 & i) << 6 | a, r = 0;
            }
        }
        if (1 == r) throw Error("invalid base64 string.");
        return s.subarray(0, o);
    },
    enc (e) {
        let n, t = "", s = 0, o = 0;
        for(let r = 0; r < e.length; r++)switch(n = e[r], s){
            case 0:
                t += a[n >> 2], o = (3 & n) << 4, s = 1;
                break;
            case 1:
                t += a[o | n >> 4], o = (15 & n) << 2, s = 2;
                break;
            case 2:
                t += a[o | n >> 6], t += a[63 & n], s = 0;
        }
        return s && (t += a[o], t += "=", 1 == s && (t += "=")), t;
    }
};
