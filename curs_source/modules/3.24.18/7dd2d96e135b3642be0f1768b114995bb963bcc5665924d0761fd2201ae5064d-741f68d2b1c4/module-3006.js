"use strict";
const a = require("./module-2613.js"), { URLSerializer: s } = require("./module-3631.js"), { isValidHeaderName: o } = require("./module-5728.js");
module.exports = {
    urlEquals: function(e, n, t = !1) {
        return s(e, t) === s(n, t);
    },
    fieldValues: function(e) {
        a(null !== e);
        const n = [];
        for (let t of e.split(","))t = t.trim(), t.length && o(t) && n.push(t);
        return n;
    }
};
