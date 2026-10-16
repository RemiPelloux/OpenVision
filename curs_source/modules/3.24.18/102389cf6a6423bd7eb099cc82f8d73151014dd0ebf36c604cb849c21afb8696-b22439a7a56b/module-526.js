Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoBase64 = void 0;
let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), o = [];
for(let e = 0; e < n.length; e++)o[n[e].charCodeAt(0)] = e;
o["-".charCodeAt(0)] = n.indexOf("+"), o["_".charCodeAt(0)] = n.indexOf("/"), exports.protoBase64 = {
    dec (e) {
        let a = 3 * e.length / 4;
        "=" == e[e.length - 2] ? a -= 2 : "=" == e[e.length - 1] && (a -= 1);
        let n, s = new Uint8Array(a), t = 0, r = 0, i = 0;
        for(let a = 0; a < e.length; a++){
            if (n = o[e.charCodeAt(a)], void 0 === n) switch(e[a]){
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
                    s[t++] = i << 2 | (48 & n) >> 4, i = n, r = 2;
                    break;
                case 2:
                    s[t++] = (15 & i) << 4 | (60 & n) >> 2, i = n, r = 3;
                    break;
                case 3:
                    s[t++] = (3 & i) << 6 | n, r = 0;
            }
        }
        if (1 == r) throw Error("invalid base64 string.");
        return s.subarray(0, t);
    },
    enc (e) {
        let a, o = "", s = 0, t = 0;
        for(let r = 0; r < e.length; r++)switch(a = e[r], s){
            case 0:
                o += n[a >> 2], t = (3 & a) << 4, s = 1;
                break;
            case 1:
                o += n[t | a >> 4], t = (15 & a) << 2, s = 2;
                break;
            case 2:
                o += n[t | a >> 6], o += n[63 & a], s = 0;
        }
        return s && (o += n[t], o += "=", 1 == s && (o += "=")), o;
    }
};
