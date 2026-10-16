"use strict";
var n;
require.d(exports, {
    M2: ()=>s,
    MS: ()=>o,
    dB: ()=>n
}), function(e) {
    e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256";
}(n || (n = {}));
const s = (e)=>{
    const t = [];
    return void 0 !== e.sha256 && t.push({
        algorithmId: ()=>n.SHA256,
        checksumConstructor: ()=>e.sha256
    }), null != e.md5 && t.push({
        algorithmId: ()=>n.MD5,
        checksumConstructor: ()=>e.md5
    }), {
        addChecksumAlgorithm (e) {
            t.push(e);
        },
        checksumAlgorithms: ()=>t
    };
}, o = (e)=>{
    const t = {};
    return e.checksumAlgorithms().forEach((e)=>{
        t[e.algorithmId()] = e.checksumConstructor();
    }), t;
};
