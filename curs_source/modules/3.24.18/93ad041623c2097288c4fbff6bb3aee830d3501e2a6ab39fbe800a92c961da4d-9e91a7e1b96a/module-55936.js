"use strict";
require.d(exports, {
    n: ()=>i
});
var n = require(90443), s = require(6846);
const i = (e)=>{
    let t;
    if (t = "string" == typeof e ? (0, s.a)(e) : e, "object" != typeof t || "number" != typeof t.byteOffset || "number" != typeof t.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return (0, n.Q)(t.buffer, t.byteOffset, t.byteLength).toString("base64");
};
