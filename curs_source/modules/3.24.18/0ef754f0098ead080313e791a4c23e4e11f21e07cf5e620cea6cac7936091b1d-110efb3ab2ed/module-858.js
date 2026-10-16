"use strict";
const t = require("./module-1942.js");
module.exports = function({ maxRedirections: e }) {
    return (a)=>function(n, s) {
            const { maxRedirections: o = e } = n;
            if (!o) return a(n, s);
            const r = new t(a, o, n, s);
            return n = {
                ...n,
                maxRedirections: 0
            }, a(n, r);
        };
};
