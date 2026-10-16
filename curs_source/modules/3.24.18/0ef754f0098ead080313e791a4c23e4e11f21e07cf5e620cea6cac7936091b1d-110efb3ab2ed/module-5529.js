"use strict";
module.exports = function(e, a, n) {
    if (!e || void 0 === e[a] || null === e[a]) return n;
    if ("number" != typeof e[a] || isNaN(e[a])) throw new TypeError("Limit " + a + " is not a valid number");
    return e[a];
};
