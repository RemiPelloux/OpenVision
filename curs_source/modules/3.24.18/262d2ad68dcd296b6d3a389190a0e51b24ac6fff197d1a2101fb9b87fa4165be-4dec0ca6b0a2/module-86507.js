"use strict";
require.d(exports, {
    P: ()=>o
});
var n = require("./module-90443.js");
const o = (e)=>{
    if ("string" == typeof e) return e;
    if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    return (0, n.Q)(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
};
