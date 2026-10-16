"use strict";
const n = require("./module-2613.js"), { URLSerializer: r } = require("./module-3631.js"), { isValidHeaderName: o } = require("./module-5728.js");
module.exports = {
    urlEquals: function(e, t, A = !1) {
        return r(e, A) === r(t, A);
    },
    fieldValues: function(e) {
        n(null !== e);
        const t = [];
        for (let A of e.split(","))A = A.trim(), A.length && o(A) && t.push(A);
        return t;
    }
};
