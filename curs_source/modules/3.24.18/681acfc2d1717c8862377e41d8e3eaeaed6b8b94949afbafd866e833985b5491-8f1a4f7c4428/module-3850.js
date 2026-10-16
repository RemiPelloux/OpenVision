"use strict";
const n = require("./module-2276.js"), r = require("./module-9845.js").Buffer, o = require("./module-3975.js");
function s(e) {
    o.call(this, e), this.enc = "pem";
}
n(s, o), module.exports = s, s.prototype.decode = function(e, t) {
    const A = e.toString().split(/[\r\n]+/g), n = t.label.toUpperCase(), s = /^-----(BEGIN|END) ([^-]+)-----$/;
    let i = -1, a = -1;
    for(let e = 0; e < A.length; e++){
        const t = A[e].match(s);
        if (null !== t && t[2] === n) {
            if (-1 !== i) {
                if ("END" !== t[1]) break;
                a = e;
                break;
            }
            if ("BEGIN" !== t[1]) break;
            i = e;
        }
    }
    if (-1 === i || -1 === a) throw new Error("PEM section not found for: " + n);
    const c = A.slice(i + 1, a).join("");
    c.replace(/[^a-z0-9+/=]+/gi, "");
    const l = r.from(c, "base64");
    return o.prototype.decode.call(this, l, t);
};
