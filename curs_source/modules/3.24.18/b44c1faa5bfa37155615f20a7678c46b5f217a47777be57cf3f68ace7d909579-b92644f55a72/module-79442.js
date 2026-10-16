"use strict";
const n = require("./module-42613.js"), { URLSerializer: s } = require("./module-64387.js"), { isValidHeaderName: o } = require("./module-98116.js");
module.exports = {
    urlEquals: function(e, t, r = !1) {
        return s(e, r) === s(t, r);
    },
    fieldValues: function(e) {
        n(null !== e);
        const t = [];
        for (let r of e.split(","))r = r.trim(), r.length && o(r) && t.push(r);
        return t;
    }
};
