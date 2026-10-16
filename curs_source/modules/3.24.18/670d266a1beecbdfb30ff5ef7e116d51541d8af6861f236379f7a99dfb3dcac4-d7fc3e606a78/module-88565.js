"use strict";
exports.stringToBytes = (e)=>[
        ...e
    ].map((e)=>e.charCodeAt(0)), exports.tarHeaderChecksumMatches = (e, t = 0)=>{
    const i = parseInt(e.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
    if (isNaN(i)) return !1;
    let a = 256;
    for(let i = t; i < t + 148; i++)a += e[i];
    for(let i = t + 156; i < t + 512; i++)a += e[i];
    return i === a;
}, exports.uint32SyncSafeToken = {
    get: (e, t)=>127 & e[t + 3] | e[t + 2] << 7 | e[t + 1] << 14 | e[t] << 21,
    len: 4
};
