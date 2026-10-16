"use strict";
const r = require(42613), { URLSerializer: s } = require("./module-3631.js"), { isValidHeaderName: o } = require("./module-75728.js");
module.exports = {
    urlEquals: function(A, e, t = !1) {
        return s(A, t) === s(e, t);
    },
    fieldValues: function(A) {
        r(null !== A);
        const e = [];
        for (let t of A.split(","))t = t.trim(), t.length && o(t) && e.push(t);
        return e;
    }
};
