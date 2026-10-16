"use strict";
const r = require(56970), { URLSerializer: s } = require("./module-52603.js"), { isValidHeaderName: o } = require("./module-48215.js");
module.exports = {
    urlEquals: function(A, e, t = !1) {
        return s(A, t) === s(e, t);
    },
    getFieldValues: function(A) {
        r(null !== A);
        const e = [];
        for (let t of A.split(","))t = t.trim(), o(t) && e.push(t);
        return e;
    }
};
