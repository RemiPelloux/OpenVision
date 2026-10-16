"use strict";
const n = require("./module-9896.js"), o = require("./module-597.js");
module.exports = function(e) {
    const t = Buffer.alloc(150);
    let r;
    try {
        r = n.openSync(e, "r"), n.readSync(r, t, 0, 150, 0), n.closeSync(r);
    } catch (e) {}
    return o(t.toString());
};
