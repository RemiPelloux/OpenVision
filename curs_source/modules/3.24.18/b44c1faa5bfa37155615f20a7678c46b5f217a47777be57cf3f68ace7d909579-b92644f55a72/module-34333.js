"use strict";
const n = require("./module-3482.js"), s = require("./module-40213.js");
module.exports = function(e, t, r) {
    const o = s(r), i = n(e, o);
    if ("function" != typeof i.parse) throw new TypeError('expected "' + e + '.parse" to be a function');
    return i.parse(t, o);
};
