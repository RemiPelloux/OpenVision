"use strict";
const n = exports;
n._reverse = function(e) {
    const t = {};
    return Object.keys(e).forEach(function(A) {
        (0 | A) == A && (A |= 0);
        const n = e[A];
        t[n] = A;
    }), t;
}, n.der = require("./module-6457.js");
