"use strict";
const n = require("./module-7378.js");
module.exports = function({ maxRedirections: t }) {
    return (e)=>function(r, s) {
            const { maxRedirections: i = t } = r;
            if (!i) return e(r, s);
            const o = new n(e, i, r, s);
            return r = {
                ...r,
                maxRedirections: 0
            }, e(r, o);
        };
};
