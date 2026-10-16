"use strict";
const n = require("./module-1942.js");
module.exports = function({ maxRedirections: e }) {
    return (t)=>function(A, r) {
            const { maxRedirections: o = e } = A;
            if (!o) return t(A, r);
            const s = new n(t, o, A, r);
            return A = {
                ...A,
                maxRedirections: 0
            }, t(A, s);
        };
};
