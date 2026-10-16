"use strict";
module.exports = function(e, n, a) {
    if (!e || void 0 === e[n] || null === e[n]) return a;
    if ("number" != typeof e[n] || isNaN(e[n])) throw new TypeError("Limit " + n + " is not a valid number");
    return e[n];
};
