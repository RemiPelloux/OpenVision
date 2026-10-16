"use strict";
module.exports = function(e, A, t) {
    if (!e || void 0 === e[A] || null === e[A]) return t;
    if ("number" != typeof e[A] || isNaN(e[A])) throw new TypeError("Limit " + A + " is not a valid number");
    return e[A];
};
