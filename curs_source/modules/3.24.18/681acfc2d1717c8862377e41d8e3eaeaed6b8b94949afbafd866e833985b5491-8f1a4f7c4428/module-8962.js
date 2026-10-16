"use strict";
const n = require("./module-2276.js"), r = require("./module-5775.js");
function o(e) {
    r.call(this, e), this.enc = "pem";
}
n(o, r), module.exports = o, o.prototype.encode = function(e, t) {
    const A = r.prototype.encode.call(this, e).toString("base64"), n = [
        "-----BEGIN " + t.label + "-----"
    ];
    for(let e = 0; e < A.length; e += 64)n.push(A.slice(e, e + 64));
    return n.push("-----END " + t.label + "-----"), n.join("\n");
};
