"use strict";
require.d(exports, {
    Q: ()=>s,
    s: ()=>o
});
var n = require("./module-20181.js");
const s = (e, t = 0, r = e.byteLength - t)=>{
    if (s = e, !("function" == typeof ArrayBuffer && s instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(s))) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
    var s;
    return n.Buffer.from(e, t, r);
}, o = (e, t)=>{
    if ("string" != typeof e) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return t ? n.Buffer.from(e, t) : n.Buffer.from(e);
};
