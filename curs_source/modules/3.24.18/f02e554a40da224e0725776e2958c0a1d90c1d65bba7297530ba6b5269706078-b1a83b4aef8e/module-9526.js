"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = [];
for(let t = 0; t < r.length; t++)n[r[t].charCodeAt(0)] = t;
n["-".charCodeAt(0)] = r.indexOf("+"), n["_".charCodeAt(0)] = r.indexOf("/"), exports.protoBase64 = {
    dec (t) {
        let e = 3 * t.length / 4;
        "=" == t[t.length - 2] ? e -= 2 : "=" == t[t.length - 1] && (e -= 1);
        let r, s = new Uint8Array(e), i = 0, o = 0, a = 0;
        for(let e = 0; e < t.length; e++){
            if (r = n[t.charCodeAt(e)], void 0 === r) switch(t[e]){
                case "=":
                    o = 0;
                case "\n":
                case "\r":
                case "\t":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(o){
                case 0:
                    a = r, o = 1;
                    break;
                case 1:
                    s[i++] = a << 2 | (48 & r) >> 4, a = r, o = 2;
                    break;
                case 2:
                    s[i++] = (15 & a) << 4 | (60 & r) >> 2, a = r, o = 3;
                    break;
                case 3:
                    s[i++] = (3 & a) << 6 | r, o = 0;
            }
        }
        if (1 == o) throw Error("invalid base64 string.");
        return s.subarray(0, i);
    },
    enc (t) {
        let e, n = "", s = 0, i = 0;
        for(let o = 0; o < t.length; o++)switch(e = t[o], s){
            case 0:
                n += r[e >> 2], i = (3 & e) << 4, s = 1;
                break;
            case 1:
                n += r[i | e >> 4], i = (15 & e) << 2, s = 2;
                break;
            case 2:
                n += r[i | e >> 6], n += r[63 & e], s = 0;
        }
        return s && (n += r[i], n += "=", 1 == s && (n += "=")), n;
    }
};
