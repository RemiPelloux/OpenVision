"use strict";
const n = require("./module-2613.js"), { URLSerializer: r } = require("./module-3631.js"), { isValidHeaderName: o } = require("./module-5728.js");
module.exports = {
    urlEquals: function(e, A, t = !1) {
        return r(e, t) === r(A, t);
    },
    fieldValues: function(e) {
        n(null !== e);
        const A = [];
        for (let t of e.split(","))t = t.trim(), t.length && o(t) && A.push(t);
        return A;
    }
};
