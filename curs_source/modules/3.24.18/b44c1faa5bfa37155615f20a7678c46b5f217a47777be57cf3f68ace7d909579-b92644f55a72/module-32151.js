"use strict";
const n = require("./module-79896.js"), s = require("./module-70597.js");
module.exports = function(e) {
    const t = Buffer.alloc(150);
    let r;
    try {
        r = n.openSync(e, "r"), n.readSync(r, t, 0, 150, 0), n.closeSync(r);
    } catch (e) {}
    return s(t.toString());
};
