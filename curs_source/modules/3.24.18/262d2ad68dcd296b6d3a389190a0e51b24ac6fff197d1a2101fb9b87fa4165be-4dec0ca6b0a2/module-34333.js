"use strict";
const n = require("./module-3482.js"), o = require("./module-62594.js");
module.exports = function(e, t, r) {
    const s = o(r), i = n(e, s);
    if ("function" != typeof i.parse) throw new TypeError('expected "' + e + '.parse" to be a function');
    return i.parse(t, s);
};
