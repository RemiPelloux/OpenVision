"use strict";
const t = require("./module-2613.js"), { URLSerializer: s } = require("./module-3631.js"), { isValidHeaderName: o } = require("./module-5728.js");
module.exports = {
    urlEquals: function(e, a, n = !1) {
        return s(e, n) === s(a, n);
    },
    fieldValues: function(e) {
        t(null !== e);
        const a = [];
        for (let n of e.split(","))n = n.trim(), n.length && o(n) && a.push(n);
        return a;
    }
};
