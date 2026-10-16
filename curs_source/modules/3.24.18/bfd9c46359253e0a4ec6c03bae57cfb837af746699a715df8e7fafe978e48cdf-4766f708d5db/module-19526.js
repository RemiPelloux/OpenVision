"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = [];
for(let e = 0; e < r.length; e++)n[r[e].charCodeAt(0)] = e;
n["-".charCodeAt(0)] = r.indexOf("+"), n["_".charCodeAt(0)] = r.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let t = 3 * e.length / 4;
        "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
        let r, s = new Uint8Array(t), o = 0, i = 0, a = 0;
        for(let t = 0; t < e.length; t++){
            if (r = n[e.charCodeAt(t)], void 0 === r) switch(e[t]){
                case "=":
                    i = 0;
                case "\n":
                case "\r":
                case "\t":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(i){
                case 0:
                    a = r, i = 1;
                    break;
                case 1:
                    s[o++] = a << 2 | (48 & r) >> 4, a = r, i = 2;
                    break;
                case 2:
                    s[o++] = (15 & a) << 4 | (60 & r) >> 2, a = r, i = 3;
                    break;
                case 3:
                    s[o++] = (3 & a) << 6 | r, i = 0;
            }
        }
        if (1 == i) throw Error("invalid base64 string.");
        return s.subarray(0, o);
    },
    enc (e) {
        let t, n = "", s = 0, o = 0;
        for(let i = 0; i < e.length; i++)switch(t = e[i], s){
            case 0:
                n += r[t >> 2], o = (3 & t) << 4, s = 1;
                break;
            case 1:
                n += r[o | t >> 4], o = (15 & t) << 2, s = 2;
                break;
            case 2:
                n += r[o | t >> 6], n += r[63 & t], s = 0;
        }
        return s && (n += r[o], n += "=", 1 == s && (n += "=")), n;
    }
};
