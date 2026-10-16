"use strict";
const r = require("./module-72005.js");
module.exports = function({ maxRedirections: A }) {
    return (e)=>function(t, s) {
            const { maxRedirections: o = A } = t;
            if (!o) return e(t, s);
            const n = new r(e, o, t, s);
            return t = {
                ...t,
                maxRedirections: 0
            }, e(t, n);
        };
};
