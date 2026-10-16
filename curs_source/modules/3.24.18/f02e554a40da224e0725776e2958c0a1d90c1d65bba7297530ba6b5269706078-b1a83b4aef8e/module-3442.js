"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.decodeBase64 = n, exports.decodeJwt = function(t) {
    const e = n(t.split(".")[1]);
    return JSON.parse(r.decode(e));
};
const r = new TextDecoder;
function n(t) {
    let e = 0, r = 0, n = 0;
    const s = new Uint8Array(Math.floor(t.length / 4 * 3)), i = (t)=>{
        switch(r){
            case 3:
                s[n++] = e | t, r = 0;
                break;
            case 2:
                s[n++] = e | t >>> 2, e = t << 6, r = 3;
                break;
            case 1:
                s[n++] = e | t >>> 4, e = t << 4, r = 2;
                break;
            default:
                e = t << 2, r = 1;
        }
    };
    for(let e = 0; e < t.length; e++){
        const r = t.charCodeAt(e);
        if (r >= 65 && r <= 90) i(r - 65);
        else if (r >= 97 && r <= 122) i(r - 97 + 26);
        else if (r >= 48 && r <= 57) i(r - 48 + 52);
        else if (43 === r || 45 === r) i(62);
        else {
            if (47 !== r && 95 !== r) {
                if (61 === r) break;
                throw new SyntaxError(`Unexpected base64 character ${t[e]}`);
            }
            i(63);
        }
    }
    const o = n;
    for(; r > 0;)i(0);
    return s.subarray(0, o);
}
