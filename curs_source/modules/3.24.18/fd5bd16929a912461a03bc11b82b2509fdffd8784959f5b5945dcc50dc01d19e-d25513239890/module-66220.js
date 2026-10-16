"use strict";
require.d(exports, {
    p: ()=>i
});
var n = require(96851), s = require("./module-88141.js");
const i = async ({ headers: e, body: t }, r)=>{
    for (const t of Object.keys(e))if (t.toLowerCase() === s.Wd) return e[t];
    if (null == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    if ("string" == typeof t || ArrayBuffer.isView(t) || (0, n.isArrayBuffer)(t)) {
        const e = new r;
        return e.update((0, n.toUint8Array)(t)), (0, n.toHex)(await e.digest());
    }
    return s.z8;
};
