"use strict";
const t = require("./module-1942.js");
module.exports = function({ maxRedirections: e }) {
    return (n)=>function(a, s) {
            const { maxRedirections: o = e } = a;
            if (!o) return n(a, s);
            const r = new t(n, o, a, s);
            return a = {
                ...a,
                maxRedirections: 0
            }, n(a, r);
        };
};
