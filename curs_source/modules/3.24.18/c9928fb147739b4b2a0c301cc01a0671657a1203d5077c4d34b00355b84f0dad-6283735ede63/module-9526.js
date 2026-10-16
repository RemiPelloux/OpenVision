Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), s = [];
for(let e = 0; e < n.length; e++)s[n[e].charCodeAt(0)] = e;
s["-".charCodeAt(0)] = n.indexOf("+"), s["_".charCodeAt(0)] = n.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let a = 3 * e.length / 4;
        "=" == e[e.length - 2] ? a -= 2 : "=" == e[e.length - 1] && (a -= 1);
        let n, o = new Uint8Array(a), r = 0, t = 0, i = 0;
        for(let a = 0; a < e.length; a++){
            if (n = s[e.charCodeAt(a)], void 0 === n) switch(e[a]){
                case "=":
                    t = 0;
                case "\n":
                case "\r":
                case "\t":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
            switch(t){
                case 0:
                    i = n, t = 1;
                    break;
                case 1:
                    o[r++] = i << 2 | (48 & n) >> 4, i = n, t = 2;
                    break;
                case 2:
                    o[r++] = (15 & i) << 4 | (60 & n) >> 2, i = n, t = 3;
                    break;
                case 3:
                    o[r++] = (3 & i) << 6 | n, t = 0;
            }
        }
        if (1 == t) throw Error("invalid base64 string.");
        return o.subarray(0, r);
    },
    enc (e) {
        let a, s = "", o = 0, r = 0;
        for(let t = 0; t < e.length; t++)switch(a = e[t], o){
            case 0:
                s += n[a >> 2], r = (3 & a) << 4, o = 1;
                break;
            case 1:
                s += n[r | a >> 4], r = (15 & a) << 2, o = 2;
                break;
            case 2:
                s += n[r | a >> 6], s += n[63 & a], o = 0;
        }
        return o && (s += n[r], s += "=", 1 == o && (s += "=")), s;
    }
};
