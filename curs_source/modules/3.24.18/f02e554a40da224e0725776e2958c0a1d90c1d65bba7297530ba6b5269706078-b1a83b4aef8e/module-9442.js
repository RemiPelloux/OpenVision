"use strict";
const n = require("./module-2613.js"), { URLSerializer: s } = require("./module-4387.js"), { isValidHeaderName: i } = require("./module-8116.js");
module.exports = {
    urlEquals: function(t, e, r = !1) {
        return s(t, r) === s(e, r);
    },
    fieldValues: function(t) {
        n(null !== t);
        const e = [];
        for (let r of t.split(","))r = r.trim(), r.length && i(r) && e.push(r);
        return e;
    }
};
