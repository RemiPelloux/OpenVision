"use strict";
require.d(exports, {
    F: ()=>s
});
var n = require(6846);
const s = (e)=>"string" == typeof e ? (0, n.a)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
