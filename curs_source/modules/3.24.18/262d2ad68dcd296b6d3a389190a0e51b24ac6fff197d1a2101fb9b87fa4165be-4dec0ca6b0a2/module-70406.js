"use strict";
const n = require("./module-13808.js"), o = require("./module-68139.js");
function s(e, t, r = !1) {
    return !t || null !== t.windows && void 0 !== t.windows || (t = {
        ...t,
        windows: o.isWindows()
    }), n(e, t, r);
}
Object.assign(s, n), module.exports = s;
