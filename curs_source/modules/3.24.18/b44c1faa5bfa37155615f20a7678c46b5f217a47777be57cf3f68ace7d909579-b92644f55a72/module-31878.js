"use strict";
const n = require("./module-77378.js");
module.exports = function({ maxRedirections: e }) {
    return (t)=>function(r, s) {
            const { maxRedirections: o = e } = r;
            if (!o) return t(r, s);
            const i = new n(t, o, r, s);
            return r = {
                ...r,
                maxRedirections: 0
            }, t(r, i);
        };
};
