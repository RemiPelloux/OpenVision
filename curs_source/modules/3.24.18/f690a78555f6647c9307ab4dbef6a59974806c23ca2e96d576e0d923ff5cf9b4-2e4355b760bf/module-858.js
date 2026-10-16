"use strict";
const n = require("./module-1942.js");
module.exports = function({ maxRedirections: e }) {
    return (A)=>function(t, r) {
            const { maxRedirections: o = e } = t;
            if (!o) return A(t, r);
            const s = new n(A, o, t, r);
            return t = {
                ...t,
                maxRedirections: 0
            }, A(t, s);
        };
};
