"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.decodeBase64 = n, exports.decodeJwt = function(e) {
    const t = n(e.split(".")[1]);
    return JSON.parse(r.decode(t));
};
const r = new TextDecoder;
function n(e) {
    let t = 0, r = 0, n = 0;
    const s = new Uint8Array(Math.floor(e.length / 4 * 3)), o = (e)=>{
        switch(r){
            case 3:
                s[n++] = t | e, r = 0;
                break;
            case 2:
                s[n++] = t | e >>> 2, t = e << 6, r = 3;
                break;
            case 1:
                s[n++] = t | e >>> 4, t = e << 4, r = 2;
                break;
            default:
                t = e << 2, r = 1;
        }
    };
    for(let t = 0; t < e.length; t++){
        const r = e.charCodeAt(t);
        if (r >= 65 && r <= 90) o(r - 65);
        else if (r >= 97 && r <= 122) o(r - 97 + 26);
        else if (r >= 48 && r <= 57) o(r - 48 + 52);
        else if (43 === r || 45 === r) o(62);
        else {
            if (47 !== r && 95 !== r) {
                if (61 === r) break;
                throw new SyntaxError(`Unexpected base64 character ${e[t]}`);
            }
            o(63);
        }
    }
    const i = n;
    for(; r > 0;)o(0);
    return s.subarray(0, i);
}
