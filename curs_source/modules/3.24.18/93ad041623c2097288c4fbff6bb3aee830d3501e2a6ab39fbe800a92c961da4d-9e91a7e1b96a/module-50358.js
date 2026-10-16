"use strict";
require.r(exports), require.d(exports, {
    calculateBodyLength: ()=>s
});
var n = require(73024);
const s = (e)=>{
    if (!e) return 0;
    if ("string" == typeof e) return Buffer.byteLength(e);
    if ("number" == typeof e.byteLength) return e.byteLength;
    if ("number" == typeof e.size) return e.size;
    if ("number" == typeof e.start && "number" == typeof e.end) return e.end + 1 - e.start;
    if (e instanceof n.ReadStream) {
        if (null != e.path) return (0, n.lstatSync)(e.path).size;
        if ("number" == typeof e.fd) return (0, n.fstatSync)(e.fd).size;
    }
    throw new Error(`Body Length computation failed for ${e}`);
};
