Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), r = [];
for(let e = 0; e < n.length; e++)r[n[e].charCodeAt(0)] = e;
r["-".charCodeAt(0)] = n.indexOf("+"), r["_".charCodeAt(0)] = n.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let t = 3 * e.length / 4;
        "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
        let n, o = new Uint8Array(t), a = 0, s = 0, i = 0;
        for(let t = 0; t < e.length; t++){
            if (n = r[e.charCodeAt(t)], void 0 === n) switch(e[t]){
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
                    i = n, s = 1;
                    break;
                case 1:
                    o[a++] = i << 2 | (48 & n) >> 4, i = n, s = 2;
                    break;
                case 2:
                    o[a++] = (15 & i) << 4 | (60 & n) >> 2, i = n, s = 3;
                    break;
                case 3:
                    o[a++] = (3 & i) << 6 | n, s = 0;
            }
        }
        if (1 == s) throw Error("invalid base64 string.");
        return o.subarray(0, a);
    },
    enc (e) {
        let t, r = "", o = 0, a = 0;
        for(let s = 0; s < e.length; s++)switch(t = e[s], o){
            case 0:
                r += n[t >> 2], a = (3 & t) << 4, o = 1;
                break;
            case 1:
                r += n[a | t >> 4], a = (15 & t) << 2, o = 2;
                break;
            case 2:
                r += n[a | t >> 6], r += n[63 & t], o = 0;
        }
        return o && (r += n[a], r += "=", 1 == o && (r += "=")), r;
    }
};
