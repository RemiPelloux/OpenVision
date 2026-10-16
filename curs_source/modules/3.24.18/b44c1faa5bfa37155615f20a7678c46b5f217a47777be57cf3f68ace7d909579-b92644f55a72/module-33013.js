"use strict";
module.exports = function(e, t, r) {
    if (!e || void 0 === e[t] || null === e[t]) return r;
    if ("number" != typeof e[t] || isNaN(e[t])) throw new TypeError("Limit " + t + " is not a valid number");
    return e[t];
};
