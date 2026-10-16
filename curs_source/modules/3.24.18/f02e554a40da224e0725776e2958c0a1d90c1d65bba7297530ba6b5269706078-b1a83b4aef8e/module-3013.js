"use strict";
module.exports = function(t, e, r) {
    if (!t || void 0 === t[e] || null === t[e]) return r;
    if ("number" != typeof t[e] || isNaN(t[e])) throw new TypeError("Limit " + e + " is not a valid number");
    return t[e];
};
