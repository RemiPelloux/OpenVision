"use strict";
const t = require("./module-2613.js"), { URLSerializer: s } = require("./module-3631.js"), { isValidHeaderName: o } = require("./module-5728.js");
module.exports = {
    urlEquals: function(e, n, a = !1) {
        return s(e, a) === s(n, a);
    },
    fieldValues: function(e) {
        t(null !== e);
        const n = [];
        for (let a of e.split(","))a = a.trim(), a.length && o(a) && n.push(a);
        return n;
    }
};
