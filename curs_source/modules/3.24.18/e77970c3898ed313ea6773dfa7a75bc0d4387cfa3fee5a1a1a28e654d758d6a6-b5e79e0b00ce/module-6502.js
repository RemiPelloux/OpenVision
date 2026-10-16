"use strict";
require.r(exports), require.d(exports, {
    default: ()=>a
});
var o = require("./module-6643.js");
function a() {
    return {
        mime: "image/jpeg",
        encode: (r, { quality: e = 100 } = {})=>o.encode(r, e).data,
        decode: (r, e)=>o.decode(r, e)
    };
}
