"use strict";
require.r(exports), require.d(exports, {
    fromBase64: ()=>i,
    toBase64: ()=>o.n
});
var n = require(90443);
const s = /^[A-Za-z0-9+/]*={0,2}$/, i = (e)=>{
    if (3 * e.length % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
    if (!s.exec(e)) throw new TypeError("Invalid base64 string.");
    const t = (0, n.s)(e, "base64");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
};
var o = require("./module-55936.js");
