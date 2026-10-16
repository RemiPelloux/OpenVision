"use strict";
const n = require("./module-13808.js"), s = require("./module-68139.js");
function o(e, t, r = !1) {
    return !t || null !== t.windows && void 0 !== t.windows || (t = {
        ...t,
        windows: s.isWindows()
    }), n(e, t, r);
}
Object.assign(o, n), module.exports = o;
