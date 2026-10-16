"use strict";
require.d(exports, {
    Q: ()=>o,
    s: ()=>s
});
var n = require("./module-20181.js");
const o = (e, t = 0, r = e.byteLength - t)=>{
    if (o = e, !("function" == typeof ArrayBuffer && o instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(o))) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
    var o;
    return n.Buffer.from(e, t, r);
}, s = (e, t)=>{
    if ("string" != typeof e) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return t ? n.Buffer.from(e, t) : n.Buffer.from(e);
};
