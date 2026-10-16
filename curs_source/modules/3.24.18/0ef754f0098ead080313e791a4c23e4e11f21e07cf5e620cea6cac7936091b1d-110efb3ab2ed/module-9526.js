"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), t = [];
for(let e = 0; e < n.length; e++)t[n[e].charCodeAt(0)] = e;
t["-".charCodeAt(0)] = n.indexOf("+"), t["_".charCodeAt(0)] = n.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let a = 3 * e.length / 4;
        "=" == e[e.length - 2] ? a -= 2 : "=" == e[e.length - 1] && (a -= 1);
        let n, s = new Uint8Array(a), o = 0, r = 0, i = 0;
        for(let a = 0; a < e.length; a++){
            if (n = t[e.charCodeAt(a)], void 0 === n) switch(e[a]){
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
                    i = n, r = 1;
                    break;
                case 1:
                    s[o++] = i << 2 | (48 & n) >> 4, i = n, r = 2;
                    break;
                case 2:
                    s[o++] = (15 & i) << 4 | (60 & n) >> 2, i = n, r = 3;
                    break;
                case 3:
                    s[o++] = (3 & i) << 6 | n, r = 0;
            }
        }
        if (1 == r) throw Error("invalid base64 string.");
        return s.subarray(0, o);
    },
    enc (e) {
        let a, t = "", s = 0, o = 0;
        for(let r = 0; r < e.length; r++)switch(a = e[r], s){
            case 0:
                t += n[a >> 2], o = (3 & a) << 4, s = 1;
                break;
            case 1:
                t += n[o | a >> 4], o = (15 & a) << 2, s = 2;
                break;
            case 2:
                t += n[o | a >> 6], t += n[63 & a], s = 0;
        }
        return s && (t += n[o], t += "=", 1 == s && (t += "=")), t;
    }
};
