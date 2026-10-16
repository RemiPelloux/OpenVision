"use strict";
module.exports = function(e, t, A) {
    if (!e || void 0 === e[t] || null === e[t]) return A;
    if ("number" != typeof e[t] || isNaN(e[t])) throw new TypeError("Limit " + t + " is not a valid number");
    return e[t];
};
