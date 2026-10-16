"use strict";
module.exports = function(A, e, t) {
    if (!A || void 0 === A[e] || null === A[e]) return t;
    if ("number" != typeof A[e] || isNaN(A[e])) throw new TypeError("Limit " + e + " is not a valid number");
    return A[e];
};
