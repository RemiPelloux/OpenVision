"use strict";
const a = require("./module-1942.js");
module.exports = function({ maxRedirections: e }) {
    return (n)=>function(t, s) {
            const { maxRedirections: o = e } = t;
            if (!o) return n(t, s);
            const r = new a(n, o, t, s);
            return t = {
                ...t,
                maxRedirections: 0
            }, n(t, r);
        };
};
